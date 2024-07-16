"use client";
import { Button } from "@/components/ui/button";
import { useModal } from "@/hooks/use-modal-store";
import { CatalogProductProps } from "@/lib/types";
import React from "react";

const EditProductButton = ({ product }: { product: CatalogProductProps }) => {
  const { onOpen } = useModal();
  return (
    <Button
      variant="primary"
      className="flex justify-center items-center"
      onClick={() => onOpen("editProduct", { catalogProduct: product })}
    >
      Update
    </Button>
  );
};

export default EditProductButton;
