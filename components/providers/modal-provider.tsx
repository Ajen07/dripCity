"use client";

import { useEffect, useState } from "react";
import { AddProductModal } from "../modals/create-product-modal";
import { EditProductModal } from "../modals/edit-product-modal";
import { ArchiveProductModal } from "../modals/archive-product-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <>
      <AddProductModal />
      <EditProductModal />
      <ArchiveProductModal />
    </>
  );
};
