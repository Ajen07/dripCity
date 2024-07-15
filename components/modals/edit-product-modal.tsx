"use client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useModal } from "@/hooks/use-modal-store";
import { FileUpload } from "../file-upload";
import { toast } from "sonner";
import { editProductAction } from "@/actions/edit-product-action";
import {
  editProductformSchema,
  editProductFormValues,
  defaultValues,
} from "@/validations/product/edit-product-validation";
import { useEffect } from "react";
import { useAction } from "next-safe-action/hooks";

export const EditProductModal = () => {
  const { isOpen, onClose, type, data } = useModal();
  const { catalogProduct } = data;
  const isModalOpen = isOpen && type === "editProduct";
  const form = useForm({
    resolver: zodResolver(editProductformSchema),
    defaultValues,
  });
  const boundProductId = (values: editProductFormValues) =>
    editProductAction(catalogProduct?.id, values);
  const { isExecuting, executeAsync } = useAction(boundProductId);
  const handleClose = () => {
    form.reset();
    onClose();
  };

  const onSubmit = async (values: editProductFormValues) => {
    try {
      const res = await executeAsync(values);
      if (res?.serverError) {
        toast.error(`${res.serverError.message}`, { duration: 3000 });
      }
      if (res?.validationErrors) {
        console.log(res.validationErrors);

        toast.error(`${res.validationErrors}`, { duration: 3000 });
      }
      if (res?.data) {
        toast.success("Product edited successfully", { duration: 3000 });
        form.reset();
        onClose();
      }
    } catch (error) {
      toast.error("Something went wrong . Please try again later", {
        duration: 3000,
      });
    }
  };

  useEffect(() => {
    if (catalogProduct) {
      form.setValue("id", catalogProduct.id);
      form.setValue("name", catalogProduct.name);
      form.setValue("description", catalogProduct.description);
      form.setValue("price", catalogProduct.price);
      form.setValue("inventory", catalogProduct.inventory);
      form.setValue("category", catalogProduct.category);
      form.setValue("isFeatured", catalogProduct.isFeatured);
      form.setValue("isArchived", catalogProduct.isArchived);
      form.setValue("isActive", catalogProduct.isActive);
      form.setValue("imageUrl1", catalogProduct.imageUrls[0].url);
      form.setValue("imageUrl2", catalogProduct.imageUrls[1].url);
      form.setValue("imageUrl3", catalogProduct.imageUrls[2].url);
      form.setValue("imageUrl4", catalogProduct.imageUrls[3].url);
    }
  }, [catalogProduct, form]);

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="max-h-screen overflow-y-scroll lg:max-w-2xl max-w-xs my-2 mr-2">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold text-purple-500 uppercase">
            Edit Product Of your Catalog
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-y-3">
              <FormField
                control={form.control}
                name="id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize text-zinc-500 text-md">
                      Product ID
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={true}
                        className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black"
                        placeholder="Enter Product ID"
                        {...field}
                        hidden={true}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize text-zinc-500 text-md">
                      Product Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isExecuting}
                        className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black"
                        placeholder="Enter Product Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize text-zinc-500 text-md">
                      Description
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isExecuting}
                        className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black"
                        placeholder="Enter Description"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-col md:flex-row md:justify-between">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="capitalize text-zinc-500 text-md">
                        Price
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isExecuting}
                          className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black"
                          placeholder="Enter Price"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="inventory"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="capitalize text-zinc-500 text-md">
                        Inventory
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isExecuting}
                          className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black"
                          placeholder="Enter Inventory"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize text-zinc-500 text-md">
                      Category
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isExecuting}
                        className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black"
                        placeholder="Enter Category"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col md:flex-row md:justify-between mt-2">
              <FormField
                control={form.control}
                name="isFeatured"
                render={({ field }) => (
                  <FormItem className="flex gap-x-2 justify-center items-center">
                    <FormLabel className="capitalize text-zinc-500 text-md pt-1">
                      Featured
                    </FormLabel>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isArchived"
                render={({ field }) => (
                  <FormItem className="flex gap-x-2 justify-center items-center">
                    <FormLabel className="capitalize text-zinc-500 text-md pt-1">
                      Archived
                    </FormLabel>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isActive"
                render={({ field }) => (
                  <FormItem className="flex gap-x-2 justify-center items-center">
                    <FormLabel className="capitalize text-zinc-500 text-md pt-1">
                      Active
                    </FormLabel>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-x-4 mt-4">
              <FormField
                control={form.control}
                name="imageUrl1"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize text-zinc-500 text-md">
                      Image 1
                    </FormLabel>
                    <FormControl>
                      <FileUpload
                        endpoint="productImage"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="imageUrl2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize text-zinc-500 text-md">
                      Image 2
                    </FormLabel>
                    <FormControl>
                      <FileUpload
                        endpoint="productImage"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="imageUrl3"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize text-zinc-500 text-md">
                      Image 3
                    </FormLabel>
                    <FormControl>
                      <FileUpload
                        endpoint="productImage"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="imageUrl4"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize text-zinc-500 text-md">
                      Image 4
                    </FormLabel>
                    <FormControl>
                      <FileUpload
                        endpoint="productImage"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter className="px-6 py-4">
              <Button variant="primary" disabled={isExecuting} type="submit">
                Edit
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
