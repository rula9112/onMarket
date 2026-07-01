'use client'
import { SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/navigation'
export default function SliderItem({
  children,
}: {
  children: React.ReactNode
}) {
    return(
             <SwiperSlide>
                         <div className='overflow-hidden h-36 bg-gray-300 flex gap-2 rounded-xl'>
                          
                         </div>
                      </SwiperSlide>
    )
}