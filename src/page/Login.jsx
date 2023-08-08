import { Button } from '@mui/material'
import React from 'react'

function Login() {
  return (
    <div className='flex items-center justify-center w-full h-[100vh]'>
        <div className='flex flex-col  lg:w-[400px] w-full lg:p-[32px] p-[15px] lg:border border-[#e0e0e6] rounded-[8px]'>
            <div className='flex items-center justify-center h-[40px]'>
                  <img src="https://a6n4d3q9.rocketcdn.me/accessories/wp-content/themes/woodmart/images/wood-logo-dark.svg" alt="" className='h-[40px] object-cover'/>
            </div>
          
            <h1 className='lg:text-[19px] text-[16px] text-[#080a38] mt-[16px]'>ورود | ثبت‌نام</h1>
            <p className='lg:text-[12px] text-[11px] text-[#3f4064] mt-[16px] leading-9'> سلام! </p>
            <p className='lg:text-[12px] text-[11px] text-[#3f4064] mb-[16px]'> لطفا شماره موبایل یا ایمیل خود را وارد کنید </p>
            <input type="text" className='h-[48px] w-full px-[8px] rounded-[8px] outline-none border'/>
            <Button
                variant="contained"
                sx={{ width: "full", height: "48px", background: "#2e6bc6",mt:"32px",borderRadius:"8px",boxShadow:"none" }}
              >
                ورود
              </Button>
              <p className='text-[11px] text-[#3f4064] mt-[16px] leading-9'> ورود شما به معنای پذیرشورود ! </p>
        </div> 
    </div>
  )
}

export default Login