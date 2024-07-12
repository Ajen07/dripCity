import CatalogTabs from "@/components/admin/catalog/catalog-tabs";
import SearchBar from "@/components/SearchBar";
import React, { Suspense } from "react";
import AddProductButton from "@/components/admin/catalog/add-product-button";
import CatalogProducts from "@/components/admin/catalog/catalog-products";

const Catalogue = ({
  searchParams,
}: {
  searchParams?: {
    activeTab?: string;
  };
}) => {
  const activeTab = searchParams?.activeTab || "all";
  return (
    <main className="pt-8 pl-5">
      <h1 className="text-4xl font-extrabold text-purple-500 capitalize">
        Our Catalogue
      </h1>
      <section className="mt-20 flex justify-between md:pr-16">
        <SearchBar />
        <div>
          <AddProductButton />
        </div>
      </section>
      <section className="mt-4 py-4">
        <CatalogTabs />
      </section>
      <section>
        <Suspense key={activeTab} fallback={<div>Loading...</div>}>
          <CatalogProducts activeTab={activeTab} />
        </Suspense>
      </section>
    </main>
  );
};

export default Catalogue;
