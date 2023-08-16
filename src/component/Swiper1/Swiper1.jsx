import React, {  useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Swiper1.css";


import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Button, Box } from "@mui/material";
/* import Swiper1Cart from "../Cart/Swiper1Cart"; */

/* const list = [
  {
    title: "   گوشیت رو راحت ",
    paragraph: " عوض کن",
    image: "url('/images/back.jpg')",
    descripttion1 :"قبلی پرچمداران این شرکت شاهد نبودیم. تنها در نمای رو به رویی این بار اپل از ناچ ",
    descripttion2:"از جمله اصلی‌ترین تغییرات در نظر گرفته شده برای این گوشی های هوشمند در مقایسه با پرچمداران خانواده"
  },
  {
    title: "خرید اپل واچ الترا",
    image: "url('/images/back.jpg')",
    descripttion1 :"قبلی پرچمداران این شرکت شاهد نبودیم. تنها در نمای رو به رویی این بار اپل از ناچ ",
    descripttion2:"از جمله اصلی‌ترین تغییرات در نظر گرفته شده برای این گوشی های هوشمند در مقایسه با پرچمداران خانواده"
  },
  {
    title: " گوشی اپل",
    image: "url('/images/back.jpg')",
    descripttion1 :"قبلی پرچمداران این شرکت شاهد نبودیم. تنها در نمای رو به رویی این بار اپل از ناچ ",
    descripttion2:"از جمله اصلی‌ترین تغییرات در نظر گرفته شده برای این گوشی های هوشمند در مقایسه با پرچمداران خانواده"
  },
]; */

const Swiper1 = () =>  {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = () => {
    setActiveIndex(swiperRef.current.swiper.realIndex);
  };


  return (
    <>
      <Swiper
      ref={swiperRef}
      onSwiper={(swiper) => {
        swiper.on('slideChange', handleSlideChange);
      }}
      onSlideChange={handleSlideChange}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="./Swiper1.css"
      >
       
          <SwiperSlide >
          <Box
        sx={{
          backgroundImage: "url('/images/back.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "75vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="flex flex-col lg:mr-[75px] px-[15px]">     
          <div   className="cart-mo relative lg:text-7xl md:text-[42px] text-[30px] mb-[20px] leading-[52px] lg:leading-[82px] text-[#242424] text-start">
          گوشیت رو راحت 
       <br />
       عوض کن
          </div>
          <div className="text-mo relative">
             <div className="hidden lg:block text-[16px] text-[#777777] mb-[30px] text-start">
             چمداران این شرکت شاهد نبودیم. تنها در نمای رو به رویی این بار اپل از نا
           <br />
           رای این گوشی های هوشمند در مقایسه با پرچمداران خا
          </div> </div>
          <div className="btn-mo flex">
              <Button variant="contained" sx={{width:"96.78px !important", height:"42px !important",ml:"15px",fontSize:"13px",backgroundcolor:"#2e6bc6"}}>فروشگاه</Button>
              <Button variant="outlined" sx={{width:"96.78px !important", height:"42px !important",color:"#333",border:"1px solid #00000000",fontSize:"13px"}}>خرید</Button>
          </div>
         
         
        </div>
      </Box>
          </SwiperSlide>
          <SwiperSlide >
          <Box
        sx={{
          backgroundImage: "url('/images/back.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "75vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="flex flex-col lg:mr-[75px] px-[15px]">     
          <div   className="cart-mo relative lg:text-7xl md:text-[42px] text-[30px] mb-[20px] leading-[52px] lg:leading-[82px] text-[#242424] text-start">
          گوشیت رو راحت 
       <br />
       عوض کن
          </div>
          <div className="text-mo relative">
             <div className="hidden lg:block text-[16px] text-[#777777] mb-[30px] text-start">
             چمداران این شرکت شاهد نبودیم. تنها در نمای رو به رویی این بار اپل از نا
           <br />
           رای این گوشی های هوشمند در مقایسه با پرچمداران خا
          </div> </div>
          <div className="btn-mo flex">
              <Button variant="contained" sx={{width:"96.78px !important", height:"42px !important",ml:"15px",fontSize:"13px",backgroundcolor:"#2e6bc6"}}>فروشگاه</Button>
              <Button variant="outlined" sx={{width:"96.78px !important", height:"42px !important",color:"#333",border:"1px solid #00000000",fontSize:"13px"}}>خرید</Button>
          </div>
         
         
        </div>
      </Box>
          </SwiperSlide>
          <SwiperSlide >
          <Box
        sx={{
          backgroundImage: "url('/images/back.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "75vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="flex flex-col lg:mr-[75px] px-[15px]">     
          <div   className="cart-mo relative lg:text-7xl md:text-[42px] text-[30px] mb-[20px] leading-[52px] lg:leading-[82px] text-[#242424] text-start">
          گوشیت رو راحت 
       <br />
       عوض کن
          </div>
          <div className="text-mo relative">
             <div className="hidden lg:block text-[16px] text-[#777777] mb-[30px] text-start">
             چمداران این شرکت شاهد نبودیم. تنها در نمای رو به رویی این بار اپل از نا
           <br />
           رای این گوشی های هوشمند در مقایسه با پرچمداران خا
          </div> </div>
          <div className="btn-mo flex">
              <Button variant="contained" sx={{width:"96.78px !important", height:"42px !important",ml:"15px",fontSize:"13px",backgroundcolor:"#2e6bc6"}}>فروشگاه</Button>
              <Button variant="outlined" sx={{width:"96.78px !important", height:"42px !important",color:"#333",border:"1px solid #00000000",fontSize:"13px"}}>خرید</Button>
          </div>
         
         
        </div>
      </Box>
          </SwiperSlide>
      
      </Swiper>
    </>
  );
}

export default Swiper1;

/*  {list.map((item, index) => (
          <SwiperSlide  key={index}>
            <Swiper1Cart  title={item.title} image={item.image} paragraph={item.paragraph} descripttion1={item.descripttion1} descripttion2={item.descripttion2}/>
          </SwiperSlide>
        ))} */

