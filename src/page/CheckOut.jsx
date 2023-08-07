import { Box, Button, Container, FormControl, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material'
import React from 'react'
import DropDown from '../component/DropDown/DropDrown'
import CloseIcon from '@mui/icons-material/Close';

function CheckOut() {
  return (
    <div>
        {/* Header */}
        <div className='flex items-center justify-center lg:h-[90px] h-[60px]'>
            <img src="https://woodmart.xtemos.com/accessories/wp-content/themes/woodmart/images/wood-logo-dark.svg" alt="" className='py-[5px] h-[35px] object-cover' loading='lazy'/>
        </div>
        <Container maxWidth='md'>
        {/* section */}
        <div className=' pt-[40px] px-[15px] w-full'>
        <div className='flex justify-center text-[14px] text-[#242424] mb-[25px]'>
        <p>بازگشت گاسنوز ؟</p>
        <a href="www.google.com" className='text-[#2e6bc6] mr-[5px] border-b-[2px] border-[#2e6bc6]'>برای لاگین اینحا کیلیک کن</a>
        </div>
        <div className='flex justify-center text-[14px] text-[#242424] mb-[25px]'>
        <p>بازگشت گاسنوز ؟</p>
        <a href="www.google.com" className='text-[#2e6bc6] mr-[5px] border-b-[2px] border-[#2e6bc6]'>برای وارد کردن کد خود اینجا را کلیک کنید</a>
        </div>
        <div className='flex flex-col items-center justify-center h-[99.4px] text-[14px] rounded-[10px] bg-[#2e6bc60a] p-[30px] mb-[30px]'>
            <div className='flex'>
                 <p className='text-[#777777]'>ادد</p>
            <span className='text-[#2e6bc6] mx-[3px]'>77</span>
            <p className='text-[#777777]'>اسنقدز به کارت اضلهص</p>
            </div>
           
            <div className='mt-[10px] h-[7px] rounded-[8px] bg-[#2e6bc6] w-[15%]'>
                
            </div>
        </div>
        {/* shomare 1 */}
        <div className='flex flex-col justify-center items-center mb-[30px]'>
            <p className='lg:text-[120px] md:text-[80px] text-[40px] h-[50px] md:h-[90px] text-[#2e6bc6] mb-[10px] lg:h-[130px]'>1.</p>
            <p className='text-[#242424] lg:text-[46px] text-[22px]'>جزئیات صورتحساب</p>
        </div>
        <form action="">
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 mb-[20px]'>
            <div className='flex flex-col text-[14px] text-[#242424]'>
              <label htmlFor="" className='mb-[5px]'>نام *</label>
             <input type="text" className='h-[42px] w-full px-[15px] border rounded-[8px]'/>
            </div>
            <div className='flex flex-col text-[14px] text-[#242424]'>
              <label htmlFor="" className='mb-[5px]'>نام خانوادگی *</label>
             <input type="text" className='h-[42px] w-full px-[15px] border rounded-[8px]'/>
            </div>
            <div className='flex flex-col text-[14px] text-[#242424]'>
              <label htmlFor="" className='mb-[5px]'>تلفن *</label>
             <input type="tel" className='h-[42px] w-full px-[15px] border rounded-[8px]'/>
            </div>
            <div className='flex flex-col text-[14px] text-[#242424]'>
              <label htmlFor="" className='mb-[5px]'>ایمیل  *</label>
             <input type="email" className='h-[42px] w-full px-[15px] border rounded-[8px]'/>
            </div>
            <div className='flex flex-col text-[14px] text-[#242424]'>
              <label htmlFor="" className='mb-[5px]'>ایمیل  *</label>
            <DropDown/>
            </div>
            <div className='flex flex-col text-[14px] text-[#242424]'>
              <label htmlFor="" className='mb-[5px]'>شهر / کشور  *</label>
             <input type="email" className='h-[42px] w-full px-[15px] border rounded-[8px]'/>
            </div>
            <div className='flex flex-col text-[14px] text-[#242424]'>
              <label htmlFor="" className='mb-[5px]'>آدرس *</label>
             <input type="tel" className='h-[42px] w-full px-[15px] border rounded-[8px]'/>
            </div>
            <div className='flex flex-col text-[14px] text-[#242424]'>
              <label htmlFor="" className='mb-[5px]'>کدپستی  *</label>
             <input type="email" className='h-[42px] w-full px-[15px] border rounded-[8px]'/>
            </div>
             
          </div>
         
        </form>
        <div className='mb-[20px]'>

      
        <div className='flex items-center text-[14px] text-[#242424] mb-[5px]'>
          <input type="checkbox" className='ml-[5px]'/>
          <p>کریت اکانت؟</p>
        </div>
        <div className='flex items-center text-[14px] text-[#242424] mb-[5px]'>
          <input type="checkbox" className='ml-[5px]'/>
          <p>به آدرس دیگری ارسال شود؟ </p>
        </div>  </div>
        <div className='mb-[20px]'>
          <div className='mb-[5px] text-[14px] text-[#242424]'>
              <label htmlFor="" >یادداشت ها را سفارش دهید</label>
          </div>
      
          <TextField
                  id="outlined-multiline-flexible"
                  label=""
                  placeholder='نکاتی در مورد سفارش شما، به عنوان مثال یادداشت های ویژه برای تحویل'
                  multiline
                  rows={7}
                  sx={{ width: "100%" }}
                />
        </div>
        {/* shomare 2 */}
        <div className='flex flex-col justify-center items-center mb-[30px]'>
            <p className='lg:text-[120px] md:text-[80px] text-[40px] h-[50px] md:h-[90px] text-[#2e6bc6] mb-[10px] lg:h-[130px]'>2.</p>
            <p className='text-[#242424] lg:text-[46px] text-[22px]'>سفارش خود را بررسی کنید </p>
        </div>
        <div className='px-[30px] py-[20px] border rounded-[10px] mb-[40px]'>
          <div className='flex justify-between border-b-[2px] text-[16px] text-[#242424]'>
            <p className='p-[15px]'>محصولات</p>
            <p className='p-[15px] lg:block md:block sm:block hidden'>توتال</p>
          </div>
          <div className='flex lg:flex-row md:flex-row flex-col justify-between lg:items-center px-[12px] py-[15px] border-b-[2px]'>
            <div className='flex items-center'>
              <CloseIcon sx={{color:"#333",width:"25px",height:"25px"}}/>
              <img src="https://woodmart.xtemos.com/accessories/wp-content/uploads/sites/7/2022/09/green-case-back.jpg" alt="" className='h-[74px] object-cover ml-[10px]'/>
              <div className='flex flex-col justify-between h-full gap-3'>
                <p className='text-[14px] text-[#777777] ml-[5px]'>iPhone 12 Pro Moment Case – Olive</p>
                <div className="flex items-center justify-between w-[80px] border rounded-[8px] h-[32px]">
                <div className="flex items-center justify-center px-[7px] h-full ">
                  <p>-</p>
                </div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="1"
                  className="w-[30px] h-full pr-[15px] border"
                />
                <div className="flex items-center justify-center px-[7px]  h-full ">
                  <p>+</p>
                </div>
              </div>
              </div>
            </div>
            <p className='text-[14px] text-[#777777] lg:mr-0 md:mr-0 mr-[50px] lg:mt-0 md:mt-0 mt-[10px]'> 200.0IRR</p>
          </div>
          <div className='flex justify-between border-b-[2px] text-[14px] text-[#242424]'>
            <p className='py-[15px] px-[10px]'>محصولات</p>
            <p className='py-[15px] px-[10px] text-[#2e6bc6]'>200ریال</p>
          </div>
          <div className='flex justify-between items-center border-b-[2px] text-[14px] text-[#242424]'>
            <p className='py-[15px] px-[10px]'>محصولات</p>
            <div className='px-[12px] py-[15px] '>
            <FormControl>
      <RadioGroup
      sx={{fontSize:"14px !important"}}
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel    value="نرخ ثابت" control={<Radio/>} label="نرخ ثابت" />
        <FormControlLabel value="نرخ ثابت  " control={<Radio/>} label="نرخ ثابت" />
        <FormControlLabel value="نرخ ثابت " control={<Radio />} label="نرخ ثابت " />
      </RadioGroup>
    </FormControl>
            </div>
            
          </div>
          <div className='flex justify-between items-center text-[14px] text-[#242424]'>
            <p className='py-[15px] px-[10px]'>مجموع</p>
            <p className='py-[15px] px-[10px] text-[22px] text-[#2e6bc6]'>200ریال</p>
          </div>
        </div>
        {/* Shomare 3 */}
        <div className='flex flex-col justify-center items-center mb-[30px]'>
            <p className='lg:text-[120px] md:text-[80px] text-[40px] h-[50px] md:h-[90px] text-[#2e6bc6] mb-[10px] lg:h-[130px]'>3.</p>
            <p className='text-[#242424] lg:text-[46px] text-[22px]'>  اطلاعات پرداخت </p>
        </div>
        <div className='p-[30px] border-[4px] border-[#2e6bc652] rounded-[10px] mb-[40px]'>
          <div className='flex text-[14px] text-[#242424]'>
            <input type="checkbox" className='ml-[5px]'/>
            <p>ی متنی بی ربط</p>
          </div>
          <Box sx={{boxShadow:"1px 1px 2px rgba(0,0,0,0.05)"}} className='mt-[15px] p-[15px] text-[14px] text-[#777777] border rounded-[8px]'>
        <p>  پرداخت خود را مستقیماً به حساب بانکی ما انجام دهید. لطفا از شناسه سفارش خود به عنوان مرجع پرداخت استفاده کنید. سفارش شما تا زمانی که وجوه در حساب ما تسویه نشده باشد ارسال نخواهد شد.</p>
          </Box>
          <div className='mt-[15px] border-b mb-[20px] pb-[20px]'>
          <FormControl>
      <RadioGroup
      sx={{fontSize:"14px !important"}}
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel    value="نرخ ثابت" control={<Radio/>} label="نرخ ثابت" />
        <FormControlLabel value="و نرخ ثابت" control={<Radio/>} label=" نرخ ثابت " />
        <FormControlLabel value=" نرخ ثابت" control={<Radio />} label=" نرخ ثابت" />
      </RadioGroup>
    </FormControl>
          </div>
          <div className='text-[14px] text-[#777777] mb-[20px]'>
            <p>اطلاعات شخصی شما برای پردازش سفارش شما، پشتیبانی از تجربه شما در سراسر این وب سایت و برای اهداف دیگری که در ما توضیح داده شده است، استفاده خواهد شد <span className='font-semibold'>سیاست حفظ حریم خصوصی</span></p>
           
          </div>
          <Button variant="contained" sx={{backgroundColor:"#2e6bc6",width:"100%",height:"42px"}}>ثبت سفارش</Button>
        </div>
        </div>
        </Container>
    </div>
  )
}

export default CheckOut