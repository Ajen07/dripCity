"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { useModal } from "@/hooks/use-modal-store";

import { useAction } from "next-safe-action/hooks";
import { archiveProductAction } from "@/actions/archive-product-action";
import { toast } from "sonner";

export const ArchiveProductModal = () => {
  const { isOpen, onClose, type, data } = useModal();
  const { archiveProduct } = data;

  const isModalOpen = isOpen && type === "archiveProduct";
  const { executeAsync } = useAction(archiveProductAction);

  const onConfirm = async () => {
    try {
      const res = await executeAsync({ productId: archiveProduct?.productId });
      if (res?.serverError) {
        toast.error(`${res.serverError.message}`, { duration: 3000 });
      }
      if (res?.validationErrors) {
        console.log(res.validationErrors);

        toast.error(`${res.validationErrors}`, { duration: 3000 });
      }
      if (res?.data) {
        toast.success("Product Archived successfully", { duration: 3000 });
        onClose();
      }
    } catch (error) {
      toast.error("Something went wrong . Please try again later", {
        duration: 3000,
      });
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Archive Product
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            Are you sure to archive "
            <span className="font-semibold text-red-600">
              {archiveProduct?.productName}
            </span>
            " ?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="px-6 py-4">
          <div className="flex items-center justify-end w-full gap-x-2">
            <Button
              onClick={onClose}
              variant="ghost"
              className="hover:bg-slate-300 hover:text-black bg-black text-white"
            >
              Cancel
            </Button>
            <Button variant="destructive" onClick={onConfirm}>
              Archive
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
