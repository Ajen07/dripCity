import { create } from "zustand";
import { Product } from "@prisma/client";
import { CatalogProduct } from "@/lib/types";

export type ModalType = "addProduct" | "editProduct";

interface ModalData {
    catalogProduct?: CatalogProduct;
}

interface ModalStore {
  type: ModalType | null;
  data: ModalData;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: ModalData) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  isOpen: false,
  data: {},
  onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false }),
}));
