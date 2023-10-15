import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { Button, OutlinedInput, TextField } from "@mui/material";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: '#007C84',
    p: 6,
    borderRadius:"33px"
  };


function Step1() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
        <img src="assests/images/planLoan/wallet-p.svg" alt="" className="lg:h-[222px] h-[180px] object-contain"/>
      </div>
      <div className="flex justify-between items-center pb-[20px] my-[15px] border-b-[2px] border-[#B5B5B5]">
        <div className="flex flex-col">
          <h3 className="lg:text-[32px] md:text-[27px] text-[17px] text-[#6E27A0] font-bold">
           
            شرایط و ثبت نام
          </h3>
          <p className="text-[19px] text-[#787878]">
            ثبت نام در سایت دیجی سا تکمیل مشخصات هویتی
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
          <p className="lg:text-[32px] md:text-[27px] text-[18px] text-[#787878] font-bold">مرحله</p>
          <p className="lg:text-[75px] md:text-[45px] text-[32px] text-[#991890] font-bold">1</p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-[#6E27A0] lg:text-[28px] text-[18px] font-bold">
            مشخصات حقیقی
          </h3>
          <p className="text-[#787878] lg:text-[24px] text-[18px] font-bold">
            مشخصات فردی خود را با دقت پر نمایید
          </p>
        </div>
      </div>
      <div className="border-[2px] rounded-[36px] border-[#707070] border-dashed lg:p-10 md:p-[30px] p-4">
       <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center">
        <div className="grid grid-cols-6 items-center">
          <p className="col-span-1 lg:text-[17px] md:text-[17] text-[15px] text-[#991890]">جنسیت:</p>
          <div className="flex gap-9 col-span-5 items-start">
            <div className="flex gap-1 items-center">
              <input
                type="checkbox"
                id="checkbox"
                className="w-4 h-4 rounded-[50%]"
              />
              <label for="checkbox">مرد</label>
            </div>
            <div className="flex gap-1 items-center">
              <input
                type="checkbox"
                id="checkbox"
                className="w-4 h-4 rounded-[50%]"
              />
              <label for="checkbox">زن</label>
            </div>
          </div></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 mt-[15px]">
          <div className="grid lg:grid-cols-6 grid-cols-1 gap-3 items-center">
            <div className="col-span-1">
              <p className="lg:text-[17px] md:text-[17] text-[15px] text-[#991890] ">نام:</p>
            </div>
            <div className="col-span-5">
              <OutlinedInput
                id="outlined-adornment"
                aria-describedby="outlined-helper-text"
                sx={{width:"100%"}}
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-6 grid-cols-1 gap-3 items-center">
            <div className="col-span-1">
              <p className="lg:text-[17px] md:text-[17] text-[15px] text-[#991890] ">تاریخ تولد:</p>
            </div>
            <div className="col-span-5 ">
              <OutlinedInput
                id="outlined-adornment"
                aria-describedby="outlined-helper-text"
                sx={{width:"100%"}}
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-6 grid-cols-1 gap-3 items-center">
            <div className="col-span-1">
              <p className="lg:text-[17px] md:text-[17] text-[15px] text-[#991890] ">نام خانوادگی:</p>
            </div>
            <div className="col-span-5">
              <OutlinedInput
                id="outlined-adornment"
                aria-describedby="outlined-helper-text"
                sx={{width:"100%"}}
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-6 grid-cols-1 gap-3 items-center">
            <div className="col-span-1">
              <p className="lg:text-[17px] md:text-[17] text-[15px] text-[#991890] ">کد ملی :</p>
            </div>
            <div className="col-span-5">
              <OutlinedInput
                id="outlined-adornment"
                aria-describedby="outlined-helper-text"
                sx={{width:"100%"}}
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-6 grid-cols-1 gap-3 items-center">
            <div className="col-span-1">
              <p className="lg:text-[17px] md:text-[17] text-[15px] text-[#991890] ">شماره همراه :</p>
            </div>
            <div className="col-span-5">
              <OutlinedInput
                id="outlined-adornment"
                aria-describedby="outlined-helper-text"
                sx={{width:"100%"}}
                type="tel"
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-6 grid-cols-1 gap-3 items-center">
            <div className="col-span-1">
              <p className="lg:text-[17px] md:text-[17] text-[15px] text-[#991890] ">استان :</p>
            </div>
            <div className="col-span-5">
              <OutlinedInput
                id="outlined-adornment"
                aria-describedby="outlined-helper-text"
                sx={{width:"100%"}}
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-6 grid-cols-1 gap-3 items-center">
            <div className="col-span-1">
              <p className="lg:text-[17px] md:text-[17] text-[15px] text-[#991890] ">ایمیل:</p>
            </div>
            <div className="col-span-5">
              <OutlinedInput
                id="outlined-adornment"
                aria-describedby="outlined-helper-text"
                sx={{width:"100%"}}
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-6 grid-cols-1 gap-3 items-center">
            <div className="col-span-1">
              <p className="lg:text-[17px] md:text-[17] text-[15px] text-[#991890] "> شهر:</p>
            </div>
            <div className="col-span-5">
              <OutlinedInput
                id="outlined-adornment"
                aria-describedby="outlined-helper-text"
                sx={{width:"100%"}}
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-6 grid-cols-1 gap-3 items-center">
            <div className="col-span-1">
              <p className="lg:text-[17px] md:text-[17] text-[15px] text-[#991890] ">پلاک :</p>
            </div>
            <div className="col-span-5">
              <OutlinedInput
                id="outlined-adornment"
                aria-describedby="outlined-helper-text"
                sx={{width:"100%"}}
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-6 grid-cols-1 gap-3 items-center">
            <div className="col-span-1">
              <p className="lg:text-[17px] md:text-[17] text-[15px] text-[#991890] ">واحد :</p>
            </div>
            <div className="col-span-5">
              <OutlinedInput
                id="outlined-adornment"
                aria-describedby="outlined-helper-text"
                sx={{width:"100%"}}
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-6 grid-cols-1 gap-3 items-center">
            <div className="col-span-1">
              <p className="lg:text-[17px] md:text-[17] text-[15px] text-[#991890] ">طبقه :</p>
            </div>
            <div className="col-span-5">
              <OutlinedInput
                id="outlined-adornment"
                aria-describedby="outlined-helper-text"
                sx={{width:"100%"}}
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-6 grid-cols-1 gap-3 items-center">
            <div className="col-span-1">
              <p className="lg:text-[17px] md:text-[17] text-[15px] text-[#991890] ">کد پستی :</p>
            </div>
            <div className="col-span-5">
              <OutlinedInput
                id="outlined-adornment"
                aria-describedby="outlined-helper-text"
                sx={{width:"100%"}}
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-6 grid-cols-1 gap-3 ">
            <div className="col-span-1">
              <p className="lg:text-[17px] md:text-[17] text-[15px] text-[#991890] ">نشانی:</p>
            </div>
            <div className="col-span-5">
            <TextField
                multiline
                rows={4}
                variant="outlined"
                sx={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-6 grid-cols-1 gap-3 items-center">
            <div className="col-span-1">
              <p className="lg:text-[17px] md:text-[17] text-[15px] text-[#991890] ">رمز عبور:</p>
            </div>
            <div className="col-span-5">
              <OutlinedInput
                id="outlined-adornment"
                aria-describedby="outlined-helper-text"
                sx={{width:"100%"}}
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-6 grid-cols-1 gap-3 items-center">
            <div className="col-span-1">
              <p className="lg:text-[17px] md:text-[17] text-[15px] text-[#991890] ">شماره حساب 
بانک آینده   :</p>
            </div>
            <div className="col-span-5">
              <OutlinedInput
                id="outlined-adornment"
                aria-describedby="outlined-helper-text"
                sx={{width:"100%"}}
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-6 grid-cols-1 gap-3 items-center">
            <div className="col-span-1">
              <p className="lg:text-[17px] md:text-[17] text-[15px] text-[#991890] ">شماره کارت :</p>
            </div>
            <div className="col-span-5">
              <OutlinedInput
                id="outlined-adornment"
                aria-describedby="outlined-helper-text"
                sx={{width:"100%"}}
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-6 grid-cols-1 gap-3 items-center">
            <div className="col-span-1">
              <p className="lg:text-[17px] md:text-[17] text-[15px] text-[#991890] ">شماره شبا  :</p>
            </div>
            <div className="col-span-5">
              <OutlinedInput
                id="outlined-adornment"
                aria-describedby="outlined-helper-text"
                sx={{width:"100%"}}
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-6 grid-cols-1 gap-3 items-center">
            <div className="col-span-1">
              <p className="lg:text-[17px] md:text-[17] text-[15px] text-[#991890] ">نحوه آشنایی  :</p>
            </div>
            <div className="col-span-5">
              <OutlinedInput
                id="outlined-adornment"
                aria-describedby="outlined-helper-text"
                sx={{width:"100%"}}
              />
            </div>
          </div>
        
         
        </div>
        
      </div>
      <div className="flex lg:justify-end justify-center mt-[20px]">
      <Button  onClick={handleOpen} variant="contained" sx={{backgroundColor:"#00AEBA",fontSize:{lg:"24px",md:"21px",xs:"15px",sm:"15px"},borderRadius:"34px","&:hover":{backgroundColor:"#00AEBA"}}}>قبول قوانین ، مقررات و رفتن به مرحله بعدی</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <div className="flex gap-9 items-center">
            <img src="/assests/images/planLoan/logo-w.svg" alt="" className="h-[71px] object-cover"/>
            <p className="text-[#fff] text-[30px] font-bold">قرارداد دریافت تسهیلات در دیجی سا</p>
         </div>
         <div className="p-5 mt-4 bg-[#00AEBA] rounded-[33px]">
            <div className="p-6 bg-white rounded-[18px]">
                <p className="text-[15px] text-[#787878] font-bold">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
            </div>
            <div className="flex justify-between mt-2">
                <img src="/assests/images/planLoan/kaqaz.svg" alt="" />
                <div className="flex items-center gap-4 border-dashed border border-[#B5B5B5] rounded-[34px] p-3">
                    <input type="checkbox" name="" id="" className="w-5 h-5"/>
                    <p className="text-[26px] text-[#fff] font-bold">پذیرفتن قوانین</p>
                </div>
            </div>
         </div>
        </Box>
      </Modal>
      </div>
    </div>
  );
}

export default Step1;
