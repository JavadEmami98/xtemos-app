import React from "react";
/* import SwiperPay from "../component/SwiperPay/SwpierPay"; */
import CircleIcon from '@mui/icons-material/Circle';
import { Button } from "@mui/material";

function Pay() {
  return (
    <>
    <div className="container flex flex-col  lg:mt-[64px] md:mt-[64px] mt-[32px] lg:py-[64px] lg:px-[64px] md:py-[64px] md:px-[24px] p-[32px_8px_8px] border rounded-[24px] bg-[#fff]">
      <h2 className="lg:text-[32px] md:text-[32px] text-[20px] font-black text-[#424c5c] text-center">
        طرح‌های اعتباری و اقساط آن
      </h2>
      <div className="lg:px-[136px] ">
      {/*    <SwiperPay /> */}
      <div className="mt-[64px] text-[#2c3544] lg:text-[24px] md:text-[24px] text-[14px] font-semibold">
      طرح های موجود بر اساس مبلغ اعتبار انتخابی شما
      </div>
      <div className="mt-[16px] lg:p-8 md:p-8 px-[8px] py-[12px] border-[4px] border-[#F2F5F8] rounded-[16px] bg-[#fff]">
        <div className="flex items-center justify-between mb-[24px] lg:pt-0 md:pt-0 pt-[12px] lg:px-0 md:px-0 px-[8px]">
          <div className="flex items-center gap-[8px] cursor-pointer">
            <img src="/images/logo" alt="" className="w-[24px] h-[24px] object-cover bg-[#6a20ff] rounded-[4px]"/>
            <div className="lg:text-[16px] md:text-[16px] text-[14px] text-[#0040ff] font-semibold">دیجی‌پی</div>
            </div>
            <div className="lg:px-[24px] md:px-[24px] lg:py-[12px] md:py-[12px] px-[16px] py-[8px] text-[#f24024] lg:text-[18px] md:text-[18px] text-[14px] font-semibold bg-[#fff5ee] rounded-[12px]">
            سود سالانه 0%
            </div>
        </div>
        <div className="border-[2px] border-[#dee3e7] rounded-[12px] bg-[#f0f5ff]">
          <div className="flex items-center justify-between pt-[8px] mb-[8px] px-[20px]">
            <div className="flex items-center text-[#424c5c] lg:text-[16px] md:text-[16px] text-[14px] font-medium">
                <CircleIcon sx={{color:"#424c5c",ml:"16px",width:"6px",height:"6px"}}/>
                مبلغ هر قسط
            </div>
            <div className="text-[#424c5c] lg:text-[20px] md:text-[20px] text-[16px] font-semibold">
            7٫500٫000 ریال
            </div>
          </div>
          <div className="lg:px-[20px] md:px-[20px] px-[8px] md:pb-[12px] lg:pb-[12px] pb-[8px]">
            <div className="flex items-center justify-between py-[8px] border-t border-[#fff]">
            <div className="flex items-center text-[#0040ff] lg:text-[16px] md:text-[16px] text-[14px] font-medium underline cursor-pointer">
                <CircleIcon sx={{color:"#0040ff",ml:"16px",width:"6px",height:"6px"}}/>
                هزینه خدمات و زیرساخت 
            </div>
            <div className="text-[#424c5c] lg:text-[16px] md:text-[16px] text-[14px] font-bold">
            0 ریال
            </div>
            </div>
            <div className="flex items-center justify-between pt-[8px] pb-[4px] border-t border-[#fff]">
            <div className="flex items-center text-[#0040ff] lg:text-[16px] md:text-[16px] text-[14px] font-medium underline cursor-pointer">
                <CircleIcon sx={{color:"#0040ff",ml:"16px",width:"6px",height:"6px"}}/>
                کل مبلغ بازپرداخت 
            </div>
            <div className="text-[#424c5c] lg:text-[16px] md:text-[16px] text-[14px] font-bold">
            7٫500٫000 ریال
            </div>
            </div>
          
          </div>  
          <div className="flex lg:flex-row md:flex-row flex-col  justify-between px-[16px] pt-[24px] lg:pb-[24px] md:pb-[24px] pb-[8px] rounded-[11px] bg-[#fff]">
              <div className="flex items-center text-[#2c3544] lg:text-[18px] md:text-[18px] text-[14px] font-semibold lg:pr-[18px] md:pr-[18px] lg:mb-0 md:mb-0 mb-[8px]"> ضمانت: اعتبارسنجی بانکی </div>
              <Button variant="contained" sx={{height:"48px",p:"16px",color:"#fff",background:"#0040ff",cursor:"pointer",border:"1px solid #0040ff",fontSize:"bold",borderRadius:"12px",":hover":{background:"#0040ff"}}}>شرایط و مدارک مورد نیاز</Button>
            </div>
        </div>
      </div>
      </div>
      
    </div></>
  );
}

export default Pay;
