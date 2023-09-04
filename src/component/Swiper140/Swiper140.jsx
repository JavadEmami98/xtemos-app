import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Swiper140.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function Swiper140() {
  return (
    <>
      <div className="swiper-140">
        <Swiper
          style={{ marginTop: "30px", height: "316px"}}
          cssMode={true}
          scrollbar={true}
          navigation={{
            nextEl: ".button-next-slide",
            prevEl: ".button-prev-slide",
          }}
          pagination={{
            bulletActiveClass: "swiper-pagination-bullet-active-140",
            bulletClass: "swiper-pagination-bullet",
          }}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="relative group"
        >
          <SwiperSlide>
            <img
              src="https://www.mobile140.com/upload/banner/1692192016-S23-ultra-mob.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.mobile140.com/upload/banner/1692185210-xiaomi-Vitamin-C.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.mobile140.com/upload/banner/1692192016-S23-ultra-mob.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.mobile140.com/upload/banner/1692185210-xiaomi-Vitamin-C.jpg"
              alt=""
            />
          </SwiperSlide>

          <div className="absolute group-hover:right-7 -right-[10rem] duration-0 top-[50%] z-10  button-prev-slide ">
            <ArrowForwardIosIcon
              sx={{
                color: "#fff",
                cursor: "pointer",
              }}
            />
          </div>
          <div className="absolute group-hover:left-7 -left-[10rem] duration-0 top-[50%]  z-10 button-next-slide">
            <ArrowBackIosNewIcon
              sx={{
                color: "#fff",
                cursor: "pointer",
              }}
            />
          </div>
        </Swiper>
      </div>
    </>
  );
}
