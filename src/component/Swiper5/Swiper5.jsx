import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "./Swiper5.css";

import { Pagination } from "swiper/modules";
import Swiper5Cart from "../Cart/Swiper5Cart";

const breakpoints = {
  "1024": {
    slidesPerView: 4,
    spaceBetween: 15,
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
    <div className=" lg:h-[350px] w-full mb-[80px] pt-[13px] pb-[20px]">

   
    <Swiper
      style={{paddingTop:"13px",paddingBottom:"30px"}}
      breakpoints={breakpoints}
      pagination={false}
      navigation={{
        nextEl: ".button-next-slide",
        prevEl: ".button-prev-slide",
      }}
      modules={[Pagination]}
      className="./Swiper5.css group"
    >
      <SwiperSlide className="swiper-slide5"><Swiper5Cart/></SwiperSlide>
      <SwiperSlide className="swiper-slide5"><Swiper5Cart/></SwiperSlide>
      <SwiperSlide className="swiper-slide5"><Swiper5Cart/></SwiperSlide>
      <SwiperSlide className="swiper-slide5"><Swiper5Cart/></SwiperSlide>
      <SwiperSlide className="swiper-slide5"><Swiper5Cart/></SwiperSlide>
      <SwiperSlide className="swiper-slide5"><Swiper5Cart/></SwiperSlide>
      
      <div className="absolute group-hover:right-0 -right-[10rem] duration-300 top-[50%] z-10  button-prev-slide ">
            <ArrowForwardIosIcon
              sx={{
                color: "#333333",
                cursor: "pointer",
              }}
            />
          </div>
          <div className="absolute group-hover:left-0 -left-[10rem] duration-300 top-[50%]  z-10 button-next-slide">
            <ArrowBackIosNewIcon
              sx={{
                color: "#333333",
                cursor: "pointer",
              }}
            />
          </div>
    </Swiper>
     </div>
  </>
  );
}
