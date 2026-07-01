'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { SliderProps } from '@/src/types/SliderTypes';


export default function Slider({ children, swiperSetting }: SliderProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={swiperSetting.spaceBetween}
      breakpoints={{
        0: {
          slidesPerView: swiperSetting.slidesPerView0,
        },
        500: {
          slidesPerView: swiperSetting.slidesPerView500,
        },
        768: {
          slidesPerView: swiperSetting.slidesPerView768,
        },
        992: {
          slidesPerView: swiperSetting.slidesPerView992,
        },
      }}
      navigation
    >
    {Array.isArray(children)
        ? children.map((child, index) => (
            <SwiperSlide key={index}>{child}</SwiperSlide>
          ))
        : <SwiperSlide>{children}</SwiperSlide>}
    </Swiper>
  );
}

