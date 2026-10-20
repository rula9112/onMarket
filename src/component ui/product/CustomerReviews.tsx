

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
         <section className="my-0 flex w-full flex-col gap-6 rounded-3xl border border-olive-100 bg-white p-5 shadow-sm sm:p-7 lg:flex-row lg:gap-8">
      <div className="w-full space-y-4 lg:w-1/3">
        <h2 className="block text-xl font-bold text-olive-950 sm:text-2xl">
          Customer Reviews
        </h2>
        <span className="inline-flex rounded-full border border-olive-100 bg-olive-50 px-3 py-2 text-sm text-olive-600">
        No Reviews Availabl
        </span>
        </div>
        </section>
    );
  }

  return (
    <section className="flex w-full flex-col gap-6 rounded-3xl border border-olive-100 bg-white p-5 shadow-sm sm:gap-8 sm:p-7 lg:flex-row lg:gap-10">
      <div className="w-full space-y-5 lg:w-1/3">
        <div>
          <p className="mb-1 text-xs font-semibold tracking-[0.16em] text-orange-700">
            FEEDBACK
          </p>
          <h2 className="block text-xl font-bold text-olive-950 sm:text-2xl">
          Customer Reviews
          </h2>
        </div>

        <span className="block text-sm text-olive-600">
          Average rating: {data.rating ?? "N/A"}
        </span>

        <div className="space-y-3">
          {ratingBars.map((rating) => (
            <div key={rating.stars} className="flex items-center gap-3">
              <span className="w-4 text-sm font-medium text-olive-700">
                {rating.stars}
              </span>
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-olive-100">
                <div
                  className={`h-full rounded-full bg-orange-500 ${rating.width}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full space-y-5 lg:w-2/3">
        <h3 className="block text-lg font-bold text-olive-950 sm:text-xl">
          Reviews
        </h3>

        {reviews.map((review) => (
          <div
            key={review.id}
            className="rounded-2xl border border-olive-100 bg-olive-50/60 p-4 sm:p-5"
          >
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <span className="block font-semibold text-olive-950">
                {review.name}
              </span>

              <div className="flex items-center gap-1 text-orange-500" role="img" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-orange-500" />
                ))}
              </div>
            </div>

            <p className="text-sm leading-7 text-olive-700">
              {review.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}