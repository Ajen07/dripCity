"use client";

import { X } from "lucide-react";
import Image from "next/image";

import { UploadDropzone } from "@/lib/uploadthing";
import "@uploadthing/react/styles.css";

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "productImage" ;
}

export const FileUpload = ({ onChange, value, endpoint }: FileUploadProps) => {
  const filetype = value?.split(".").pop();
  if (value && filetype !== "pdf") {
    return (
      <div className="relative h-100 w-100">
        <Image
          src={value}
          alt="Product Image"
          width={1000}
          height={1000}
          priority={true}
        />
        <button
          onClick={() => onChange("")}
          className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
    />
  );
};