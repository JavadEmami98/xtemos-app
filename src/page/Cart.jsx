import { Box, Button, Container } from "@mui/material";
import React from "react";
import IndexHeader from "../component/layout/header/IndexHeader";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import CloseIcon from "@mui/icons-material/Close";

function Cart() {
  return (
    <div>
      <Container maxWidth="lg">
        <IndexHeader />
      </Container>
      {/* Banner */}
      <Box
        sx={{
          backgroundImage:
            "url('https://woodmart.xtemos.com/accessories/wp-content/uploads/sites/7/2022/04/accessories-page-title.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: { lg: "156px", height: "56px" },
          width: "100%",
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
          mb: "40px",
          px: "15px",
        }}
      >
        <div className="flex justify-center items-center w-full mb-[10px] text-[#FFFFFFCC] text-[22px]">
          <p className="lg:border-b-[2px] lg:border-[#2e6bc6] lg:text-[#FFFFFFCC] text-[#FFFFFF]">
            کارت خرید
          </p>
          <KeyboardBackspaceIcon
            sx={{ mx: "15px", display: { lg: "block", display: "none" } }}
          />
          <p className="lg:block hidden"> چک عوت</p>
          <KeyboardBackspaceIcon
            sx={{ mx: "15px", display: { lg: "block", display: "none" } }}
          />
          <p className="lg:block hidden"> اوردر کامپیلیت </p>
        </div>
      </Box>
      <Container maxWidth="lg">
        <div className="grid lg:grid-cols-5 grid-cols-1 gap-6 ">
          <div className="col-span-3 ">
            <div className="flex justify-center items-center p-[20px] h-[82.6px] border-[2px] border-[#0000001b] border-dashed rounded-[8px] mb-[20px]">
              <div className="flex flex-col  justify-center text-[14px] w-full">
                <div className="flex">
                  <p className="text-[#777777]">ادد</p>
                  <span className="text-[#2e6bc6] mx-[3px]">77</span>
                  <p className="text-[#777777]">اسنقدز به کارت اضلهص</p>
                </div>

                <div className="mt-[10px] h-[7px] rounded-[8px] bg-[#2e6bc6] w-full"></div>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-3 border-b">
              <div className="col-span-3">
                <p className="px-[12px] py-[15px] text-center">محصولات</p>
              </div>
              <div className="col-span-2">
                <div className="flex text-[16px] text-[#242424] justify-between">
                  <p className="px-[12px] py-[15px] text-center">قیمت</p>
                  <p className="px-[12px] py-[15px] text-center">محصولات</p>
                  <p className="px-[12px] py-[15px] text-center">توتال</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-5 border-b mb-[35px]">
              <div className="col-span-3">
                <div className="flex items-center px-[15px] py-[12px]">
                  <CloseIcon
                    sx={{ color: "#333", width: "25px", height: "25px" }}
                  />
                  <img
                    src="https://woodmart.xtemos.com/accessories/wp-content/uploads/sites/7/2022/09/green-case-back.jpg"
                    alt=""
                    className="h-[74px] object-cover ml-[10px]"
                  />
                  <div className="flex  justify-between w-full gap-3">
                    <p className="text-[14px] text-[#777777] ml-[5px]">
                      iPhone 12 Pro Moment Case – Olive
                    </p>
                  </div>
                </div>
              </div>
              {/* sads */}
              <div className="col-span-2">
                <div className="flex items-center h-full justify-between px-[15px] py-[12px] ">
                  <div className="text-[14px] text-[#777777]">140</div>
                  <div className="flex items-center justify-between w-[80px] border rounded-[8px] h-[32px]">
                    <div className="flex items-center justify-center px-[7px] h-full ">
                      <p>-</p>
                    </div>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="1"
                      className="w-[30px] h-full pr-[15px] border"
                    />
                    <div className="flex items-center justify-center px-[7px]  h-full ">
                      <p>+</p>
                    </div>
                  </div>
                  <div className="text-[16px] text-[#2e6bc6]">250</div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="کد بزن"
                className="w-[230px] h-[42px] px-[15px] ml-[10px] outline-none border rounded-[5px]"
              />
              <Button
                variant="contained"
                sx={{ width: "139.5px", height: "42px", background: "#2e6bc6" }}
              >
                تایید
              </Button>
            </div>
          </div>
          <div className="col-span-2 bg-black">xzczczxc</div>
        </div>
      </Container>
    </div>
  );
}

export default Cart;
