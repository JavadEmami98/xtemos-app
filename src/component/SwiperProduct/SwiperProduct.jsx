import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./SwiperProduct.css";

// import required modules
import { Navigation } from "swiper/modules";

export default function SwiperProduct() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="swiper-pro">
        <SwiperSlide className="swiper-slide-p">
            <img src="https://a6n4d3q9.rocketcdn.me/accessories/wp-content/uploads/sites/7/2022/09/green-case-back-430x491.jpg.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-p">
            <img src="https://a6n4d3q9.rocketcdn.me/accessories/wp-content/uploads/sites/7/2022/09/green-case-back-430x491.jpg.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-p">
            <img src="https://a6n4d3q9.rocketcdn.me/accessories/wp-content/uploads/sites/7/2022/09/green-case-back-430x491.jpg.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-p">
            <img src="https://a6n4d3q9.rocketcdn.me/accessories/wp-content/uploads/sites/7/2022/09/green-case-back-430x491.jpg.webp" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
