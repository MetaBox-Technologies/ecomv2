"use client"
import { useRef, useState } from 'react';
import { Card } from '../shopPage/Card';
import React from 'react';
import "./style.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function App() {
    const prod = {
            "id": 13,
            "documentId": "bunyv0g65uudlr5xlwnipzw9",
            "name": "Black Tray table",
            "slug": "black-tray-table",
            "shortDescription": "Comfy, soft, dust free",
            "description": null,
            "price": 175,
            "sku": null,
            "stock": null,
            "featured": false,
            "rating": null,
            "Is_new": true,
            "percentagediscount": 0,
            "category": "Table",
            "createdAt": "2025-12-05T06:15:04.645Z",
            "updatedAt": "2025-12-05T06:15:04.645Z",
            "publishedAt": "2025-12-05T06:15:04.806Z",
            "images": [
                {
                    "id": 7,
                    "documentId": "xqoyayailv5ub504hvuxxcvv",
                    "url": "/uploads/Paste_image_bb03298c07.svg",
                    "alternativeText": null
                }
            ]
        }
  return (
    <div id='prodscroll'>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Card {...prod}/></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
}