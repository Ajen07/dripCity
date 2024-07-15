import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { CatalogProductsProps } from "@/lib/types";
import React from "react";
import EditProductButton from "./edit-product-button";

const CatalogProductCard = ({
  name,
  price,
  id,
  inventory,
  category,
  description,
  isFeatured,
  imageUrls,
  isActive,
  isArchived,
}: CatalogProductsProps) => {
  const singleProduct = {
    name,
    price,
    id,
    inventory,
    description,
    isFeatured,
    category,
    imageUrls,
    isActive,
    isArchived,
  };
  return (
    <Card className="w-[300px] lg:w-[350px] relative hover:shadow-2xl hover:lg:w-[360px] transition-all">
      <CardHeader>
        <Image
          src={imageUrls[0].url}
          alt="image"
          loading="lazy"
          width={1000}
          height={1000}
          className="w-[300px] h-[375px]"
        />
        <CardTitle className="text-[1.5rem] font-light h-[4rem]">
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col">
        <div className="flex justify-between">
          <p className="flex flex-col space-y-1.5 font-extrabold text-lg">
            Rs {price}
          </p>
          <div>
            {isFeatured && isActive && (
              <span className=" bg-green-100 text-green-500 border-2 border-green-500 px-2 py-1 rounded-full">
                Featured
              </span>
            )}
            {isActive && !isFeatured && (
              <span className="bg-yellow-100 text-yellow-500 px-2 py-1 rounded-full border-2 border-yellow-400">
                Active
              </span>
            )}
            {isArchived && (
              <span className="bg-red-100 text-red-500 border-2 border-red-500 px-2 py-1 rounded-full">
                Archived
              </span>
            )}
          </div>
        </div>
        <div className="rounded-md font-bold bg-blue-100 text-blue-500 w-fit px-2 py-1 mt-2">
          inventory: {inventory}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">View</Button>
        <Button variant="destructive">Archive</Button>
        <EditProductButton product={singleProduct} />
      </CardFooter>
    </Card>
  );
};

export default CatalogProductCard;
