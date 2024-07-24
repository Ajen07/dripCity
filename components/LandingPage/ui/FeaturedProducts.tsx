"use client";

import React from "react";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "@/components/products/ProductCard";
import axios from "axios";

const FeaturedProducts = async () => {
  const {
    data: { products },
  } = await axios.get(`${process.env.API_URL}/api/products/featured`);
  console.log(products);

  return (
    <article className="">
      <h1 className="text-2xl md:text-4xl font-extrabold w-full text-center text-purple-700">
        Featured Products
      </h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="max-w-xs md:max-w-[760px]   xl:max-w-[1200px] mt-4 lg:mt-[4rem]  relative"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent className="-ml-1 -mr-1 py-4">
          {products.map((product: any) => (
            <CarouselItem
              key={product.id}
              className="md:basis-1/2 xl:basis-1/3"
            >
              <ProductCard
                id={product.id}
                price={product.price}
                name={product.name}
                image={product.imageUrls[0].url}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute  left-2" />
        <CarouselNext className="absolute  right-2 " />
      </Carousel>
    </article>
  );
};

export default FeaturedProducts;
