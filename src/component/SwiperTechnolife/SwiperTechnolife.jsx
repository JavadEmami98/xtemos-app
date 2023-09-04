import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./SwiperTechnolife.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function SwiperTechnolife() {
  return (
    <>
    <div className="swiper-technolife">
      <Swiper
        style={{ marginTop: "30px",height:"344px",overflowX:"auto"
    }}
        cssMode={true}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        pagination={{
            bulletActiveClass:"swiper-pagination-bullet-active-tech",
            bulletClass:"swiper-pagination-bullet",
           horizontalClass:"swiper-horizontal-tech"
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className=" relative group"
      >
        <SwiperSlide>
          <img src="https://www.technolife.ir/image/banner_SlideBanner_rYMnF8_b557a95a-1c52-49df-97d8-d69c781b08d7.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.technolife.ir/image/banner_SlideBanner_dxsEBc_ba01782e-c7a8-4956-b161-36974de948b6.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.technolife.ir/image/banner_SlideBanner_vawEEP_2764ba33-ae4f-4b8c-8c9e-18b11c438104.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.technolife.ir/image/banner_SlideBanner_jZss0K_fbdea343-cf82-45ae-a308-3586b99bb5bb.png" alt="" />
        </SwiperSlide>

        <div className="absolute  bottom-[60px] right-[35px] z-10  button-prev-slide ">
          <ArrowForwardIosIcon
            sx={{
              color: "#fff",  
              cursor: "pointer",
            }}
          />
        </div>
        <div className="absolute bottom-[60px] right-[85px]  z-10 button-next-slide">
          <ArrowBackIosNewIcon
            sx={{
                color: "#fff",  
                cursor: "pointer",
            }}
          />
        </div>
      </Swiper></div>
    </>
  );
}
