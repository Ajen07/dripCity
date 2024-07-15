import * as z from "zod";

export const editProductformSchema = z.object({
  id: z.string().min(1, { message: "Product ID is required" }),
  name: z.string().min(1, { message: "Product name is required" }),
  description: z.string().optional(),
  price: z.coerce.number().min(1, { message: "Price must be greater than 1" }),
  inventory: z.coerce
    .number()
    .min(1, { message: "Items in inventory must be greater than 1" }),
  category: z.string().min(1, { message: "Category is required" }),
  isFeatured: z.boolean(),
  isArchived: z.boolean(),
  isActive: z.boolean(),
  imageUrl1: z.string().min(1, { message: "Image URL is required" }),

  imageUrl2: z.string().min(1, { message: "Image URL is required" }),

  imageUrl3: z.string().min(1, { message: "Image URL is required" }),

  imageUrl4: z.string().min(1, { message: "Image URL is required" }),
});

export type editProductFormValues = z.infer<typeof editProductformSchema>;

export const defaultValues = {
  id: "",
  name: "",
  description: "",
  price: 0,
  inventory: 0,
  category: "",
  isFeatured: false,
  isArchived: true,
  isActive: false,
  imageUrl1: "",
  imageUrl2: "",
  imageUrl3: "",
  imageUrl4: "",
};
