import React from "react";
import SwiperPay from "../SwiperPay/SwpierPay";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { Box, Button, Checkbox } from "@mui/material";

export default function Pay() {
  return (
    <div className="container">
      {/* part 1  */}
      <div>
        <div className="lg:flex md:flex  p-[30px] items-end">
          <img src="assests/images/planLoan/part1.svg" alt="" />
          <div className="flex flex-col gap-3 lg:mb-[50px] md:mb-[50px]">
            <div className="flex gap-5 mt-[10px]">
              <Button
                variant="contained"
                sx={{
                  width: "143px",
                  height: "42px",
                  background: "#4E8AFF",
                  borderRadius: "7px",
                  fontSize: "12px",
                  ":hover": { background: "#4E8AFF" },
                }}
              >
                شروع ثبت نام
              </Button>
              <Button
                variant="outlined"
                sx={{
                  /*   width: "113px", */
                  height: "42px",
                  background: "#fff",
                  color: "#4E8AFF",
                  borderRadius: "7px",
                  fontSize: "12px",
                  ":hover": { background: "#fff" },
                }}
              >
                راهنمای ثبت نام
              </Button>
            </div>
            <p className="text-[25px] font-semibold text-[#000000]">
              مـراحل ثبـت نـام وام زیتـرو
            </p>
            <p className="text-[12px] text-[#777777] font-medium">
              وام زیتـرو در قالب یک کارت اعتباری عضو شتاب به نام زیترو کارت در
              اختیار شما
              <br /> قرار داده میشه. با این کارت میتونید از هر فروشـگاه اینترنتی
              و غیر اینـترنتی در <br />
              سراسر کشور خرید کنید و هزینه‌اش رو بعداً بصورت اقساطی بپردازید.
            </p>
          </div>
        </div>
      </div>
      {/* part 2 */}
      <div className="flex mb-[15px] items-center justify-between px-[80px] rounded-[15px] relative bg-[#D9D9D9] w-full h-[52px]">
        <div className="flex items-center justify-center w-[36px] h-[36px] absolute top-2 right-[-13px] border-[1.5px] rounded-[10px] text-[#fff] text-[16px] border-[#FFFFFF] bg-[#B1B1B1]">
          1
        </div>
        <div className="flex items-center justify-center w-[36px] h-[36px] absolute top-2 left-[-13px] border-[1.5px] rounded-[10px] text-[#fff] text-[16px] border-[#FFFFFF] bg-[#B1B1B1]">
          <KeyboardDoubleArrowDownIcon />
        </div>
        <p className="text-[18px] font-bold text-[#fff]"> تکمیل مشخصات</p>
        <p className="text-[18px] font-bold text-[#fff]">امید کوشا </p>
      </div>
      <div className="flex items-center pr-[80px] rounded-[15px] relative bg-[#4E8AFF] w-full h-[52px]">
        <div className="flex items-center justify-center w-[36px] h-[36px] absolute top-2 right-[-13px] border-[1.5px] rounded-[10px] text-[#fff] text-[16px] border-[#FFFFFF] bg-[#1B3AAD]">
          2
        </div>
        <div className="flex items-center justify-center w-[36px] h-[36px] absolute top-2 left-[-13px] border-[1.5px] rounded-[10px] text-[#fff] text-[16px] border-[#FFFFFF] bg-[#F16E24]">
          <KeyboardDoubleArrowDownIcon />
        </div>
        <p className="text-[18px] font-bold text-[#fff]">مبلغ درخواستی</p>
      </div>
      <div className="px-[15px]">
        <div className="container bg-[#EEEEEE] flex flex-col  lg:py-[64px] lg:px-[64px] md:py-[64px] md:px-[24px] p-[32px_8px_8px] border rounded-br-[15px] rounded-bl-[15px]  overflow-hidden">
          <div className="lg:px-[136px] ">
            <h2 className="text-[15px] font-bold text-[#000000] text-start mr-[25px]">
              انتخاب مبلغ وام
            </h2>
            <div className="bg-[#fff] rounded-[15px] p-8 mt-2">
              <SwiperPay />
              <div className="flex items-center justify-around mt-[35px]">
                <div className="flex items-center justify-center lg:px-[24px] md:px-[24px] px-[16px] lg:py-[13px] md:py-[13px] py-[8px] border-[1px] border-[#B1B1B1] bg-[#4E8AFF] rounded-[7px] lg:text-[14px] md:text-[14px] text-[12px] text-[#fff] font-semibold cursor-pointer">
                  {" "}
                  6 قسط{" "}
                </div>
                <div className="flex items-center justify-center lg:px-[24px] md:px-[24px] px-[16px] lg:py-[13px] md:py-[13px] py-[8px] border-[1px] border-[#6e798d]  rounded-[7px] lg:text-[14px] md:text-[14px] text-[12px] text-[#6e798d] font-semibold cursor-pointer">
                  {" "}
                  12 قسط{" "}
                </div>
                <div className="flex items-center justify-center lg:px-[24px] md:px-[24px] px-[16px] lg:py-[13px] md:py-[13px] py-[8px] border-[1px] border-[#dee3e7]  rounded-[7px] lg:text-[14px] md:text-[14px] text-[12px] text-[#dee3e7] font-semibold cursor-pointer">
                  {" "}
                  24 قسط{" "}
                </div>
                <div className="flex items-center justify-center lg:px-[24px] md:px-[24px] px-[16px] lg:py-[13px] md:py-[13px] py-[8px] border-[1px] border-[#dee3e7] rounded-[7px] lg:text-[14px] md:text-[14px] text-[12px] text-[#dee3e7] font-semibold cursor-pointer">
                  {" "}
                  36 قسط{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Box
        sx={{ display: { lg: "blcok", md: "block", xs: "none", sm: "none" } }}
      >
        <div className="lg:px-[215px] px-3 mt-[30px]">
          <p className="text-[15px] font-bold text-[#000000] mr-[25px]">
            جـزئیات{" "}
          </p>
          <div className="flex flex-col py-[25px] px-[50px] bg-[#F6F6F6] rounded-[15px] mt-3">
            <div className="flex justify-around items-center  py-[15px] bg-[#fff] rounded-[10px] border border-[#EEEEEE]">
              <img src="assests/images/planLoan/bank-saman.svg" alt="" />
              <div className="flex flex-col gap-1">
                <p className="text-[10px] text-[#646464] font-medium">
                  تامین کننده
                </p>
                <p className="text-[8px] text-[#4E8AFF] font-normal">
                  بانک سامان{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col gap-2 mt-4 border-l-[1px] border-[#D9D9D9] px-[25px]">
                <div className="flex items-center gap-3">
                  <p className="text-[12px] text-[#000000] font-medium">
                    مبلغ هر قسط
                  </p>
                  <p className="text-[8px] text-[#000000] font-normal">
                    {" "}
                    (بدون احتساب هزینه عملیات){" "}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-[12px] text-[#646464] font-medium">
                    3,372,936{" "}
                  </p>
                  <p className="text-[10px] text-[#646464] font-normal">
                    {" "}
                    تومان{" "}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2  mt-4 border-l-[1px] border-[#D9D9D9] px-[25px]">
                <div className="flex items-center gap-3">
                  <p className="text-[12px] text-[#000000] font-medium">
                    پیش پرداخت
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-[12px] text-[#646464] font-medium">
                    3,372,936{" "}
                  </p>
                  <p className="text-[10px] text-[#646464] font-normal">
                    {" "}
                    تومان{" "}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 mt-4 px-[25px] border-l-[1px] border-[#D9D9D9]">
                <div className="flex items-center gap-3">
                  <p className="text-[12px] text-[#000000] font-medium">سود </p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-[12px] text-[#646464] font-medium">22% </p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center  gap-2 mt-4  border-l-[1px] border-[#D9D9D9] px-[25px]">
                <p className="text-[12px] text-[#000000] font-medium">
                  ضمانت مورد تایید
                </p>
                <p className="text-[10px] text-[#646464] font-medium">
                  {" "}
                  یک برگ چک صیادی{" "}
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-4 items-center">
                <div className="flex items-center gap-3">
                  <p className="text-[12px] text-[#000000] font-medium">
                    بازپرداخت نهایی{" "}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-[12px] text-[#646464] font-medium">
                    69,212,270{" "}
                  </p>
                  <p className="text-[10px] text-[#646464] font-normal">
                    {" "}
                    تومان{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
      <Box
        sx={{ display: { lg: "none", md: "none", xs: "block", sm: "block" } }}
      >
        <div className="rounded-[12px] bg-[#F6F6F6] p-[15px] mt-[10px] mx-[10px]">
          <div className="flex justify-between items-center  p-[15px] bg-[#fff] rounded-[10px] border border-[#EEEEEE]">
            <img src="assests/images/planLoan/bank-saman.svg" alt="" />
            <div className="flex flex-col gap-1">
              <p className="text-[10px] text-[#646464] font-medium">
                تامین کننده
              </p>
              <p className="text-[8px] text-[#4E8AFF] font-normal">
                بانک سامان{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-2 px-[10px]">
            <div className="flex justify-between items-center border-b-[0.5px] py-[15px] border-[#D9D9D9]">
              <div className="flex flex-col items-start">
                <p className="text-[10px] text-[#000000] font-medium">
                  مبلغ هر قسط
                </p>
                <p className="text-[7px] text-[#000000] font-normal">
                  (بدون احتساب هزینه عملیات){" "}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-[10px] text-[#646464] font-medium">
                  3,372,936{" "}
                </p>
                <p className="text-[8px] text-[#646464] font-medium">تومان </p>
              </div>
            </div>
            <div className="flex justify-between items-center border-b-[0.5px] py-[15px] border-[#D9D9D9]">
              <p className="text-[10px] text-[#000000] font-medium">
                پیش پرداخت
              </p>

              <div className="flex items-center gap-1">
                <p className="text-[10px] text-[#646464] font-medium">
                  3,372,936{" "}
                </p>
                <p className="text-[8px] text-[#646464] font-medium">تومان </p>
              </div>
            </div>
            <div className="flex justify-between items-center border-b-[0.5px] py-[15px] border-[#D9D9D9]">
              <p className="text-[10px] text-[#000000] font-medium">سود</p>

              <div className="flex items-center gap-1">
                <p className="text-[10px] text-[#646464] font-medium">22% </p>
              </div>
            </div>
            <div className="flex justify-between items-center border-b-[0.5px] py-[15px] border-[#D9D9D9]">
              <p className="text-[10px] text-[#000000] font-medium">
                ضمانت مورد تایید
              </p>

              <div className="flex items-center gap-1">
                <p className="text-[10px] text-[#646464] font-medium">
                  یک برگ چک صیادی{" "}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center  py-[15px] ">
              <p className="text-[10px] text-[#000000] font-medium">
                بازپرداخت نهایی
              </p>

              <div className="flex items-center gap-1">
                <p className="text-[10px] text-[#646464] font-medium">
                  3,372,936{" "}
                </p>
                <p className="text-[8px] text-[#646464] font-medium">تومان </p>
              </div>
            </div>
          </div>
        </div>
      </Box>

      {/* PArt 3*/}
      <div className="mt-[30px]">
        <div className="relative flex items-center pr-[80px] rounded-[15px]  bg-[#4E8AFF] w-full h-[52px] z-100">
          <div className="flex items-center justify-center w-[36px] h-[36px] absolute top-2 right-[-13px] border-[1.5px] rounded-[10px] text-[#fff] text-[16px] border-[#FFFFFF] bg-[#1B3AAD]">
            3
          </div>
          <div className="flex items-center justify-center w-[36px] h-[36px] absolute top-2 left-[-13px] border-[1.5px] rounded-[10px] text-[#fff] text-[16px] border-[#FFFFFF] bg-[#F16E24]">
            <KeyboardDoubleArrowDownIcon />
          </div>
          <p className="text-[18px] font-bold text-[#fff]">
            پرداخت و دریافت مدارک
          </p>
        </div>
        <div className="lg:flex md:flex justify-around p-[70px] items-center">
          <div className="flex flex-col gap-3">
            <p className="text-[15px] font-semibold text-[#000000]">
              ثـبت اطلاعات کن تا به کالایی که میخواهی نزدیکتر بشی
            </p>
            <p className="text-[12px] text-[#777777] font-semibold">
              فرآیند ثبت سفارش تا دریافت وام حدوداً یک هفته زمان می‌بره! میتونی
              <br /> همین الان کاملاً آنلاین و بدون نیاز به مراجعه حضوری سفارش
              خودت رو ثبت کنی
            </p>
            <div className="flex gap-5 mt-[10px]">
              <Button
                variant="contained"
                sx={{
                  width: "184px",
                  height: "42px",
                  background: "#4E8AFF",
                  borderRadius: "7px",
                  fontSize: "16px",
                  ":hover": { background: "#4E8AFF" },
                }}
              >
                ثبت اطلاعات
              </Button>
              <Button
                variant="outlined"
                sx={{
                  width: "128px",
                  height: "42px",
                  background: "#fff",
                  color: "#4E8AFF",
                  borderRadius: "7px",
                  fontSize: "16px",
                  ":hover": { background: "#fff" },
                }}
              >
                خروج
              </Button>
            </div>
          </div>
          <img src="assests/images/planLoan/part3.svg" alt="" />
        </div>
      </div>
      {/* Frame 2 */}
      <div className="rounded-[20px] bg-[#EDEDED] p-[30px]">
        <div className="flex flex-col bg-[#fff] rounded-[15px] p-[20px]">
          <div className="border rounded-[10px] border-[#EEEEEE] flex flex-col gap-3 items-start p-[15px]">
            <p className="text-[16px] text-[#000000] font-medium">
              راهنمای پیش از درخواست اعتبار
            </p>
            <p className="text-[9px] text-[#646464] font-medium">
              برای ثبت درخواست خود ابتدا بهتر است با مفاهیمی مانند هزینه‌ عملیات
              و اعتبارسنجی <br />
              آشنا شوید. در ادامه نیز فرایند ثبت‌نام خود را تکمیل کنید.
            </p>
          </div>
          <div className="flex flex-col mt-[12px]">
            <div className="flex justify-between items-center border-b-[0.5px] py-[15px] border-[#D9D9D9]">
              <div className="flex flex-col items-start">
                <p className="text-[12px] text-[#000000] font-medium">
                  مبلغ هر قسط
                </p>
                <p className="text-[10px] text-[#000000] font-normal">
                  (بدون احتساب هزینه عملیات){" "}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-[12px] text-[#646464] font-medium">
                  3,372,936{" "}
                </p>
                <p className="text-[12px] text-[#646464] font-medium">تومان </p>
              </div>
            </div>
            <div className="flex justify-between items-center border-b-[0.5px] py-[15px] border-[#D9D9D9]">
              <p className="text-[12px] text-[#000000] font-medium">
                تعداد اقساط
              </p>

              <div className="flex items-center gap-4">
                <p className="text-[12px] text-[#646464] font-medium">
                  3,372,936{" "}
                </p>
                <p className="text-[12px] text-[#646464] font-medium">تومان </p>
              </div>
            </div>
            <div className="flex justify-between items-center border-b-[0.5px] py-[15px] border-[#D9D9D9]">
              <p className="text-[12px] text-[#000000] font-medium">سود</p>

              <div className="flex items-center gap-4">
                <p className="text-[12px] text-[#646464] font-medium">22% </p>
                <p className="text-[12px] text-[#646464] font-medium">بانکی </p>
              </div>
            </div>
            <div className="flex justify-between items-center border-b-[0.5px] py-[15px] border-[#D9D9D9]">
              <p className="text-[12px] text-[#000000] font-medium">
                پیش پرداخت
              </p>

              <div className="flex items-center gap-4">
                <p className="text-[12px] text-[#646464] font-medium">
                  3,372,936{" "}
                </p>
                <p className="text-[12px] text-[#646464] font-medium">تومان </p>
              </div>
            </div>
            <div className="flex justify-between items-center border-b-[0.5px] py-[15px] border-[#D9D9D9]">
              <p className="text-[12px] text-[#000000] font-medium">
                کارمزد ثبت نام
              </p>

              <div className="flex items-center gap-4">
                <p className="text-[12px] text-[#646464] font-medium">
                  3,372,936{" "}
                </p>
                <p className="text-[12px] text-[#646464] font-medium">تومان </p>
              </div>
            </div>
            <div className="flex justify-between items-center border-b-[0.5px] py-[15px] border-[#D9D9D9]">
              <p className="text-[12px] text-[#000000] font-medium">
                کارمزد طرح
              </p>

              <div className="flex items-center gap-4">
                <p className="text-[12px] text-[#646464] font-medium">
                  3,372,936{" "}
                </p>
                <p className="text-[12px] text-[#646464] font-medium">تومان </p>
              </div>
            </div>
            <div className="flex justify-between items-center border-b-[0.5px] py-[15px] border-[#D9D9D9]">
              <p className="text-[12px] text-[#000000] font-medium">
                هزینه زیر ساخت
              </p>

              <div className="flex items-center gap-4">
                <p className="text-[12px] text-[#646464] font-medium">
                  3,372,936{" "}
                </p>
                <p className="text-[12px] text-[#646464] font-medium">تومان </p>
              </div>
            </div>
            <div className="flex justify-between items-center border-b-[0.5px] py-[15px] border-[#D9D9D9]">
              <p className="text-[12px] text-[#000000] font-medium">
                مبلغ بازپرداخت
              </p>

              <div className="flex items-center gap-4">
                <p className="text-[12px] text-[#646464] font-medium">
                  3,372,936{" "}
                </p>
                <p className="text-[12px] text-[#646464] font-medium">تومان </p>
              </div>
            </div>
            <div className="flex justify-between items-center border-b-[0.5px] py-[15px] border-[#D9D9D9]">
              <p className="text-[12px] text-[#000000] font-medium">
                اعتبار سنجی
              </p>

              <div className="flex items-center gap-4">
                <p className="text-[12px] text-[#646464] font-medium">
                  3,372,936{" "}
                </p>
                <p className="text-[12px] text-[#646464] font-medium">تومان </p>
              </div>
            </div>
            <div className="flex justify-between items-center  py-[15px]">
              <p className="text-[12px] text-[#000000] font-medium">
                مبلغ کل تسهیلات
              </p>

              <div className="flex items-center gap-4">
                <p className="text-[12px] text-[#646464] font-medium">
                  3,372,936{" "}
                </p>
                <p className="text-[12px] text-[#646464] font-medium">تومان </p>
              </div>
            </div>
            <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center my-[12px]">
              <div className="flex flex-col gap-3 items-start w-full">
                <div className="flex items-center gap-3">
                  <Checkbox
                    sx={{ width: "7px !important", height: "7px !important" }}
                  />
                  <p className="text-[#646464] text-[10px]">
                    داری دسته چک به نام خودم هستم
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox
                    sx={{ width: "7px !important", height: "7px !important" }}
                  />
                  <p className="text-[#646464] text-[10px]">
                    {" "}
                    مفاهیم را خواندم و قوانین را پذیرفتم
                  </p>
                </div>
              </div>
              <div className="flex gap-5 mt-[10px]">
                <Button
                  variant="outlined"
                  sx={{
                    width: "117px",
                    height: "42px",
                    background: "#fff",
                    color: "#4E8AFF",
                    borderRadius: "7px",
                    fontSize: "12px",
                    ":hover": { background: "#fff" },
                  }}
                >
                  انصراف
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    width: "143px",
                    height: "42px",
                    background: "#4E8AFF",
                    borderRadius: "7px",
                    fontSize: "12px",
                    ":hover": { background: "#4E8AFF" },
                  }}
                >
                  تایید و ادامه
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* import React from "react";
import SwiperPay from "../SwiperPay/SwpierPay";
import CircleIcon from "@mui/icons-material/Circle";
import { Button } from "@mui/material";


export default function Pay() {
  const handleClick = () => {
    window.scrollTo({
      top: window.pageYOffset + 225,
      behavior: "smooth",
    });
  };
  return (
    <div className="container">
      <div className="container flex flex-col  lg:mt-[64px] md:mt-[64px] mt-[32px] lg:py-[64px] lg:px-[64px] md:py-[64px] md:px-[24px] p-[32px_8px_8px] border rounded-[24px] bg-[#fff] overflow-hidden">
        <h2 className="lg:text-[32px] md:text-[32px] text-[20px] font-black text-[#424c5c] text-center">
          طرح‌های اعتباری و اقساط آن
        </h2>
        <div className="lg:px-[136px] ">
          <SwiperPay />
          <div className="lg:flex md:flex grid grid-cols-3 items-center lg:gap-[24px] md:gap-[24px] gap-3 justify-center">
            <div className="flex items-center justify-center lg:px-[24px] md:px-[24px] px-[16px] lg:py-[13px] md:py-[13px] py-[8px] border-[2px] border-[#0040ff] bg-[#f0f5ff] rounded-[8px] lg:text-[14px] md:text-[14px] text-[12px] text-[#0040ff] font-semibold cursor-pointer">
              {" "}
              6 قسط{" "}
            </div>
            <div className="flex items-center justify-center lg:px-[24px] md:px-[24px] px-[16px] lg:py-[13px] md:py-[13px] py-[8px] border-[2px] border-[#6e798d]  rounded-[8px] lg:text-[14px] md:text-[14px] text-[12px] text-[#6e798d] font-semibold cursor-pointer">
              {" "}
             12 قسط{" "}
            </div>
            <div className="flex items-center justify-center lg:px-[24px] md:px-[24px] px-[16px] lg:py-[13px] md:py-[13px] py-[8px] border-[2px] border-[#dee3e7]  rounded-[8px] lg:text-[14px] md:text-[14px] text-[12px] text-[#dee3e7] font-semibold cursor-pointer">
              {" "}
              24 قسط{" "}
            </div>
            <div className="flex items-center justify-center lg:px-[24px] md:px-[24px] px-[16px] lg:py-[13px] md:py-[13px] py-[8px] border-[2px] border-[#dee3e7] rounded-[8px] lg:text-[14px] md:text-[14px] text-[12px] text-[#dee3e7] font-semibold cursor-pointer">
              {" "}
              36 قسط{" "}
            </div>
          </div>
          <div
            onClick={handleClick}
            className="flex items-center justify-center mt-[64px] border-t-[4px] border-[#f2f5f8] relative w-[150%] mr-[-26%] "
          >
            <img
              src="https://www.mydigipay.com/icon-scroll-to.22417e86cdd97cb8.svg"
              alt=""
              className="object-cover h-[40px] z-10 absolute top-[-7px] cursor-pointer"
            />
          </div>
          <div className="mt-[64px] text-[#2c3544] lg:text-[24px] md:text-[24px] text-[14px] font-semibold">
            طرح های موجود بر اساس مبلغ اعتبار انتخابی شما
          </div>
          <div className="mt-[16px] lg:p-8 md:p-8 px-[8px] py-[12px] border-[4px] border-[#F2F5F8] rounded-[16px] bg-[#fff]">
            <div className="flex items-center justify-between mb-[24px] lg:pt-0 md:pt-0 pt-[12px] lg:px-0 md:px-0 px-[8px]">
              <div className="flex items-center gap-[8px] cursor-pointer">
                <img
                  src="/assests/images/logo2.png"
                  alt=""
                  className="w-[24px] h-[24px] object-cover bg-[#6a20ff] rounded-[4px]"
                />
                <div className="lg:text-[16px] md:text-[16px] text-[14px] text-[#0040ff] font-semibold">
                  دیجی‌پی
                </div>
              </div>
              <div className="lg:px-[24px] md:px-[24px] lg:py-[12px] md:py-[12px] px-[16px] py-[8px] text-[#f24024] lg:text-[18px] md:text-[18px] text-[14px] font-semibold bg-[#fff5ee] rounded-[12px]">
                سود سالانه 0%
              </div>
            </div>
            <div className="border-[2px] border-[#dee3e7] rounded-[12px] bg-[#f0f5ff]">
              <div className="flex items-center justify-between pt-[8px] mb-[8px] px-[20px]">
                <div className="flex items-center text-[#424c5c] lg:text-[16px] md:text-[16px] text-[14px] font-medium">
                  <CircleIcon
                    sx={{
                      color: "#424c5c",
                      ml: "16px",
                      width: "6px",
                      height: "6px",
                    }}
                  />
                  مبلغ هر قسط
                </div>
                <div className="text-[#424c5c] lg:text-[20px] md:text-[20px] text-[16px] font-semibold">
                  7٫500٫000 ریال
                </div>
              </div>
              <div className="lg:px-[20px] md:px-[20px] px-[8px] md:pb-[12px] lg:pb-[12px] pb-[8px]">
                <div className="flex items-center justify-between py-[8px] border-t border-[#fff]">
                  <div className="flex items-center text-[#0040ff] lg:text-[16px] md:text-[16px] text-[14px] font-medium underline cursor-pointer">
                    <CircleIcon
                      sx={{
                        color: "#0040ff",
                        ml: "16px",
                        width: "6px",
                        height: "6px",
                      }}
                    />
                    هزینه خدمات و زیرساخت
                  </div>
                  <div className="text-[#424c5c] lg:text-[16px] md:text-[16px] text-[14px] font-bold">
                    0 ریال
                  </div>
                </div>
                <div className="flex items-center justify-between pt-[8px] pb-[4px] border-t border-[#fff]">
                  <div className="flex items-center text-[#0040ff] lg:text-[16px] md:text-[16px] text-[14px] font-medium underline cursor-pointer">
                    <CircleIcon
                      sx={{
                        color: "#0040ff",
                        ml: "16px",
                        width: "6px",
                        height: "6px",
                      }}
                    />
                    کل مبلغ بازپرداخت
                  </div>
                  <div className="text-[#424c5c] lg:text-[16px] md:text-[16px] text-[14px] font-bold">
                    7٫500٫000 ریال
                  </div>
                </div>
              </div>
              <div className="flex lg:flex-row md:flex-row flex-col  justify-between px-[16px] pt-[24px] lg:pb-[24px] md:pb-[24px] pb-[8px] rounded-[11px] bg-[#fff]">
                <div className="flex items-center text-[#2c3544] lg:text-[18px] md:text-[18px] text-[14px] font-semibold lg:pr-[18px] md:pr-[18px] lg:mb-0 md:mb-0 mb-[8px]">
                  {" "}
                  ضمانت: اعتبارسنجی بانکی{" "}
                </div>
                <Button
                  variant="contained"
                  className="noShadow"
                  sx={{
                    height: "48px",
                    p: "16px",
                    color: "#fff",
                    background: "#0040ff",
                    cursor: "pointer",
                    border: "1px solid #0040ff",
                    fontSize: "bold",
                    borderRadius: "12px",
                    ":hover": { background: "#0040ff" },
                  }}
                >
                  شرایط و مدارک مورد نیاز
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 */
