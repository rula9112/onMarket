import { ProductsGridSectionProps, ProductsResponse } from "@/src/types/Product";
import ProductGrid from "./ProductGrid";
import ErrorState from "./ErrorState";
import { GetAPIProductsByCategory } from "@/src/lib/api/Products";

export default async function ProductsGridSection({ category }: ProductsGridSectionProps) {
  const data = await GetAPIProductsByCategory({ category });
if (!data) {
  return (
    <div className="bg-white p-6 rounded-3xl shadow">
      <ErrorState message="Error loading data" />
    </div>
  );
}
  if ( !data.products || data.products.length === 0) {
    return (
      <div className="bg-white p-6 rounded-3xl shadow">
        <ErrorState message="there is no Data" />
      </div>
    );
  }
  

  return <div className="bg-white p-6 rounded-3xl shadow">
    <ProductGrid products={data.products} />
  </div>;
}