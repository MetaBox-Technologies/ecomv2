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
      <SwiperSlide className="slider">
        <div className="h-[737px] bg-blue-500 flex pb-[100px]">
          Slide 1
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[737px] bg-red-500 flex">
          Slide 2
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[737px] bg-green-500 flex">
          Slide 3
        </div>
      </SwiperSlide>
    </Swiper>
    
  );
}
