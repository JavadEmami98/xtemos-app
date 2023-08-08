import { Button } from '@mui/material'
import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function LoginPassword() {
  return (
    <div className='flex items-center justify-center w-full h-[100vh] relative'>
          <ArrowForwardIcon sx={{position:"absolute",top:10,right:5,display:{md:"block",sm:'block',xs:"block",lg:"none"}}}/>
        <div className='flex flex-col  lg:w-[400px] w-full lg:p-[32px] p-[15px] lg:border border-[#e0e0e6] rounded-[8px]'>
            <div className='flex items-center justify-center h-[40px] relative w-full'>
                  <img src="https://a6n4d3q9.rocketcdn.me/accessories/wp-content/themes/woodmart/images/wood-logo-dark.svg" alt="" className='h-[40px] object-cover'/>
                <ArrowForwardIcon sx={{position:"absolute",top:2,right:-3,display:{md:"none",sm:'none',xs:"none",lg:"block"}}}/>
            </div>
          
            <h1 className='lg:text-[19px] text-[16px] text-[#080a38] mt-[16px] font-bold'> کد تایید را وارد کنید </h1>
            <p className='lg:text-[12px] text-[11px] text-[#3f4064] my-[16px] leading-9'>کد تایید برای شماره ۰۹۱۵۳55۹۵۹۹ پیامک شد</p>
            <input type="text" className='h-[48px] w-full px-[8px] rounded-[8px] outline-none border'/>
            <div className='flex items-center  mt-[16px]'>
            <p className='text-[#19bfd3] text-[12px]'>ورود با رمز عبور </p>
                <ArrowBackIosIcon sx={{p:"5px",color:"#19bfd3"}}/>
            </div>
            <div className='flex justify-center items-center mt-[16px] mb-[24px] lg:text-[11px] text-[10px]'>
                <p>دریافت مجدد کد از طریق</p>
            </div>
            <Button
                variant="contained"
                sx={{ width: "full", height: "48px", background: "#2e6bc6",mt:"16px",borderRadius:"8px",boxShadow:"none" }}
              >
                تایید
              </Button>
        </div> 
    </div>
  )
}

export default LoginPassword