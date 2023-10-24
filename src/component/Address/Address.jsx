import React from "react";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import SmartphoneOutlinedIcon from "@mui/icons-material/SmartphoneOutlined";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import CircleIcon from "@mui/icons-material/Circle";
import { Button } from "@mui/material";

function Address() {
  return (
    <div className="container">
      <div>
        <div className="lg:mt-[64px] mt-[32px] lg:text-[27px] md:text-[21px] text-[17px] text-center text-[#424c5c] font-black">
          <p> مزایای ثبت نام حضوری</p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 lg:gap-6 gap-2 lg:mt-[32px] mt-[10px]">
          <div className="flex gap-3 items-center rounded-[16px] p-2   bg-white">
            <div className="flex-[0_0_48px] flex justify-center items-center rounded-[12px] bg-[#fff5ee] h-[48px] ">
              <img
                src="https://www.mydigipay.com/static/2023/08/d137f4d5-5867-4c29-b06f-3751027220eb.svg"
                alt=""
                className="h-[24px] w-[24px] object-cover"
              />
            </div>
            <p className="text-[#2c3544]  text-[14px] font-bold">
              با راهنمایی کارشناس ثبت‌نام اعتبار
            </p>
          </div>
          <div className="flex gap-3 items-center rounded-[16px] p-2 border-[1px] bg-white">
            <div className="flex-[0_0_48px] flex justify-center items-center rounded-[12px] bg-[#fff5ee] h-[48px] ">
              <img
                src="https://www.mydigipay.com/static/2023/08/8068f0d7-61b8-4b9c-8e2a-fb1ddd798a50.svg"
                alt=""
                className="h-[24px] w-[24px] object-cover"
              />
            </div>
            <p className="text-[#2c3544]  text-[14px] font-bold">
              انجام مراحل در یک روز
            </p>
          </div>
          <div className="flex gap-3 items-center rounded-[16px] p-2 border-[1px]  bg-white">
            <div className="flex-[0_0_48px] flex justify-center items-center rounded-[12px] bg-[#fff5ee] h-[48px] ">
              <img
                src="https://www.mydigipay.com/static/2023/08/6bc9062a-9227-4aaa-bcbd-21ee5f560b02.svg"
                alt=""
                className="h-[24px] w-[24px] object-cover"
              />
            </div>
            <p className="text-[#2c3544]  text-[14px] font-bold">
              تحویل مدارک سریع و راحت
            </p>
          </div>
        </div>
        <div className="flex gap-8 flex-col items-center mt-[32px] p-[48px] border rounded-[24px] bg-[#fff] overflow-hidden w-full">
          <h2 className="lg:text-[32px] md:text-[32px] text-[20px] font-black text-[#424c5c] text-center mb-[8px]">
            آدرس شعب ثبت نام حضوری
          </h2>
          <div className="flex lg:flex-row flex-col w-full gap-4 py-6 border-b border-[#DEE3E7]">
            <div className="flex flex-col gap-4 ">
              <h2 className="text-[18px] text-[#061962] font-semibold">
                {" "}
                شعبه مير عماد{" "}
              </h2>
              <p className="text-[16px] text-[#061962] font-normal">
                {" "}
                خيابان مطهري، خبابان مير عماد كوچه پيماني پلاك ١١ - واحد ١٠١{" "}
              </p>
              <p className="text-[16px] text-[#6e798d] font-semibold">
                {" "}
                ساعت کاری: شنبه تا چهارشنبه از ساعت 8 تا 16 - پنچ شنبه از ساعت 9
                تا 13{" "}
              </p>
              <div className="flex items-center gap-1">
                <PinDropOutlinedIcon sx={{ color: "#6e798d", p: "2px" }} />
                <p className="text-[16px] text-[#6e798d] font-normal">تهران</p>
              </div>
              <div className="flex items-center gap-1">
                <SmartphoneOutlinedIcon sx={{ color: "#6e798d", p: "2px" }} />
                <p className="text-[16px] text-[#6e798d] font-normal">
                  {" "}
                  02161930010{" "}
                </p>
              </div>
              <div className="flex justify-end items-center w-full">
                <Button
                  variant="text"
                  sx={{ fontSize: "11px", color: "#0040ff", p: "12px" }}
                >
                  مسیریابی
                  <KeyboardBackspaceIcon sx={{ p: "2px" }} />
                </Button>
              </div>
            </div>
            map 1
          </div>
          <div className="flex lg:flex-row flex-col w-full gap-4 py-6 border-b border-[#DEE3E7]">
            <div className="flex flex-col gap-4 ">
              <h2 className="text-[18px] text-[#061962] font-semibold">
                {" "}
                پلاتین (غیر فعال){" "}
              </h2>
              <p className="text-[16px] text-[#061962] font-normal">
                {" "}
                بلوار فرحزادی، نبش سیمای ایران، مرکز خرید پلاتین، طبقه اول، پلاک
                107، شنبه تا پنجشنبه{" "}
              </p>
              <p className="text-[16px] text-[#6e798d] font-semibold">
                {" "}
                ساعت کاری: ۹ صبح الی ۵ بعد از ظهر{" "}
              </p>
              <div className="flex items-center gap-1">
                <PinDropOutlinedIcon sx={{ color: "#6e798d", p: "2px" }} />
                <p className="text-[16px] text-[#6e798d] font-normal">
                  {" "}
                  تهران - شهرک غرب{" "}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <SmartphoneOutlinedIcon sx={{ color: "#6e798d", p: "2px" }} />
                <p className="text-[16px] text-[#6e798d] font-normal">
                  {" "}
                  02161930400{" "}
                </p>
              </div>
              <div className="flex justify-end items-center w-full">
                <Button
                  variant="text"
                  sx={{ fontSize: "11px", color: "#0040ff", p: "12px" }}
                >
                  مسیریابی
                  <KeyboardBackspaceIcon sx={{ p: "2px" }} />
                </Button>
              </div>
            </div>
            map 2
          </div>
          <div className="flex lg:flex-row flex-col w-full gap-4 py-6 border-b border-[#DEE3E7]">
            <div className="flex flex-col gap-4 ">
              <h2 className="text-[18px] text-[#061962] font-semibold">
                {" "}
                نارمک (غیر فعال){" "}
              </h2>
              <p className="text-[16px] text-[#061962] font-normal">
                {" "}
                تهران، بزرگراه رسالت شرق به غرب، بعد از خیابان حیدرخانی، روبروی
                خیابان رودباری (مهر)، پلاک ۵۴۹{" "}
              </p>
              <p className="text-[16px] text-[#6e798d] font-semibold">
                {" "}
                ساعت کاری: ۹ صبح الی ۵ بعد از ظهر{" "}
              </p>
              <div className="flex items-center gap-1">
                <PinDropOutlinedIcon sx={{ color: "#6e798d", p: "2px" }} />
                <p className="text-[16px] text-[#6e798d] font-normal">
                  {" "}
                  تهران - نارمک{" "}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <SmartphoneOutlinedIcon sx={{ color: "#6e798d", p: "2px" }} />
                <p className="text-[16px] text-[#6e798d] font-normal">
                  {" "}
                  02161930400{" "}
                </p>
              </div>
              <div className="flex justify-end items-center w-full">
                <Button
                  variant="text"
                  sx={{ fontSize: "11px", color: "#0040ff", p: "12px" }}
                >
                  مسیریابی
                  <KeyboardBackspaceIcon sx={{ p: "2px" }} />
                </Button>
              </div>
            </div>
            map 3
          </div>
        </div>
        <div className="mt-[64px]">
          <div className="py-[12px] border rounded-[24px] bg-[#fff] overflow-hidden">
            <div className="flex gap-2 items-center px-4 w-full pb-4">
              <div className="flex justify-center items-center gap-1 rounded-[50%] bg-[#fff5ee] w-[24px] h-[24px]">
                <img
                  src="https://www.mydigipay.com/static/2023/08/36a48e4b-d665-43fd-b309-0f0e8877e754.svg"
                  alt=""
                  className="h-[11px] object-cover"
                />
              </div>
              <p className="lg:text-[20px] md:text-[20px] text-[14px] text-[#061962] font-semibold">
                {" "}
                مدارک مورد نیاز{" "}
              </p>
            </div>
            <div className="px-4 pb-6">
              <div className="flex p-4 flex-col bg-[#f2f5f8]  rounded-[16px]">
                <div className="flex gap-2 flex-col">
                  <div className="flex items-baseline gap-2">
                    <CircleIcon sx={{ width: "7px", height: "7px" }} />
                    <p className="text-[16px] text-[#2c3544]">
                      کارت ملی هوشمند (یا کارت ملی قدیمی به همراه رسید کارت ملی
                      جدید)
                    </p>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <CircleIcon sx={{ width: "7px", height: "7px" }} />
                    <p className="text-[16px] text-[#2c3544]">
                      چک صیادی به‌ نام خود متقاضی
                    </p>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <CircleIcon sx={{ width: "7px", height: "7px" }} />
                    <p className="text-[16px] text-[#2c3544]">
                      کارت پایان خدمت یا معافیت سربازی برای آقایان
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-[12px] mt-[24px] border rounded-[24px] bg-[#fff] overflow-hidden">
            <div className="flex gap-2 items-center px-4 w-full pb-4">
              <div className="flex justify-center items-center gap-1 rounded-[50%] bg-[#fff5ee] w-[24px] h-[24px]">
                <img
                  src="https://www.mydigipay.com/static/2023/08/36a48e4b-d665-43fd-b309-0f0e8877e754.svg"
                  alt=""
                  className="h-[11px] object-cover"
                />
              </div>
              <p className="lg:text-[20px] md:text-[20px] text-[14px] text-[#061962] font-semibold">
                {" "}
                شرایط متقاضی{" "}
              </p>
            </div>
            <div className="px-4 pb-6">
              <div className="flex p-4 flex-col bg-[#f2f5f8]  rounded-[16px]">
                <div className="flex gap-2 flex-col">
                  <div className="flex items-baseline gap-2">
                    <CircleIcon sx={{ width: "7px", height: "7px" }} />
                    <p className="text-[16px] text-[#2c3544]">
                      امکان ثبت نام فقط برای گروه سنی ۱۸ الی ۷۰ سال می‌باشد.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-[12px] mt-[24px] border rounded-[24px] bg-[#fff] overflow-hidden">
            <div className="flex gap-2 items-center px-4 w-full pb-4">
              <div className="flex justify-center items-center gap-1 rounded-[50%] bg-[#fff5ee] w-[24px] h-[24px]">
                <img
                  src="https://www.mydigipay.com/static/2023/08/36a48e4b-d665-43fd-b309-0f0e8877e754.svg"
                  alt=""
                  className="h-[11px] object-cover"
                />
              </div>
              <p className="lg:text-[20px] md:text-[20px] text-[14px] text-[#061962] font-semibold">
                {" "}
                هزینه ثبت نام{" "}
              </p>
            </div>
            <div className="px-4 pb-6">
              <div className="flex p-4 flex-col bg-[#fff]  rounded-[16px]">
                <div className="flex gap-2 flex-col">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://www.mydigipay.com/section-subtitle-icon.0f2ab0887000380b.svg"
                      alt=""
                    />
                    <p className="text-[12px] text-[#2c3544] pt-[10px]">
                      {" "}
                      ۱۰۰ هزارتومان در صورت فعالسازی کامل
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
