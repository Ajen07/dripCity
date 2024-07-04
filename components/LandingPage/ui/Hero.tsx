import { Button } from "@/components/ui/button";
import React from "react";

const Hero = () => {
  return (
    <section className=" lg:h-[calc(100vh-64px)] max-w-full bg-hero-pattern bg-cover">
      <article className="text-[#323842] flex flex-col justify-center h-full pl-20 gap-y-8">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          <span className="block"> Discover the Latest in </span>
          <span className="block">Fashion with Carlo Rino</span>
        </h1>
        <p className="text-2xl md:text-4xl">Trendy Bags, Shoes, and Accessories</p>
        <Button className="bg-[#323842] w-fit">Shop Now</Button>
      </article>
    </section>
  );
};

export default Hero;
