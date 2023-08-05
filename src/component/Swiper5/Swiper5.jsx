import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Swiper5.css";

import { Pagination } from "swiper/modules";
import Swiper5Cart from "../Cart/Swiper5Cart";

const breakpoints = {
  "1024": {
    slidesPerView: 4,
    spaceBetween: 10,
  },
  "768": {
    slidesPerView: 3,
    spaceBetween: 10,
  },
  "680": {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  "0": {
    slidesPerView: 1,
    spaceBetween: 10,
  },
};


export default function Swiper5() {
  return (
    <>
    <Swiper
      style={{paddingTop:"13px",paddingBottom:"13px",marginBottom:"80px"}}
      breakpoints={breakpoints}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="./Swiper5.css"
    >
      <SwiperSlide className="swiper-slide5"><Swiper5Cart/></SwiperSlide>
      <SwiperSlide className="swiper-slide5"><Swiper5Cart/></SwiperSlide>
      <SwiperSlide className="swiper-slide5"><Swiper5Cart/></SwiperSlide>
      <SwiperSlide className="swiper-slide5"><Swiper5Cart/></SwiperSlide>
      <SwiperSlide className="swiper-slide5"><Swiper5Cart/></SwiperSlide>
      <SwiperSlide className="swiper-slide5"><Swiper5Cart/></SwiperSlide>
    </Swiper>
  </>
  );
}
