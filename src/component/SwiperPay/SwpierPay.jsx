import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SwiperPay.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const breakpoints = {
  1024: {
    slidesPerView: 3,
    spaceBetween: 0,
  },
  768: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
  680: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
  0: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
};

export default function SwiperPay() {
  return (
    <>
      <div className="swiper-pay2">
        <Swiper
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "1rem",
            marginBottom: "1.5rem",
            padding: "1rem",
            backgroundColor: "#fff",
            overflow: "hidden",
            width: "100%",
            height: "79px",
          }}
          /*   slidesPerView={3} */
          centeredSlides={true}
          breakpoints={breakpoints}
          slideActiveClass="swiper-slide-active"
          navigation={{
            nextEl: ".button-next-slide",
            prevEl: ".button-prev-slide",
            disabledClass: ".swiper-button-disabled",
          }}
          modules={[Pagination, Navigation]}
          className="relative group flex items-center justify-center border-[1px] border-[#B1B1B1] rounded-[10px] w-full overflow-hidden"
        >
          <SwiperSlide className="swiper-slide-pay">
            <div className="flex items-end justify-center text-[24px] text-[#061962] font-light">
              <p>7,500,000</p>
              <p className="text-[12px] mr-[8px]">ریال</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-pay">
            <div className=" flex items-end justify-center text-[24px] text-[#061962] font-light">
              <p>10,000,000</p>
              <p className="text-[12px] mr-[8px]">ریال</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-pay">
            <div className=" flex items-end justify-center text-[20px] text-[#061962] font-light">
              <p>15,000,000</p>
              <p className="text-[12px] mr-[8px]">ریال</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-pay">
            <div className=" flex items-end text-[20px] justify-center text-[#061962] font-light">
              <p>20,000,000</p>
              <p className="text-[12px] mr-[8px]">ریال</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-pay">
            <div className=" flex items-end text-[20px] justify-center text-[#061962] font-light">
              <p>30,000,000</p>
              <p className="text-[12px] mr-[8px]">ریال</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-pay">
            <div className=" flex items-end text-[20px] justify-center text-[#061962] font-light">
              <p>50,000,000</p>
              <p className="text-[12px] mr-[8px]">ریال</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-pay">
            <div className=" flex items-end text-[20px] justify-center text-[#061962] font-light">
              <p>70,000,000</p>
              <p className="text-[12px] mr-[8px]">ریال</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-pay">
            <div className="flex items-end text-[20px] justify-center text-[#061962] font-light">
              <p>100,000,000</p>
              <p className="text-[12px] mr-[8px]">ریال</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-pay">
            <div className=" flex items-end text-[20px] justify-center text-[#061962] font-light">
              <p>150,000,000</p>
              <p className="text-[12px] mr-[8px]">ریال</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-pay">
            <div className=" flex items-end text-[20px] justify-center text-[#061962] font-light">
              <p>200,000,000</p>
              <p className="text-[12px] mr-[8px]">ریال</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-pay">
            <div className=" flex items-end text-[20px] justify-center text-[#061962] font-light mx-[8px]">
              <p>250,000,000</p>
              <p className="text-[12px] mr-[8px]">ریال</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-pay">
            <div className=" flex items-end text-[24px] justify-center text-[#061962] font-light ml-[8px]">
              <p>300,000,000</p>
              <p className="text-[12px] mr-[5px]">ریال</p>
            </div>
          </SwiperSlide>
          <div className="absolute flex justify-center items-center h-full  w-[35px] top-auto left-0 bg-[#fff] cursor-pointer  z-10">
            <div className="absolute flex justify-center items-center h-[60px] w-[30px] top-auto left-2  rounded-[8px] bg-[rgb(78,138,255,0.3)]  cursor-pointer button-next-slide z-10 ">
              <NavigateBeforeIcon />
            </div>
          </div>
          <div className="absolute flex justify-center items-center h-full  w-[35px] top-auto right-0 bg-[#fff] cursor-pointer  z-10">
            <div className="absolute flex justify-center items-center h-[60px] w-[30px] top-auto right-2  rounded-[8px] bg-[rgb(78,138,255,0.3)]  cursor-pointer button-prev-slide z-10 ">
              <NavigateNextIcon
                sx={{ opacity: 1, color: "black !important" }}
              />
            </div>
          </div>
        </Swiper>
      </div>
    </>
  );
}

