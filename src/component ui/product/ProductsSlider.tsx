

import { GetAPI10Products } from "@/src/lib/api/Products";
import Slider from "../shared/slider/Slider";
import ProductCard from "./ProductCard";
import { ProductsSliderProps } from "@/src/types/Product";
import ErrorState from "./ErrorState";



export default async function ProductsSlider({
  title,
}: ProductsSliderProps) {
  const productsArray = await GetAPI10Products();
  if(!productsArray){
    return(
      <div className="bg-white rounded-3xl border border-zinc-100 shadow-sm p-6 mb-10">
        <ErrorState message="Error Laoding Data" />
      </div>
   )
  }
 

  return (
    <section
      className="
      bg-white
      rounded-3xl
      border
      border-zinc-100
      shadow-sm
      p-6
      mb-10
    "
    >
      {/* Header */}
      <div className="mb-8">
        <h2
          className="
          text-2xl
          md:text-3xl
          font-bold
          text-zinc-900
        "
        >
          {title}
        </h2>
      </div>

      {/* Slider */}
      <Slider
        swiperSetting={{
          slidesPerView0: 1.5,
          slidesPerView500: 2.5,
          slidesPerView768: 3.5,
          slidesPerView992: 5,
          spaceBetween: 24,
        }}
      >
        {productsArray.products.map((item) => (
          <ProductCard
            key={item.id}
            item={item}
          />
        ))}
      </Slider>
    </section>
  );
}