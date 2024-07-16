"use server";

import { actionClient } from "@/lib/safe-action";
import {
  BadRequestError,
  InternalServerError,
  NotFoundError,
} from "@/lib/error";
import { db } from "@/lib/db";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import * as z from "zod";
import { revalidatePath } from "next/cache";

export const archiveProductAction = actionClient
  .metadata({ actionName: "archiveProduct" })
  .schema(z.object({ productId: z.string().uuid() }))
  .action(async ({ parsedInput: { productId } }) => {
    if (!productId) {
      throw new BadRequestError("Product ID is required");
    }

    try {
      // Archive the product
      const product = await db.product.findUnique({
        where: { id: productId },
      });
      if (!product) {
        throw new NotFoundError("Product not found");
      }
      // Update the product
      await db.product.update({
        where: { id: productId },
        data: { isArchived: true, isActive: false, isFeatured: false },
      });
      revalidatePath("/dashboard/catalog");
      return { message: "Product archived successfully", status: 200 };
    } catch (error) {
      if (error instanceof NotFoundError) {
        throw error;
      }
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === "P2023") {
          throw new BadRequestError("Invalid product ID");
        }
      }
      throw new InternalServerError(
        "Something went wrong. Please try again later"
      );
    }
  });
