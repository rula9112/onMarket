"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import { useGetAllProductsQuery } from "../../../redux/productAPI";
import { LoadingSpinner } from "../LaodingComponents/Loading";
import ErrorComponent from "../LaodingComponents/ErrorComponent";

export default function RoundedCardSlider() {
  const { data, error, isLoading } = useGetAllProductsQuery("/category-list");

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 3,
    slidesToShow: Math.min(6),
  };

  if (isLoading)
    return <LoadingSpinner customClass={"w-full flex justify-center"} />;
  if (error) return <ErrorComponent />;

  return (
    <div className="sections p-2 m-2 rounded-md">
      {/*Card Slider */}
      <div className="relative">
        {/*Slider Container */}
        <div
          id="slider"
          className="slider-container h-[15vw] flex overflow-x-auto hide-scrollbar py-8 snap-x snap-mandatory"
        >
          {/*Cards */}
          <div className="w-full h-auto">
            <Slider {...settings}>
              {data.map((item, index) => {
                return (
                  <Link href={`productByCategory/${item}`}>
                    <div className="flex justify-center flex-col text-center w-16 bg-white">
                      <img
                        src="data:image/png;base64,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"
                        className="border border-gray-200 w-30 h-30 rounded-full"
                      />
                      <span className="font-medium ">{item}</span>
                    </div>
                  </Link>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
