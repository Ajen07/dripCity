"use client";
import { Button } from "@/components/ui/button";
import { useModal } from "@/hooks/use-modal-store";
import { ArchiveProductButtonProps } from "@/lib/types";
import React from "react";

const ArchiveProductButton = ({
  productId,
  productName,
}: ArchiveProductButtonProps) => {
  const { onOpen } = useModal();
  return (
    <Button
      variant="destructive"
      className="flex justify-center items-center"
      onClick={() =>
        onOpen("archiveProduct", { archiveProduct: { productId, productName } })
      }
    >
      Archive
    </Button>
  );
};

export default ArchiveProductButton;
