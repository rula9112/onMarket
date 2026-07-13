
import Image from "next/image";
import { Search } from "lucide-react";

import offer1 from "../../../public/img/offer1.jpg";
import offer2 from "../../../public/img/offer2.jpg";
import offer3 from "../../../public/img/offer3.jpg";

import Slider from "../shared/slider/Slider";
import { OffersInfo } from "@/src/lib/api/Products";
import { Button } from "../ui/Button";

const offers = [offer1, offer2, offer3];

export default function Offers() {
  return (
    <section className="py-10 px-4 md:px-10 lg:px-14">
      <Slider
        swiperSetting={{
          slidesPerView0: 1,
          slidesPerView500: 1,
          slidesPerView768: 1,
          slidesPerView992: 1,
          spaceBetween: 20,
        }}
      >
        {Object.values(OffersInfo)
          .flat()
          .slice(0, 5)
          .map((item, index) => {
            const image = offers[index % offers.length];

            return (
              <div
                key={item.id || index}
                className="
                  relative
                  h-[420px]
                  md:h-[520px]
                  rounded-3xl
                  overflow-hidden
                  group
                "
              >
                {/* Background Image */}
                <Image
                  src={image}
                  alt={item.title}
                  fill
                  priority={index === 0}
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-black/85
                    via-black/55
                    to-black/20
                  "
                />

                {/* Content */}
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    flex-col
                    justify-end
                    px-6
                    md:px-12
                    pb-10
                    text-white
                  "
                >
                  {/* Badge */}
                  <span
                    className="
                      w-fit
                      px-4
                      py-2
                      mb-4
                      rounded-full
                      text-xs
                      font-medium
                      bg-primary
                    "
                  >
                    خصومات حصرية لهذا الأسبوع
                  </span>

                  {/* Title */}
                  <h2
                    className="
                      text-3xl
                      md:text-5xl
                      font-bold
                      max-w-2xl
                      leading-tight
                    "
                  >
                    {item.title}
                  </h2>

                  {/* Description */}
                  <p
                    className="
                      mt-4
                      max-w-xl
                      text-sm
                      md:text-base
                      text-gray-200
                      line-clamp-2
                    "
                  >
                    {item.description}
                  </p>

                  {/* Search */}
                  <form className="mt-6">
                    <div
                      className="
                        flex
                        items-center
                        bg-white
                        rounded-full
                        overflow-hidden
                        shadow-xl
                        max-w-lg
                      "
                    >
                      <input
                        type="text"
                        placeholder="ابحث عن منتج..."
                        className="
                          flex-1
                          px-5
                          py-4
                          text-gray-700
                          placeholder:text-gray-400
                          focus:outline-none
                        "
                      />

                      <Button
                        type="submit"
                        variant="primary"
                        className="
                          h-full
                          rounded-full
                          px-6
                        "
                      >
                        <Search size={18} />
                      </Button>
                    </div>
                  </form>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4 mt-6">
                    <Button variant="primary">
                      تسوق الآن
                    </Button>

                    <Button
                      variant="outlinePrimary"
                      className="
                        border-white
                        text-white
                        hover:bg-white
                        hover:text-black
                      "
                    >
                      استكشف المنتجات
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
      </Slider>
    </section>
  );
}
