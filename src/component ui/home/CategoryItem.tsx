
import { Category } from "@/src/types/Product";
import Slider from "../shared/slider/Slider";
import Link from "next/link";
import {
  Smartphone,
  Laptop,
  Heart,
  Home,
  ShoppingBasket,
  Shirt,
  Watch,
  Car,
  Package,
  Dumbbell,
} from "lucide-react";
import { GETCategories } from "@/src/lib/api/Category";



const categoryIcons = {
  beauty: Heart,
  fragrances: Heart,

  furniture: Home,
  "home-decoration": Home,
  "kitchen-accessories": Home,

  groceries: ShoppingBasket,

  smartphones: Smartphone,
  laptops: Laptop,

  "mens-shirts": Shirt,
  "womens-dresses": Shirt,

  "mens-shoes": Dumbbell,
  "womens-shoes": Dumbbell,

  "mens-watches": Watch,
  "womens-watches": Watch,

  motorcycle: Car,
  vehicle: Car,

  "womens-bags": Package,
  "womens-jewellery": Heart,
};


export default async function CategoryItem() {

let categories : Category[] = await GETCategories();
if(!categories) return null;

  return (
         <Slider
        swiperSetting={{
          slidesPerView0: 2.2,
          slidesPerView442: 3.2,
          slidesPerView768: 4.5,
          slidesPerView992: 7,
          spaceBetween: 15,
        }}
      >
        {categories.map((category, index) => {
          const Icon =
            categoryIcons[
              category.slug as keyof typeof categoryIcons
            ] || Package;

          return (
            <Link
              key={index}
              href={`/Products/${category.slug}`}
              className="group"
            >
              <div className="flex flex-col items-center gap-4">
                {/* Icon Circle */}
                <div
                  className="
                    w-10 h-10
                    md:w-12 md:h-12
                    rounded-full
                    bg-white
                    border border-orange-200
                    shadow-sm
                    flex items-center justify-center
                    transition-all duration-300
                    group-hover:-translate-y-2
                    group-hover:shadow-xl
                    group-hover:border-primary/30
                  "
                >
                  <Icon
                    size={25}
                    className="
                      text-orange-500
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />
                </div>

                {/* Category Name */}
                <h3
                  className="
                    text-sm
                    md:text-base
                    font-medium
                    text-center
                    text-gray-700
                    capitalize
                    transition-colors
                    duration-300
                    group-hover:text-primary
                  "
                >
                  {category.slug.replaceAll("-", " ")}
                </h3>
              </div>
            </Link>
          );
        })}
      </Slider>
 
      
  );
}