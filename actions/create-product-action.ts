"use server";

import { db } from "@/lib/db";
import { CreateProductFormValues } from "@/validations/product/create-product-validation";

export const addProductAction = async (values: CreateProductFormValues) => {
  // TODO : authorization
  try {
    const {
      name,
      description,
      price,
      inventory,
      category,
      isActive,
      isFeatured,
      isArchived,
    } = values;

    const imageUrls = [
      { type: "image-1", url: values.imageUrl1 },
      { type: "image-2", url: values.imageUrl2 },
      { type: "image-3", url: values.imageUrl3 },
      { type: "image-4", url: values.imageUrl4 },
    ];

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

      return { message: "Product created successfully", status: 201 };
    });
  } catch (error) {
    throw new Error("Failed to create product");
  }
};
