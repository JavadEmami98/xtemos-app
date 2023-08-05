import { Box, Button } from "@mui/material";
import React from "react";

function GridFour() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mb-[60px]">
      <div className="relative  w-full h-[309px] cursor-pointer lg:col-span-2 md:col-span-2 col-span-1 overflow-hidden rounded-[8px]">
        <Box
          sx={{
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
        >
          <img
            src="/images/back.jpg"
            alt=""
            loading="lazy"
            className="absolute w-full h-[309px] z-[-10] rounded-[8px] overflow-hidden"
          />
          <div className="p-[30px]">
            <h3 className="text-[#2e6bc6] lg:text-[15px] text-[13px] ">
              خرید گوشی موبایل
            </h3>
            <h4 className="mt-[7px] lg:text-[36px] md:text-[23px] text-[19.78px] text-[#242424]">
              خرید گوشی اپل
            </h4>
            <Button
              variant="outlined"
              sx={{
                width: "96.78px !important",
                height: "42px !important",
                color: "#333",
                border: "#00000000",
                fontSize: "13px",
                mt: "15px",
              }}
            >
              فروشگاه
            </Button>
          </div>
        </Box>
      </div>
      <div className="col-span-1 relative  w-full cursor-pointer overflow-hidden rounded-[8px]">
        <Box
          sx={{
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
        >
          <img
            src="/images/back.jpg"
            alt=""
            loading="lazy"
            className="absolute w-full h-[309px] z-[-10] rounded-[8px] overflow-hidden"
          />
          <div className="p-[30px]">
            <h3 className="text-[#2e6bc6] lg:text-[15px] text-[13px] ">
              خرید گوشی موبایل
            </h3>
            <h4 className="mt-[7px] lg:text-[36px] md:text-[23px] text-[19.78px] text-[#242424]">
              خرید گوشی اپل
            </h4>
            <Button
              variant="contained"
              sx={{
                width: "96.78px !important",
                height: "42px !important",
                ml: "15px",
                fontSize: "13px",
                backgroundcolor: "#2e6bc6",
                mt: "15px",
              }}
            >
              فروشگاه
            </Button>
          </div>
        </Box>
      </div>
      <div className="col-span-1  relative w-full cursor-pointer overflow-hidden rounded-[8px]">
        <Box
          sx={{
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
        >
          <img
            src="/images/back.jpg"
            alt=""
            loading="lazy"
            className="absolute w-full h-[309px] z-[-10] rounded-[8px] overflow-hidden"
          />
          <div className="p-[30px]">
            <h3 className="text-[#2e6bc6] lg:text-[15px] text-[13px] ">
              خرید گوشی موبایل
            </h3>
            <h4 className="mt-[7px] lg:text-[36px] md:text-[23px] text-[19.78px] text-[#242424]">
              خرید گوشی اپل
            </h4>
            <Button
              variant="contained"
              sx={{
                width: "96.78px !important",
                height: "42px !important",
                ml: "15px",
                fontSize: "13px",
                backgroundcolor: "#2e6bc6",
                mt: "15px",
              }}
            >
              خرید
            </Button>
          </div>
        </Box>
      </div>
      <div className="relative   w-full cursor-pointer h-[309px]  lg:col-span-2 md:col-span-2 col-span-1 overflow-hidden rounded-[8px]">
        <Box
          sx={{
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
        >
          <img
            src="/images/back.jpg"
            alt=""
            loading="lazy"
            className="absolute w-full h-[309px] z-[-10] rounded-[8px] overflow-hidden"
          />
          <div className="p-[30px]">
            <h3 className="text-[#2e6bc6] lg:text-[15px] text-[13px] ">
              خرید گوشی موبایل
            </h3>
            <h4 className="mt-[7px] lg:text-[36px] md:text-[23px] text-[19.78px] text-[#242424]">
              خرید گوشی اپل
            </h4>
            <Button
              variant="outlined"
              sx={{
                width: "96.78px !important",
                height: "42px !important",
                color: "#333",
                border: "#00000000",
                fontSize: "13px",
                mt: "15px",
              }}
            >
              بیشتر
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default GridFour;
