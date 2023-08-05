import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Swiper2.css";

// import required modules
import { Pagination } from "swiper/modules";
import Swiper2Cart from "../Cart/Swiper2Cart";


const breakpoints = {
  "1024": {
    slidesPerView: 6,
    spaceBetween: 10,
  },
  "768": {
    slidesPerView: 4,
    spaceBetween: 10,
  },
  "680": {
    slidesPerView: 2,
    spaceBetween: 16,
  },
  "0": {
    slidesPerView: 2,
    spaceBetween: 16,
  },
};

export default function Swiper2() {
 
  return (
    <>
      <Swiper
        style={{ marginTop: "70px", marginBottom: "70px" }}
        breakpoints={breakpoints}
        spaceBetween={2}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="./Swiper2.css"
      >
        <SwiperSlide className="swiper-slide2">
          <Swiper2Cart />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide2">
          <Swiper2Cart />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide2">
          <Swiper2Cart />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide2">
          <Swiper2Cart />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide2">
          <Swiper2Cart />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide2">
          <Swiper2Cart />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
