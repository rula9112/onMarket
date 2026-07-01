
import Link from "next/link";
import Slider from "../shared/slider/Slider";
import CategoryItem from "./CategoryItem";


export default async function Categories() {
  // let categories: Category[] = [];

  // try {
  //   const res = await fetch(
  //     "https://dummyjson.com/products/categories",
  //     {
  //       cache: "no-store",
  //     }
  //   );

  //   if (!res.ok) {
  //     throw new Error("Failed to fetch categories");
  //   }

  //   categories = await res.json();
  // } catch (error) {
  //   return null;
  // }

  //
   return (
    <section className="py- px-4 md:px-10 lg:px-14">
      {/* Header */}
      <div className="mb-10">
        <h2 className=" text-2xl md:text-3xl font-bold text-gray-900">
         Categories
        </h2>

        <p className="mt-3 text-gray-500">
         Discover all The Categories available in the store
        </p>
      </div>
<CategoryItem />
    </section>
  );
}

/*






{Object.values(categories).flat().map((i, index) => (
<Link  key={index} href={`/Products/`}>
  <div className=" flex gap-2 w-40 justify-center items-center  text-orange-500 bg-orange-50">
      <div className="px-3 py-2 rounded-full  border border-orange-300  flex gap-2 ">
{categories}
      </div>
    </div>
  </Link>
  ))}

| التصنيف             | الرمز |
| ------------------- | ----- |
| Makeup              | 💄    |
| Furniture           | 🛋️   |
| Groceries           | 🛒    |
| Home Decoration     | 🖼️   |
| Kitchen Accessories | 🍳    |
| Laptops             | 💻    |
| Men's Shirts        | 👔    |
| Men's Shoes         | 👞    |
| Smartphones         | 📱    |
| Skin Care           | 🧴    |
| Sports Accessories  | 🏅    |
| Tablets             | 📟    |
| Vehicle             | 🚗    |
| Women's Dresses     | 👗    |
| Women's Jewellery   | 💍    |
| Women's Watches     | ⌚     |

*/
