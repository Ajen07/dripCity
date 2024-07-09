import CatalogTabs from "@/components/admin/catalog/catalog-tabs";
import SearchBar from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { IoAddSharp } from "react-icons/io5";
import React from "react";

const Catalogue = () => {
  return (
    <main className="pt-8 pl-5">
      <h1 className="text-4xl font-extrabold text-purple-500 capitalize">
        Our Catalogue
      </h1>
      <section className="mt-20 flex justify-between md:pr-16">
        <SearchBar />
        <div>
          <Button variant="primary" className="flex justify-center items-center gap-x-3">
            <IoAddSharp className="text-white text-lg" />
            <span className="text-[1.1rem]"> Add Product</span>
          </Button>
        </div>
      </section>
      <section className="mt-4 py-4">
        <CatalogTabs />
      </section>
    </main>
  );
};

export default Catalogue;
