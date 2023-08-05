import { Box } from "@mui/material";
import React from "react";

function Swiper2Cart() {
  return (
    <Box
      sx={{
        cursor:"pointer",
        overflow: "hidden",
        img: {
          transition: "all ease-in 300ms",
        },
        ":hover": {
          img: {
            transform: "scale(1.2)",
            transition: "all ease-in 500ms ",
          },
        },
      }}
      className="w-full h-full"
    >
      <img
        src="https://a6n4d3q9.rocketcdn.me/accessories/wp-content/uploads/sites/7/2022/08/wood-accessories-category-3.jpg.webp"
        alt=""
        loading="lazy"
      />
      <div className="p-[10px]">
        <h3 className="text-[18px] text-[#333333]">کابل</h3>
        <p className="text-[#00000040] text-[13px]">18 محصول</p>
      </div>
    </Box>
  );
}

export default Swiper2Cart;
