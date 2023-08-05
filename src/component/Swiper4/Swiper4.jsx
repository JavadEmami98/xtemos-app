import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Swiper4.css";

import { Pagination } from "swiper/modules";
import GridCasesCart from "../Cart/GridCasesCart";

const breakpoints = {
  "1024": {
    slidesPerView: 5,
    spaceBetween: 10,
  },
  "768": {
    slidesPerView: 4,
    spaceBetween: 10,
  },
  "680": {
    slidesPerView: 3,
    spaceBetween: 16,
  },
  "0": {
    slidesPerView: 2,
    spaceBetween: 16,
  },
};

export default function Swiper4() {
  return (
    <>
    <Swiper
      style={{marginBottom:"90px"}}
      breakpoints={breakpoints}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="./Swiper4.css"
    >
      <SwiperSlide className="swiper-slide4"><GridCasesCart/></SwiperSlide>
      <SwiperSlide className="swiper-slide4"><GridCasesCart/></SwiperSlide>
      <SwiperSlide className="swiper-slide4"><GridCasesCart/></SwiperSlide>
      <SwiperSlide className="swiper-slide4"><GridCasesCart/></SwiperSlide>
      <SwiperSlide className="swiper-slide4"><GridCasesCart/></SwiperSlide>
      <SwiperSlide className="swiper-slide4"><GridCasesCart/></SwiperSlide>
      <SwiperSlide className="swiper-slide4"><GridCasesCart/></SwiperSlide>
      <SwiperSlide className="swiper-slide4"><GridCasesCart/></SwiperSlide>
      <SwiperSlide className="swiper-slide4"><GridCasesCart/></SwiperSlide>
    </Swiper>
  </>
  );
}
