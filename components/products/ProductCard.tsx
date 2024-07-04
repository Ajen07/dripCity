import React from "react";

import productImage from "@/public/assets/dummyImage.jpg";

import { ProductsProps } from "@/lib/types";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";

const ProductCard = ({ id, name, price }: ProductsProps) => {
  return (
    <Card className="w-[300px] lg:w-[350px] relative">
      <div className="flex right-6 top-6">
        <Heart
          size={40}
          className="text-purple-700 text-md absolute -right-4 -top-4  border hover:border-purple-600 hover:fill-purple-500 rounded-full p-2 cursor-pointer"
        />
      </div>
      <CardHeader>
        <Image
          src={productImage}
          alt="image"
          loading="lazy"
          width={1000}
          height={1000}
          className="w-[300px] h-[375px]"
        />
        <CardTitle className="text-[1.5rem] font-light">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-1.5 font-extrabold">
          Rs {price}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">View</Button>
        <Button variant="primary" className="flex justify-center items-center">
          <span>Add to Cart</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
