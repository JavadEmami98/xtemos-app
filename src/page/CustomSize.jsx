import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { Button } from "@mui/material";

function CustomSize() {
  return (
    <div className="p-7">
      <img
        src="assests/images/planLoan/dgso-logo.svg"
        alt=""
        className="object-cover h-[71px]"
      />
      <div className="flex lg:flex-row  flex-col justify-between items-center mt-[10px]">
        <div className="flex flex-col gap-2 item-start">
          <h1 className="lg:text-[71px] md:text-[50px] text-[33px] text-[#00AEBA]">
            خرید اقساطی
          </h1>
          <h2 className="lg:text-[32px] md:text-[27px] text-[21px] text-[#787878] font-bold">
            درکوتاه ترین زمان و بهترین قیمت اقساطی خرید کن
          </h2>
          <div className="border-b border-[2px] border-[#707070] mt-[5px]"></div>
          <div className="flex gap-2">
            <p className="lg:text-[42px] md:text-[38px] text-[27px] text-[#40BEA7] font-bold">
              50
            </p>
            <p className="lg:text-[40px] md:text-[36px] text-[25px] text-[#212121] font-bold">
              الی
            </p>
            <p className="lg:text-[42px] md:text-[38px] text-[27px] text-[#40BEA7] font-bold">
              100
            </p>
            <p className="lg:text-[40px] md:text-[36px] text-[25px] text-[#212121] font-bold">
              {" "}
              میلیون تسـهیلات بانکی
            </p>
          </div>
          <h3 className="text-[#6E27A0] lg:text-[30px] md:text-[24px] text-[18px] font-bold">
            خرید کالای دیجیتال و لوازم خانگی به بهترین و نازل ترین قیمت
          </h3>
          <h3 className="text-[#6E27A0] lg:text-[23px] md:text-[18px] text-[15px] font-bold">
            با توجه به محدود بودن منابع مالی ،همین حالا برای ثبت نام اقدام کنید{" "}
          </h3>
        </div>
        <img
          src="assests/images/planLoan/wallet-purple.svg"
          alt=""
          className="object-cover lg:h-[368px] md:h-[260px] h-[170px]"
        />
      </div>
      <div className="relative lg:w-[90%]  flex items-center p-6 mt-[10px] bg-[#F8F8F8] border-[#707070] rounded-[36px]">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-5">
            <img
              src="assests/images/planLoan/note.svg"
              alt=""
              className="object-cover h-[35px]"
            />
            <div className="flex flex-col gap-2">
              <p className="text-[#6E27A0] text-[25px] font-bold">
                ثبت نام آسان
              </p>
              <div className="flex items-center gap-3">
                <CircleIcon sx={{ height: "6px", width: "6px" }} />
                <p className="text-[#212121] text-[17px]">
                  {" "}
                  ثبت نام و دریافت آسان
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <img
              src="assests/images/planLoan/time.svg"
              alt=""
              className="object-cover h-[35px]"
            />
            <div className="flex flex-col gap-2">
              <p className="text-[#6E27A0] text-[25px] font-bold">
                {" "}
                تامین اعتبار سریع{" "}
              </p>
              <div className="flex items-center gap-3">
                <CircleIcon sx={{ height: "6px", width: "6px" }} />
                <p className="text-[#212121] text-[17px]">
                  {" "}
                  دریافت تسهیلات بدون حضور در بانک{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <img
              src="assests/images/planLoan/person.svg"
              alt=""
              className="object-cover h-[35px]"
            />
            <div className="flex flex-col gap-2">
              <p className="text-[#6E27A0] text-[25px] font-bold">
                {" "}
                بدون نیاز به ضامن{" "}
              </p>
              <div className="flex items-center gap-3">
                <CircleIcon sx={{ height: "6px", width: "6px" }} />
                <p className="text-[#212121] text-[17px]">
                  {" "}
                  A بدون نیاز به ضامن برای متقاضیان دارای رتبه{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <img
              src="assests/images/planLoan/dollar.svg"
              alt=""
              className="object-cover h-[35px]"
            />
            <div className="flex flex-col gap-2">
              <p className="text-[#6E27A0] text-[25px] font-bold">
                {" "}
                باز پرداختی اقتصادی و به صرفه
              </p>
              <div className="flex items-center gap-3">
                <CircleIcon sx={{ height: "6px", width: "6px" }} />
                <p className="text-[#212121] text-[17px]">
                  {" "}
                  باز پرداخت بلند مدت و سود مقرون به صرفه
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute lg:left-[-70px] flex flex-col gap-5">
          <Button
            variant="contained"
            sx={{
              fontSize: "30px",
              borderRadius: "44px",
              backgroundColor: "#40BEA7",
              height: "71px",
              "&:hover": { background: "#40BEA7" },
            }}
          >
            ثبت نام
          </Button>
          <Button
            variant="contained"
            sx={{
              fontSize: "30px",
              borderRadius: "44px",
              backgroundColor: "#6E27A0",
              height: "71px",
              "&:hover": { background: "#6E27A0" },
            }}
          >
            ورود
          </Button>
        </div>
      </div>
      <div className="my-[20px] rounded-[34px] bg-[#991890] lg:text-[32px] text-[25px] font-bold text-[#fff] py-4 px-3 w-fit">
        مراحل دریافت وام
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 border-[2px] rounded-[36px] border-[#707070] border-dashed p-6">
        <div className="flex flex-col">
          <h3 className="text-[#991890] lg:text-[73px] text-[50px] font-bold">
            01
          </h3>
          <p className="text-[#991890] lg:text-[30px] text-[25px] font-bold">
            شرایط و ثبت نام
          </p>
          <p className="text-[#212121] text-[19px]">
            ثبت نام در سایت دیجی سا تکمیل مشخصات هویتی
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-[#991890] lg:text-[73px] text-[50px] font-bold">
            02
          </h3>
          <p className="text-[#991890] lg:text-[30px] text-[25px] font-bold">
            پرداخت کارمزد
          </p>
          <p className="text-[#212121] text-[19px]">
            پرداخت کارمزد تسهیلات درخواستی
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-[#991890] lg:text-[73px] text-[50px] font-bold">
            03
          </h3>
          <p className="text-[#991890] lg:text-[30px] text-[25px] font-bold">
            {" "}
            دریافت نوبت احراز هویت
          </p>
          <p className="text-[#212121] text-[19px]">
            {" "}
            دریافت نوبت جهت احراز هویت{" "}
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-[#991890] lg:text-[73px] text-[50px] font-bold">
            04
          </h3>
          <p className="text-[#991890] lg:text-[30px] text-[25px] font-bold">
            احراز هویت و عقد قرارداد{" "}
          </p>
          <p className="text-[#212121] text-[19px]">
            {" "}
            تحویل مدارک به صورت فیزیکی به کارشناسان{" "}
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-[#991890] lg:text-[73px] text-[50px] font-bold">
            05
          </h3>
          <p className="text-[#991890] lg:text-[30px] text-[25px] font-bold">
            اخذ تسهیلات{" "}
          </p>
          <p className="text-[#212121] text-[19px]">
            {" "}
            دریافت اعتبار از سمت بانک{" "}
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-[#991890] lg:text-[73px] text-[50px] font-bold">
            06
          </h3>
          <p className="text-[#991890] lg:text-[30px] text-[25px] font-bold">
            شارژ کیف پول در سایت{" "}
          </p>
          <p className="text-[#212121] text-[19px]">
            {" "}
            خرید محصولات از دیجی سا{" "}
          </p>
        </div>
      </div>
      <div className="my-[20px]">
        <img
          src="/assests/images/planLoan/banner.svg"
          alt=""
          className="object-cover w-[100%]"
        />
      </div>
    </div>
  );
}

export default CustomSize;
