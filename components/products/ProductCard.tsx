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
import { Heart } from "lucide-react";

const ProductCard = ({ name, price, image, id }: ProductsProps) => {
  return (
    <Card className="w-[300px] lg:w-[350px] relative hover:shadow-2xl hover:lg:w-[360px] transition-all">
      <div className="flex right-6 top-6">
        <Heart
          size={40}
          className="text-purple-700 text-md absolute -right-4 -top-4  border hover:border-purple-600 hover:fill-purple-500 rounded-full p-2 cursor-pointer"
        />
      </div>
      <CardHeader>
        <Image
          src={image || productImage}
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
        <p className="flex flex-col space-y-1.5 font-extrabold text-lg">
          Rs {price}
        </p>
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
