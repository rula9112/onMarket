

import { ProductIDProps } from "@/src/types/Product";
import { GetAPIProductByID } from "@/src/lib/api/Products";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sabreen Son",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui aliquid consequatur a commodi, ullam nemo voluptate, deleniti quam modi minus magni nulla itaque laborum numquam ipsum voluptates maxime.",
  },
  {
    id: 2,
    name: "Sabreen Son",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui aliquid consequatur a commodi, ullam nemo voluptate, deleniti quam modi minus magni nulla itaque laborum numquam ipsum voluptates maxime.",
  },
];

const ratingBars = [
  { stars: 5, width: "w-1/5" },
  { stars: 4, width: "w-3/5" },
  { stars: 3, width: "w-1/5" },
  { stars: 2, width: "w-2/5" },
  { stars: 1, width: "w-3/5" },
];


export default async function CustomerReviews({ itemID }: ProductIDProps) {
    const data = await GetAPIProductByID(itemID);
  if (!data) {
    return (
         <div className="w-full bg-white p-6 my-6 rounded-3xl shadow-sm flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-1/3 space-y-4">
        <span className="font-semibold text-lg block">
          Customer Reviews
        </span>
        <span className='my-2'>
        No Reviews Availabl
        </span>
        </div>
        </div>
    );
  }

  return (
    <div className="w-full bg-white p-6 my-6 rounded-3xl shadow-sm flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-1/3 space-y-4">
        <span className="font-semibold text-lg block">
          Customer Reviews
        </span>

        <span className="text-gray-700 text-sm block">
          Average rating: {data.rating ?? "N/A"}
        </span>

        <div className="space-y-3">
          {ratingBars.map((rating) => (
            <div key={rating.stars} className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-700 w-4">
                {rating.stars}
              </span>
              <div className="flex-1 h-2 rounded-full bg-gray-100 overflow-hidden">
                <div
                  className={`h-full bg-orange-500 rounded-full ${rating.width}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full lg:w-2/3 space-y-5">
        <span className="font-semibold text-lg block">
          Reviews
        </span>

        {reviews.map((review) => (
          <div
            key={review.id}
            className="p-4 rounded-2xl border border-gray-100 bg-gray-50"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="block font-medium text-gray-900">
                {review.name}
              </span>

              <div className="flex items-center gap-1 text-orange-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="w-4 h-4 fill-orange-500" />
                ))}
              </div>
            </div>

            <p className="text-gray-700 text-sm leading-7">
              {review.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}