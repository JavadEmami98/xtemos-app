import React from 'react'
import { TextareaAutosize } from '@mui/base';
import { Button } from '@mui/material';

function ContactUs() {
  return (
    <div className='container'>
        {/* form */}
    <div className=' mt-[50px] rounded-[0.5rem] mb-[20px] border shadow-[0_0_6px_0_rgba(0,0,0,.16)]'>
        <div className='grid lg:grid-cols-5 grid-cols-1 lg:gap-2 gap-10 lg:p-0 p-6 '>
            <div className='lg:col-span-3 col-span-1'>
                <div className='flex flex-col items-center justify-center h-full'>
                  <p className='lg:text-[20px] text-[16px] text-[#B0882C]'>این فرم را تکمیل کنید و با ما در تماس باشید</p>
                 <img src="https://www.technolife.ir/image/contact.PNG" alt="" loading='lazy'/> 
                </div>
           
            </div>
            <div className='lg:col-span-2 col-span-1'>
                <div className='flex flex-col gap-[42px] lg:p-[16px] p-0'>
                    <div>
                         <label htmlFor="" className='text-[16px] text-[#000000]'>
                        نام و نام خانوادگی
                    </label>
                    <input type="text" name="" id="" className='h-[36px] mt-[8px] w-full rounded-md py-1 px-[16px] border outline-none'/>
                    </div>
                    <div>
                         <label htmlFor="" className='text-[16px] text-[#000000]'>
                         شماره موبایل
                    </label>
                    <input type="tel" name="" id="" className='h-[36px] mt-[8px] w-full rounded-md py-1 px-[16px] border outline-none'/>
                    </div>
                    <div className='flex flex-col gap-2'>
                    <label htmlFor="" className='text-[16px] text-[#000000]'>
                    پیامتان را اینجا بنویسید
                    </label>
                         <TextareaAutosize
                    style={{padding:"16px",borderRadius:"6px",border:"1px solid #e5e7eb"}}
                     aria-label="minimum height"
                      minRows={1.5}
 
                        />
                    </div>
                    <Button variant="contained" sx={{backgroundColor:"#1E3B58",height:"40px",color:"#FFF",borderRadius:"8px",fontSize:"18.4px",":hover":{backgroundColor:"#1E3B58"}}}>
                    پیام را بفرستید
                    </Button>
                </div>
            </div>
        </div>
        
    </div>
    {/* text */}
    <div className='rounded-[0.5rem] mb-[20px] border lg:p-[20px] px-[16px] text-[14.4px] lg:text-[1.1rem] leading-[2.1875] text-[#666] shadow-[0_0_6px_0_rgba(0,0,0,.16)]'>
        <h3>
            <strong> ارتباط با مرکز تماس زیترو: </strong>
        </h3>
        <span>شماره تلفن مرکز تماس زیترو:</span>
        <p className='text-[#198cff]'> 1777 30 91 - ۰۲۱</p>
        <span>زیترو  از روز شنبه الی چهارشنبه ساعت ۱۰ صبح الی ۱۸ بعدازظهر
و روز پنجشنبه ساعت ۱۰ صبح الی ۱۴ بعدازظهر
( به جز ایام تعطیل رسمی )</span>
<p>&nbsp;</p>
<h3>
            <strong> آدرس زیترو : </strong>
        </h3>
        <p>
            <strong>تهران - صندوق پستی ۱۵۱۶۷۴۵۴۰۵ </strong>
            (ارقام صندوق پستی ۹ رقم است)
        </p>
        <p>کلیه بسته‌های ارسالی و محصولاتی که قرار است از خدمات پس از فروش استفاده کنند را  
            <span className='text-[#ee5a66]'>صرفا به صندوق پستی   </span>
            ارسال فرمایید.
        </p>
        <p>&nbsp;</p>
        <p>آدرس ساختمان مرکزی زیترو: تهران، کاوسیه ،چهاراه جهان کودک ،خ شهیدی کوچه ،سپر پلاک ۱۷ ،طبقه پنجم ۴۱۰۰</p>
        <p>&nbsp;</p>
        <p className='border'></p>
        <p>&nbsp;</p>
        <h3>
            <strong> فروشگاه زیترو: </strong>
        </h3>
        <p>
        <p>آدرس:تهران،خیابان جمهوری تقاطع حافظ، پاساژ چارسو، طبقه 1- ، غرفه A62 زیترو </p>
        <a href="https://goo.gl/maps/Aj2co268B6QCnx3Y9" target="_blank">
            <strong className='text-[#198cff]'>(نمایش در نقشه) </strong>
        </a>
       </p>
       <p>
            <span>ساعات کاری:‌ </span>
            <span className='font-bold'> کل روزهای هفته از ساعت 10 الی 21
</span>
        </p>
       <p>&nbsp;</p>
       <h3>
            <strong> دفتر خدمات و تعمیرات: </strong>
        </h3>
        <p>آدرس: تهران،خیابان جمهوری تقاطع حافظ، پاساژ چارسو، طبقه 1- ، پلاک A33 ۴</p>
        <p>
            <span>شماره تماس  خدمات پس از فروش:‌</span>
            <strong className='text-[#198cff]'>&nbsp; 1680 17 66 - ۰۲۱</strong>
        </p>
        <p>
            <span>شماره تماس     تعمیرات:‌</span>
            <strong className='text-[#198cff]'>&nbsp;1680 17 66 - ۰۲۱</strong>
        </p>
        <p>
            <span>ساعات کاری:‌ </span>
            <span className='font-bold'>از روز شنبه الی چهارشنبه ساعت ۱۰ صبح الی ۱۸ بعدازظهر
و روز پنجشنبه ساعت ۱۰ صبح الی ۱۵ بعدازظهر</span>
        </p>
       
    </div>
    </div>
  )
}

export default ContactUs
