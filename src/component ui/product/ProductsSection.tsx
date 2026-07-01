
import ProductsSlider from "./ProductsSlider";
import { products } from "@/src/lib/api/Products";
export default function ProductsSection() {


  return (
    <div className="px-7 md:px-10 my-9">
      <ProductsSlider  title="Top Products" />
      <ProductsSlider  title="New Arrival"  />
    </div>
  );
}