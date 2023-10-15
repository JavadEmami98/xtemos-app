import React from 'react'
import CircleIcon from "@mui/icons-material/Circle";
import { Button } from '@mui/material';

function Step3() {
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
          دریافت نوبت احراز هویت
          </h3>
          <p className="text-[19px] text-[#787878]">
          دریافت نوبت جهت احراز هویت
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
           3
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-[#6E27A0] lg:text-[28px] text-[18px] font-bold">
          دریافت نوبت برای احراز سنجی
          </h3>
          <p className="text-[#787878] lg:text-[24px] text-[18px] font-bold">
          انتخاب زمان ، همه روزه بجز روزهای تعطیل میسر می باشد 
          </p>
        </div>
      </div>
      <div className="lg:w-[90%] relative border-[2px] rounded-[36px] border-[#707070] border-dashed lg:p-10 md:p-[30px] p-4">
            <img src="assests/images/planLoan/taghvim.svg" alt="" />
            <div className='flex flex-col gap-4 absolute left-[-100px] bottom-[100px]'>
                <div className='flex flex-col relative rounded-[20px] bg-[#991890] text-white p-4'>
                    <p className='pb-2 text-[21px] border-b border-dashed'> انتخاب شده  تاریخ </p>
                    <div className='flex gap-9 justify-between py-2 border-b border-dashed'>
                        <p className='text-[21px] font-bold'>یکشنبه</p>
                        <p className='text-[21px] font-bold'> 20/02/1402</p>
                    </div>
                    <p className='py-2 text-[24px]'> زمان مراجعه ساعت 13 تا 16 .    </p>
                    <img src="assests/images/planLoan/saat.svg" alt="" className='absolute top-[-40px] left-[-40px]'/>
                </div>
                <Button
          variant="contained"
          sx={{
            fontSize: { lg: "24px", md: "19px", sm: "17px", xs: "17px" },
            borderRadius: "34px",
            backgroundColor: "#00AEBA",
            height: "67px",
            "&:hover": { background: "#00AEBA" },
          }}
        >
          انتخاب زمان
        </Button>
            </div>
      </div>
    </div>
  )
}

export default Step3