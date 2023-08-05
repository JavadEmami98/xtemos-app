import { Box } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="flex lg:py-0 lg:gap-0 lg:mb-0 mb-[57px] gap-2 py-5 lg:flex-row flex-col items-center justify-between px-[100px] lg:h-[105px] w-full  bg-[#101010] text-[#fff]">
        <img
          src="https://a6n4d3q9.rocketcdn.me/accessories/wp-content/uploads/sites/7/2022/04/wood-logo-white-reserve.svg"
          alt=""
          className="object-cover h-[25.85px] cursor-pointer"
        />
        <div className="flex items-center gap-8 h-[40px] text-[13px] ">
          <Box
            sx={{
              ":hover": {
                color: "#ffffffcc",
              },
            }}
            className="cursor-pointer"
          >
            درباره
          </Box>
          <Box
            sx={{
              ":hover": {
                color: "#ffffffcc",
              },
            }}
            className="cursor-pointer"
          >
            درباره
          </Box>
          <Box
            sx={{
              ":hover": {
                color: "#ffffffcc",
              },
            }}
            className="cursor-pointer"
          >
            درباره
          </Box>
          <Box
            sx={{
              ":hover": {
                color: "#ffffffcc",
              },
            }}
            className="cursor-pointer"
          >
            درباره
          </Box>
          <Box
            sx={{
              ":hover": {
                color: "#ffffffcc",
              },
            }}
            className="cursor-pointer"
          >
            درباره
          </Box>
        </div>
        <Box
          sx={{
            ":hover": {
              color: "#ffffffcc",
            },
          }}
          className="lg:text-[14px] md:text-[14px] text-[12px] cursor-pointer"
        >
          Xtemos Studio Copyright ©2023
        </Box>
      </div>
    </footer>
  );
}

export default Footer;
