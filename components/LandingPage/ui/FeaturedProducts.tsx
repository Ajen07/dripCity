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

const FeaturedProducts = () => {
  return (
    <article className="">
      <h1 className="text-2xl md:text-4xl font-extrabold w-full text-center text-purple-700">Featured Products</h1>
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
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 xl:basis-1/3">
              <ProductCard id="1000" price={1000} name="Rick and Morty: Higher Self (Acid Wash)" />
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
