import axios from "axios";
import CatalogProductCard from "./catalog-product-card";

const CatalogProducts = async ({ activeTab }: { activeTab: string }) => {
  const {
    data: { products: catalogProducts },
  } = await axios(
    `${process.env.API_URL}/api/catalog/products?activeTab=${activeTab}`
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