/* import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SwiperPay.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const breakpoints = {
  1024: {
    slidesPerView: 3,
    spaceBetween: 0,
  },
  768: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
  680: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
  0: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
};

export default function SwiperPay() {
  return (
    <>
      <div className="swiper-pay2">
        <Swiper
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "24px 0px",
            padding: "24px",
            backgroundColor: "#fff",
            overflow: "hidden",
            width: "100%",
          }}
            slidesPerView={3} 
          centeredSlides={true}
          breakpoints={breakpoints}
          slideActiveClass="swiper-slide-active"
          navigation={{
            nextEl: ".button-next-slide",
            prevEl: ".button-prev-slide",
            disabledClass: ".swiper-button-disabled",
          }}
          modules={[Pagination, Navigation]}
          className="relative group flex items-center justify-center border-[2px] border-[#dee3e7] rounded-[12px] w-full overflow-hidden"
        >
          <SwiperSlide className="swiper-slide-pay">
            <div className="flex items-end justify-center text-[24px] text-[#061962] font-light">
              <p>7,500,000</p>
              <p className="text-[12px] mr-[8px]">ریال</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-pay">
            <div className=" flex items-end justify-center text-[24px] text-[#061962] font-light">
              <p>10,000,000</p>
              <p className="text-[12px] mr-[8px]">ریال</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-pay">
            <div className=" flex items-end justify-center text-[24px] text-[#061962] font-light">
              <p>15,000,000</p>
              <p className="text-[12px] mr-[8px]">ریال</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-pay">
            <div className=" flex items-end text-[24px] justify-center text-[#061962] font-light">
              <p>20,000,000</p>
              <p className="text-[12px] mr-[8px]">ریال</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-pay">
            <div className=" flex items-end text-[24px] justify-center text-[#061962] font-light">
              <p>30,000,000</p>
              <p className="text-[12px] mr-[8px]">ریال</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-pay">
            <div className=" flex items-end text-[24px] justify-center text-[#061962] font-light">
              <p>50,000,000</p>
              <p className="text-[12px] mr-[8px]">ریال</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-pay">
            <div className=" flex items-end text-[24px] justify-center text-[#061962] font-light">
              <p>70,000,000</p>
              <p className="text-[12px] mr-[8px]">ریال</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-pay">
            <div className="flex items-end text-[24px] justify-center text-[#061962] font-light">
              <p>100,000,000</p>
              <p className="text-[12px] mr-[8px]">ریال</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-pay">
            <div className=" flex items-end text-[24px] justify-center text-[#061962] font-light">
              <p>150,000,000</p>
              <p className="text-[12px] mr-[8px]">ریال</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-pay">
            <div className=" flex items-end text-[24px] justify-center text-[#061962] font-light">
              <p>200,000,000</p>
              <p className="text-[12px] mr-[8px]">ریال</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-pay">
            <div className=" flex items-end text-[24px] justify-center text-[#061962] font-light mx-[8px]">
              <p>250,000,000</p>
              <p className="text-[12px] mr-[8px]">ریال</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-pay">
            <div className=" flex items-end text-[24px] justify-center text-[#061962] font-light ml-[8px]">
              <p>300,000,000</p>
              <p className="text-[12px] mr-[5px]">ریال</p>
            </div>
          </SwiperSlide>
          <div className="absolute flex justify-center items-center h-full  w-[80px] top-auto left-0 bg-[#fff] cursor-pointer  z-10">
            <div className="absolute flex justify-center items-center h-[60px] w-[60px] top-auto left-2 bg-[#f0f5ff] rounded-[8px] border-[2px] border-[#0040ff] cursor-pointer button-next-slide z-10 ">
              <img
                src="https://www.mydigipay.com/icon-charon-left-blue.9e1023c9e5b118ff.svg"
                alt=""
              />
            </div>
          </div>
          <div className="absolute flex justify-center items-center h-full  w-[80px] top-auto right-0 bg-[#fff] cursor-pointer  z-10">
            <div className="absolute flex justify-center items-center h-[60px] w-[60px] top-auto right-2 bg-[#f0f5ff] rounded-[8px] border-[2px] border-[#0040ff] cursor-pointer button-prev-slide z-10 ">
              <img
                src="https://www.mydigipay.com/icon-charon-right-blue.0215ee47dbf2cafb.svg"
                alt=""
              />
            </div>
          </div>
        </Swiper>
      </div>
    </>
  );
}
 */
