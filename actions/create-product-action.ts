"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createProductformSchema } from "@/validations/product/create-product-validation";
import { actionClient } from "@/lib/safe-action";
import { BadRequestError, InternalServerError } from "@/lib/error";

export const addProductAction = actionClient
  .metadata({actionName: "addProduct"})
  .schema(createProductformSchema)
  .action(async ({ parsedInput }) => {
    // TODO : authorization

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
        throw new BadRequestError("A product cannot be featured and archived simultaneously");
      }
      if (!isActive) {
        throw new BadRequestError("A featured product must be active");
      }
    } else if (isArchived && isActive) {
      throw new BadRequestError("A product cannot be archived and active simultaneously");
    }
    try {
      return db.$transaction(async (db) => {
        const product = await db.product.create({
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

        await Promise.all(
          imageUrls.map((imageUrl) =>
            db.productImage.create({
              data: {
                type: imageUrl.type,
                url: imageUrl.url,
                productId: product.id,
              },
            })
          )
        );

        revalidatePath("/dashboard/catalog");

        return {
          success: { message: "Product created successfully", status: 201 },
        };
      });
    } catch (error) {
      throw new InternalServerError("An error occurred while creating product");
    }
  });
