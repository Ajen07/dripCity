import axios from "axios";
import CatalogProductCard from "./catalog-product-card";

const CatalogProducts = async ({ activeTab }: { activeTab: string }) => {
  const {
    data: { products: catalogProducts },
  } = await axios(
    `http://localhost:3000/api/catalog/products?activeTab=${activeTab}`
  );

  return (
    <>
      {catalogProducts?.map((product: any) => {
        return <CatalogProductCard {...product} key={product.id} />;
      })}
    </>
  );
};

export default CatalogProducts;
