import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./SwiperProduct.css";

// import required modules
import { Navigation } from "swiper/modules";
import LightBoxSwiper from "../LightBox/LightBox";

export default function SwiperProduct() {
  return (
    <>
    <div className="flex relative w-full">

   
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
        <div className="absolute bottom-0 left-0 z-20">
          {/* Button */}
           <LightBoxSwiper/>
        </div>
      </Swiper> 
      <div className="lg:block px-[15px] hidden">
            <img
              src="https://a6n4d3q9.rocketcdn.me/accessories/wp-content/uploads/sites/7/2022/09/green-case-back-430x491.jpg.webp"
              alt=""
              loading="lazy"
              className="object-cover h-[187px]"
            />
            <img
              src="https://a6n4d3q9.rocketcdn.me/accessories/wp-content/uploads/sites/7/2022/09/green-case-back-430x491.jpg.webp"
              alt=""
              loading="lazy"
              className="object-cover h-[187px]"
            />
            <img
              src="https://a6n4d3q9.rocketcdn.me/accessories/wp-content/uploads/sites/7/2022/09/green-case-back-430x491.jpg.webp"
              alt=""
              loading="lazy"
              className="object-cover h-[187px]"
            />
          </div>
    
      </div>
    </>
  );
}
