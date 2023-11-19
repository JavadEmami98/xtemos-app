import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Swiper1.css";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Swiper1Cart from "../Cart/Swiper1Cart";

const list = [
  {
    title: "   گوشیت رو راحت ",
    paragraph: " عوض کن",
    image: "https://cdn.okala.com/Media/Index_v2/Slider/500459",
    descripttion1:
      "قبلی پرچمداران این شرکت شاهد نبودیم. تنها در نمای رو به رویی این بار اپل از ناچ ",
    descripttion2:
      "از جمله اصلی‌ترین تغییرات در نظر گرفته شده برای این گوشی های هوشمند در مقایسه با پرچمداران خانواده",
  },
  {
    title: "خرید اپل واچ الترا",
    image: "https://cdn.okala.com/Media/Index_v2/Slider/500459",
    descripttion1:
      "قبلی پرچمداران این شرکت شاهد نبودیم. تنها در نمای رو به رویی این بار اپل از ناچ ",
    descripttion2:
      "از جمله اصلی‌ترین تغییرات در نظر گرفته شده برای این گوشی های هوشمند در مقایسه با پرچمداران خانواده",
  },
  {
    title: " گوشی اپل",
    image:
      "url('https://www.mobile140.com/upload/banner/1692185210-xiaomi-Vitamin-C.jpg')",
    descripttion1:
      "قبلی پرچمداران این شرکت شاهد نبودیم. تنها در نمای رو به رویی این بار اپل از ناچ ",
    descripttion2:
      "از جمله اصلی‌ترین تغییرات در نظر گرفته شده برای این گوشی های هوشمند در مقایسه با پرچمداران خانواده",
  },
];

const Swiper1 = () => {
  return (
    <>
      <div className="swiper-hedear">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={{
            bulletActiveClass: "swiper-pagination-bullet-active-1",
          }}
          mousewheel={true}
          slideActiveClass="swiper-slide-active"
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="./Swiper1.css"
        >
          {list.map((item, index) => (
            <SwiperSlide key={index}>
              <Swiper1Cart
                title={item.title}
                image={item.image}
                paragraph={item.paragraph}
                descripttion1={item.descripttion1}
                descripttion2={item.descripttion2}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Swiper1;
