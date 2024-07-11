"use client"
import { Button } from "@/components/ui/button";
import { useModal } from "@/hooks/use-modal-store";
import React from "react";
import { IoAddSharp } from "react-icons/io5";

const AddProductButton = () => {
  const { onOpen } = useModal();
  return (
    <Button
      variant="primary"
      className="flex justify-center items-center gap-x-3"
      onClick={() => onOpen("addProduct")}
    >
      <IoAddSharp className="text-white text-lg" />
      <span className="text-[1.1rem]"> Add Product</span>
    </Button>
  );
};

export default AddProductButton;
