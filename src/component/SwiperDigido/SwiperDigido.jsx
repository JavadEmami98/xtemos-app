import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./SwiperDigido.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function SwiperDigido() {
  return (
    <>
    <div className="swiper-digido">
      <Swiper
        style={{ marginTop: "30px",borderRadius:"30px" }}
        cssMode={true}
        navigation={{
            nextEl:".button-next-slide",
            prevEl:".button-prev-slide"
        }}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="relative group"
      >
        <SwiperSlide>
            <img src="/images/samsung.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>   <img src="/images/samsung.jpg" alt="" /></SwiperSlide>
        <SwiperSlide>   <img src="/images/samsung.jpg" alt="" /></SwiperSlide>
        <SwiperSlide>   <img src="/images/samsung.jpg" alt="" /></SwiperSlide>

        <div className="absolute group-hover:right-0 -right-[10rem] duration-0 top-[43%] z-10  button-prev-slide ">
        <ArrowForwardIosIcon sx={{width:"36px",height:"68px",color:"#fff",p:"7px",backgroundColor:"#00000066",borderRadius:"4px",cursor:"pointer",":hover":{backgroundColor:"#191e20db"}}}/>
        </div>
        <div className="absolute group-hover:left-0 -left-[10rem] duration-0 top-[43%]  z-10 button-next-slide">
        <ArrowBackIosNewIcon sx={{width:"36px",height:"68px",color:"#fff",p:"7px",backgroundColor:"#00000066",borderRadius:"4px",cursor:"pointer",":hover":{backgroundColor:"#191e20db"}}}/>
        </div>
      
      </Swiper></div>
    </>
  );
}
