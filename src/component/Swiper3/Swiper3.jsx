import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Swiper3.css";

// import required modules
import { Pagination } from "swiper/modules";
import Swiper3Cart from "../Cart/Swiper3Cart";


const breakpoints = {
  "1024": {
    slidesPerView: 3,
    spaceBetween: 10,
  },
  "768": {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  "680": {
    slidesPerView: 1,
    spaceBetween: 16,
  },
  "0": {
    slidesPerView: 1,
    spaceBetween: 16,
  },
};

export default function Swiper3() {
  return (
    <>
      <Swiper
        style={{ marginBottom: "50px" }}
        breakpoints={breakpoints}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="./Swiper3.css"
      >
        <SwiperSlide className="swiper-slide3">
          <Swiper3Cart />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide3">
          <Swiper3Cart />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide3">
          <Swiper3Cart />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
