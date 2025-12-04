"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function MySwiper() {
  return (
    
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={1}
    >
        <div className="herosection">
      <SwiperSlide>
        <div className="h-[400px] bg-blue-500 flex items-center justify-center text-white text-2xl">
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[400px] bg-red-500 flex items-center justify-center text-white text-2xl">
          Slide 2
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[737px] bg-green-500 flex">
          Slide 3
        </div>
      </SwiperSlide>
      </div>
    </Swiper>
    
  );
}
