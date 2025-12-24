"use client";
import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import './styles.css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';


interface Slider{
  sliderImage:{
    url:string,
    alternativeText: string,
  },
  sliderHeadline: string,
  slidrText: string
}

interface HeroSectionProps {
  Sliders: [Slider]
}

export default function HeroSection() {
  const pagination = {
    clickable: true,
  };

  const swipperRef:any  = useRef(null);
  const nextRef:any = useRef(null);
  const prevRef:any = useRef(null);

  useEffect(()=>{
    return ()=>{
      swipperRef.current.destroy(true, true)
    }
  })

  return (
    <div className="px-8 lg:px-[128px] pb-6 pt-[125px] lg:w-screen pt-9n">


      <Swiper
        navigation={{
            nextEl: nextRef.current,
            prevEl: prevRef.current
        }}
        loop={true}
        pagination={pagination}
        autoplay={{
          delay:3500,
          disableOnInteraction:false
        }}
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper"
        onSwiper={(swipper)=>( swipperRef.current = swipper)}
      >
      <div className="swiper-button-prev  bg-white p-3 rounded-full shadow" style={{marginLeft:"31px", width:"52px", height:"52px"}} onClick={()=>swipperRef.current?.slidePrev()}>
        <span className="material-symbols-outlined text-[var(--neutral-7)]">arrow_left_alt</span>
      </div>

      <div className="swiper-button-next  bg-white p-3 rounded-full shadow" style={{marginRight:"31px", width:"52px", height:"52px"}}onClick={()=>swipperRef.current?.slideNext()}>
        <span className="material-symbols-outlined text-[var(--neutral-7)]">arrow_right_alt</span>
      </div>
        <SwiperSlide id='slide1'>
            <h2 className='hero-heading'>Transform Your Space, Elevate Your Life</h2>
            <p className='hero-desc'>VisioCreate is a gift & decorations store based in HCMC, Vietnam. Est since 2019. </p>
        </SwiperSlide>
        <SwiperSlide id='slide2'>
            <h2 className='hero-heading'>Transform Your Space, Elevate Your Life</h2>
            <p className='hero-desc'>VisioCreate is a gift & decorations store based in HCMC, Vietnam. Est since 2019. </p>
        </SwiperSlide>
        <SwiperSlide id='slide3'>
            <h2 className='hero-heading'>Transform Your Space, Elevate Your Life</h2>
            <p className='hero-desc'>VisioCreate is a gift & decorations store based in HCMC, Vietnam. Est since 2019. </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
