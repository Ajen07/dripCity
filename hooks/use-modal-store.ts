import { create } from "zustand";
import { ArchiveProductButtonProps, CatalogProduct } from "@/lib/types";

export type ModalType = "addProduct" | "editProduct" | "archiveProduct";

interface ModalData {
  catalogProduct?: CatalogProduct;
  archiveProduct?: ArchiveProductButtonProps;
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
