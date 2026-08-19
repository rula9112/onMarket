
import Category from "@/src/component ui/home/Category";
import ProductsSection from "@/src/component ui/product/ProductsSection";
import SearchResults from "@/src/component ui/product/SearchResults";
import 'swiper/css'
import 'swiper/css/navigation'

export default function Home(/* {
  searchParams,
}: {
  searchParams: { q?: string };
} */) {

  //const query = searchParams.q ?? "";
  

  return (
  <div className="min-h-screen bg-olive-50">
      <div
        className="
          max-w-[90rem]
          mx-auto
          px-4 md:px-8          
        "
      >
    <Category />
     {/* <SearchResults /> */}
     <ProductsSection />

      </div>
    </div>
  
  );
}
