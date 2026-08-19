
import ProductsSlider from "./ProductsSlider";
export default function ProductsSection() {


  return (
    <div className="px-7 md:px-10 my-9">
      <ProductsSlider  title="Top Products" />
      <ProductsSlider  title="New Arrival"  />
    </div>
  );
}