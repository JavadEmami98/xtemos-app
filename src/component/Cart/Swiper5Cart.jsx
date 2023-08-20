import { Avatar, Box } from "@mui/material";
import React from "react";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

function Swiper5Cart() {
  return (
    <div className=" w-full rounded-[8px] overflow-hidden border cursor-pointer">
      <Box
        sx={{
          ":hover": {
            img: {
              transform: "scale(1.1)",
              transition: "all ease-in 450ms",     
            },
          },
        }}
      >
        <div className="relative ">
          <div className="relative overflow-hidden">   
          <img
            src="https://a6n4d3q9.rocketcdn.me/accessories/wp-content/uploads/sites/7/2022/04/accessories-blog-img-5-768x475.jpg"
            alt=""
            loading="lazy"
            className="lg:h-[192px] md:h-[192px] sm:h-[225px] object-cover w-full overflow-hidden cursor-pointer"
          /></div>
          <div className="flex flex-col absolute top-[10px] left-[10px] w-[53px] h-[56px]  bg-white rounded-[8px]">
            <span className="text-[24px]">22</span>
            <span className="text-[12px] pb-[6px] font-semibold">APR</span>
          </div>
          <Box
            sx={{ transform: "translate(-50%, -50%)" }}
            className="absolute z-80 inline-block overflow-hidden text-center pt-[2px] font-bold bottom-[-20px] left-[50%]  px-[10px] bg-[#2e6bc6] rounded-[8px] text-[#fff] text-[12px]"
          >
            <span>Decoration</span>
          </Box>
        </div>
        <div className="p-[25px]">
          <h3 className="text-[20px] text-[#333333] mb-[10px]">
            Collar brings back coffee brewing ritual
          </h3>
          <div className="flex justify-center items-center">
            <ShareOutlinedIcon
              sx={{
                ml: "10px",
                width: "18px",
                height: "18px",
                color: "#bbbbbb",
                mb: "5px",
              }}
            />
            <div className="relative ">
              <ChatBubbleOutlineIcon
                sx={{ width: "16px", height: "20px", color: "#bbb" }}
              />
              <div className="absolute top-[-5px] right-[-5px] w-[14px] h-[14px] text-[9px] rounded-[50%] text-[#fff] bg-[#bbbbbb]">
                0
              </div>
            </div>
            <span className="text-[14px] text-[#bbbbbb] mr-[10px]">
              Mr. Mackay
            </span>
            <Avatar
              alt=""
              src="/images/back.jpg"
              sx={{ width: "18px", height: "18px", mx: "5px" }}
            />
          </div>
        </div>
      </Box>
    </div>
  );
}

export default Swiper5Cart;
