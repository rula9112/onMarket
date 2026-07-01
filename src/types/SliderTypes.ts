import { ReactNode } from 'react';

export type SliderProps = {
  children: ReactNode;
  swiperSetting: {
    slidesPerView0: number;
    slidesPerView500: number;
    slidesPerView768: number;
    slidesPerView992:number;
    spaceBetween: number;
  };
};


// استخراج النوع الفرعي
export type SwiperSettings = {
  slidesPerView0: number;
  slidesPerView500: number;
  slidesPerView768: number;
  spaceBetween: number;
};