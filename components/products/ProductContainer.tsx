import React from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

const ProductContainer = async () => {
  const {
    data: { products },
  } = await axios(`${process.env.API_URL}/api/products`);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 lg:mt-8">
      {products.map((product:any) => (
        <div key={product.id} className="hover:shadow-2xl transition-all w-fit">
          <ProductCard
            id={product.id}
            price={product.price}
            name={product.name}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductContainer;
