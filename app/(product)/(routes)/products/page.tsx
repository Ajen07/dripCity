import SearchBar from "@/components/SearchBar";
import FilterContainer from "@/components/filters/FilterContainer";
import ProductContainer from "@/components/products/ProductContainer";
import React, { Suspense } from "react";

export default function AllProductsPage() {
  return (
    <>
      <section className="flex min-h-[calc(100vh-66px)]">
        <article className="w-[250px] border-r-2  max-md:hidden pt-[2rem]">
          <FilterContainer />
        </article>
        <article className="grow pl-6 pt-[2rem]">
          <SearchBar />
          <Suspense fallback={<div>Loading...</div>}>
            <ProductContainer />
          </Suspense>
        </article>
      </section>
    </>
  );
}
