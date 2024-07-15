"use server";

import { db } from "@/lib/db";
import { editProductformSchema } from "@/validations/product/edit-product-validation";
import { revalidatePath } from "next/cache";
import { actionClient } from "@/lib/safe-action";
import {
  BadRequestError,
  InternalServerError,
  NotFoundError,
} from "@/lib/error";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export const editProductAction = actionClient
  .metadata({ actionName: "editProduct" })
  .schema(editProductformSchema)
  .action(async ({ parsedInput }) => {
    // TODO : authorization
    if (!parsedInput.id) {
      throw new BadRequestError("Product ID is required");
    }

    const {
      name,
      description,
      price,
      inventory,
      category,
      isActive,
      isFeatured,
      isArchived,
    } = parsedInput;

    const imageUrls = [
      { type: "image-1", url: parsedInput.imageUrl1 },
      { type: "image-2", url: parsedInput.imageUrl2 },
      { type: "image-3", url: parsedInput.imageUrl3 },
      { type: "image-4", url: parsedInput.imageUrl4 },
    ];

    if (isFeatured) {
      if (isArchived) {
        throw new BadRequestError(
          "A product cannot be featured and archived at the same time"
        );
      }
      if (!isActive) {
        throw new BadRequestError("A featured product must be active");
      }
    } else if (isArchived && isActive) {
      throw new BadRequestError(
        "A product cannot be archived and active at the same time"
      );
    }
    try {
      const product = await db.product.findUnique({
        where: { id: parsedInput.id },
      });
      if (!product) {
        throw new NotFoundError(`Product with ID ${parsedInput.id} not found`);
      }

      return db.$transaction(
        async (tsx) => {
          const product = await tsx.product.update({
            where: { id: parsedInput.id },
            data: {
              name,
              description,
              price,
              inventory,
              category,
              isActive,
              isFeatured,
              isArchived,
            },
          });
          // disable inuse for the images that are old
          await tsx.productImage.updateMany({
            where: {
              productId: product.id,
              type: {
                in: imageUrls.map((imageUrl) => imageUrl.type),
              },
            },
            data: {
              inUse: false,
              productId: null,
            },
          });

          await Promise.all(
            imageUrls.map((imageUrl) =>
              tsx.productImage.create({
                data: {
                  type: imageUrl.type,
                  url: imageUrl.url,
                  productId: product.id,
                },
              })
            )
          );

          revalidatePath("/dashboard/catalog");
          return { message: "Product updated successfully", status: 200 };
        }
      );
    } catch (error) {
      if (error instanceof NotFoundError) {
        throw error;
      }
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === "P2023") {
          throw new BadRequestError("Invalid product ID");
        }
      }
      throw new InternalServerError("Failed to update product");
    }
  });
