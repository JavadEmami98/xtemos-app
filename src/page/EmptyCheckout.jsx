import React from "react";
import IndexHeader from "../component/layout/header/IndexHeader";
import { Box, Button } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";

function EmptyCheckout() {
  return (
    <div>
      <div className="container">
        <IndexHeader />
      </div>
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
      <div className="flex flex-col items-center justify-center px-[15px] mb-[40px] w-full h-full">
        <div className="mt-[5vw] mb-[15px]">
          <RemoveShoppingCartOutlinedIcon
            sx={{ width: "182px", height: "182px", color: "#f1f1f1" }}
          />
        </div>
        <p className="lg:text-[48px] md:text-[42px] sm:text-[32px] text-[28px] text-[#242424]">
          سبد خرید شما در حال حاضر خالی است.
        </p>
      </div>
      <div className="flex justify-center items-center w-full text-[15.4px] text-[#777777] text-center px-[15px]">
        قبل از شروع تسویه حساب، باید محصولاتی را به سبد خرید خود اضافه کنید.{" "}
        <br />
        در صفحه "فروشگاه" ما محصولات جالب زیادی پیدا خواهید کرد.
      </div>
      <div className="flex justify-center items-center w-full px-[]15px">
        <Button
          variant="contained"
          sx={{
            width: "174.85px",
            height: "48px",
            fontSize: "14px",
            mt: "25px",
            mb: "47px",
          }}
        >
          بازگشت به فروشگاه
        </Button>
      </div>
    </div>
  );
}

export default EmptyCheckout;
