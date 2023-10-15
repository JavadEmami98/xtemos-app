import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { Button } from "@mui/material";

function Step2() {
  return (
    <div className="lg:p-7 md:p-6 p-3">
      <div className="flex lg:flex-row md:flex-col flex-col justify-between">
        <div className="flex flex-col gap-3">
          <img
            src="assests/images/planLoan/dgso-logo.svg"
            alt=""
            className="object-cover h-[71px] w-[145px]"
          />
          <h3 className="lg:text-[32px] md:text-[27px] text-[18px] text-[#787878] font-bold">
            درکوتاه ترین زمان و بهترین قیمت اقساطی خرید کن
          </h3>
          <p className="lg:text-[23px] text-[15px] text-[#6E27A0] font-bold">
            با توجه به محدود بودن منابع مالی ،همین حالا برای ثبت نام اقدام کنید
          </p>
        </div>
        <img
          src="assests/images/planLoan/wallet-p.svg"
          alt=""
          className="lg:h-[222px] h-[180px] object-contain"
        />
      </div>
      <div className="flex justify-between items-center pb-[20px] my-[15px] border-b-[2px] border-[#B5B5B5]">
        <div className="flex flex-col">
          <h3 className="lg:text-[32px] md:text-[27px] text-[17px] text-[#6E27A0] font-bold">
            پرداخت کارمزد
          </h3>
          <p className="text-[19px] text-[#787878]">
            پرداخت کارمزد تسهیلات درخواستی
          </p>
        </div>
        <div className="flex gap-4">
          <CircleIcon
            sx={{ width: "20px", height: "20px", color: "#991890" }}
          />
          <CircleIcon
            sx={{ width: "20px", height: "20px", color: "#B5B5B5" }}
          />
          <CircleIcon
            sx={{ width: "20px", height: "20px", color: "#B5B5B5" }}
          />
          <CircleIcon
            sx={{ width: "20px", height: "20px", color: "#B5B5B5" }}
          />
        </div>
      </div>
      <div className="flex gap-5 items-center my-[10px] ">
        <div className="flex items-center border-l-[2px] border-[#707070] pl-[15px]">
          <p className="lg:text-[32px] md:text-[27px] text-[18px] text-[#787878] font-bold">
            مرحله
          </p>
          <p className="lg:text-[75px] md:text-[45px] text-[32px] text-[#991890] font-bold">
            2
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-[#6E27A0] lg:text-[28px] text-[18px] font-bold">
            پرداخت کارمزد تسهیلات
          </h3>
          <p className="text-[#787878] lg:text-[24px] text-[18px] font-bold">
            در صورت عدم تایید از سمت بانک ، وجه کارمزد به شما عودت داده خواهد شد
          </p>
        </div>
      </div>
      <div className="relative flex  gap-5 lg:w-[95%] w-full items-center border-[2px] my-[30px] rounded-[36px] border-[#707070] border-dashed lg:p-10 md:p-[30px] p-8">
        <div className="flex gap-9 items-center">
          <img src="assests/images/planLoan/bank.svg" alt="" />
          <div className="flex flex-col gap-5">
            <p className="lg:text-[24px] text-[16px] text-[#787878] font-bold">
              تاریخ پرداخت : 01/01/1402
            </p>
            <p className="lg:text-[24px] text-[16px] text-[#787878] font-bold">
              شرح پرداخت : پرداخت کارمزد تسهیلات
            </p>
          </div>
        </div>
        <Button
          variant="contained"
          sx={{
            position: "absolute",
            bottom: { lg: "auto", md: -35, sm: -35, xs: -35 },
            right: { lg: -80 },
            fontSize: { lg: "24px", md: "19px", sm: "17px", xs: "17px" },
            borderRadius: "34px",
            backgroundColor: "#00AEBA",
            height: "67px",
            width: "170px",
            "&:hover": { background: "#00AEBA" },
          }}
        >
          پرداخت
        </Button>
      </div>
      <div className="flex lg:flex-row md:flex-row flex-col gap-5 items-center py-[20px]">
        <p className="text-[21px] text-[#B5B5B5] font-bold">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
        <Button
          variant="contained"
          sx={{
            fontSize: "24px",
            borderRadius: "34px",
            backgroundColor: "#B5B5B5",
            height: "67px",
            width: "100%",
            "&:hover": { background: "#B5B5B5" },
          }}
        >
          دانلود مدارک
        </Button>
      </div>
    </div>
  );
}

export default Step2;
