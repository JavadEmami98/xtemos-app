import React, { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import { Avatar, Button, Rating, TextField, Tooltip } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SwiperProduct from "../SwiperProduct/SwiperProduct";
import ViewCompactAltOutlinedIcon from '@mui/icons-material/ViewCompactAltOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

function ProductDetail() {
  const [showContent, setShowContent] = useState(false);

  const handleButtonClick = () => {
    setShowContent(!showContent);
  };

  return (
    <div>
      <div className="flex items-center justify-between px-[15px] mb-[20px]">
        <div className="flex items-center text-[14px] text-[#777777]">
          <p className="ml-[6px]">خانه /</p>
          <p className="ml-[6px]">قاب /</p>
          <p className="ml-[6px]">آیفون /</p>
          <p className="text-[#333333] font-semibold">
					iPhone 12 Pro Moment Case – Olive				</p>
        </div>
        <div className="lg:block hidden item-center cursor-pointer relative">
         <ArrowForwardIosOutlinedIcon className="arrow-icon-img" sx={{width:"20px",height:"20px",color:"#242424",ml:"5px",p:"3px"}}/>
         <div className="icon-img flex items-center absolute mt-[15px] z-10 left-0 top-5 rounded-[8px] min-w-[240px] border bg-[#fff] shadow-[0 0 3px rgba(0,0,0,.15)]">
          <img src="https://a6n4d3q9.rocketcdn.me/accessories/wp-content/uploads/sites/7/2022/09/dark-case-back-430x491.jpg.webp" alt="" loading="lazy" className="h-[103px] object-cover"/>
          <div className="flex flex-col gap-4 justify-between py-[10px] px-[15px] h-full w-full">
            <p className="text-[#242424]">آیفون پرو 12</p>
            <p className="text-[#2e6bc6]">225IRR</p>
          </div>
           </div>
        <ViewCompactAltOutlinedIcon sx={{width:"20px",height:"20px",color:"#242424"}}/>
         <ArrowBackIosNewOutlinedIcon className="arrow-icon-img" sx={{width:"20px",height:"20px",color:"#242424",mr:"5px",p:"3px"}}/>
         <div className="icon-img flex items-center absolute mt-[15px] z-10 left-0 top-5 rounded-[8px] min-w-[240px] border bg-[#fff] shadow-[0 0 3px rgba(0,0,0,.15)]">
          <img src="https://a6n4d3q9.rocketcdn.me/accessories/wp-content/uploads/sites/7/2022/09/yellow-case-back-430x491.jpg.webp" alt="" loading="lazy" className="h-[103px] object-cover"/>
          <div className="flex flex-col gap-4 justify-between py-[10px] px-[15px] h-full w-full">
            <p className="text-[#242424]">آیفون پرو  زرد12</p>
            <p className="text-[#2e6bc6]">500IRR</p>
          </div>
           </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col  pb-[40px] border-b">
        {/* Right - Product detail */}
        <div className="flex flex-col px-[15px] ml-[5px] w-full lg:order-1 order-2">
          <div className="flex lg:flex-row md:flex-row flex-col lg:items-center md:items-center justify-between flex-wrap gap-3">
            <div className="text-[20px] md:text-[24px] lg:text-[34px] text-[#333333] font-semibold">
              <p>کیس سیلیکون آیفون جدید </p>
            </div>
            <div className="lg:h-[64px] h-[53px] lg:w-[100px] w-[80px] border rounded-[8px] p-[10px]">
              <img
                src="https://a6n4d3q9.rocketcdn.me/accessories/wp-content/uploads/sites/7/2022/04/w-accessories-brand-6.png.webp"
                alt=""
                className="object-cover"
              />
            </div>
          </div>
          <div className="text-[#2e6bc6] text-[18px] lg:text-[28px] mb-[10px]">
            <p>99.00</p>
          </div>
          <div className="flex items-center h-[45px] text-[14px] text-[#242424] mb-[20px]">
            <p className="pl-[20px]">رنگ:</p>
            <div className="flex items-center gap-3">
              <Tooltip 
               title="مشکی"
              placement="top"
               sx={{ fontSize: "12px", color: "#242424 !important"}}
               arrow
               >
              <div className="flex items-center justify-center w-[45px] h-[45px]  border rounded-[8px] cursor-pointer">
                <img
                  src="https://a6n4d3q9.rocketcdn.me/accessories/wp-content/uploads/sites/7/2022/08/w-accessories-product-link-1-1.jpg.webp"
                  alt=""
                  className="object-cover h-[37px] w-[37px]"
                />
              </div>
              </Tooltip>
              <Tooltip 
               title="زرد"
              placement="top"
               sx={{ fontSize: "12px", color: "#242424 !important"}}
               arrow
               >
              <div className="flex items-center justify-center w-[45px] h-[45px]  border rounded-[8px] cursor-pointer">
                <img
                  src="https://a6n4d3q9.rocketcdn.me/accessories/wp-content/uploads/sites/7/2022/09/yellow-case-back.jpg.webp"
                  alt=""
                  className="object-cover h-[37px] w-[37px]"
                />
              </div>
              </Tooltip>
             
            </div>
          </div>
          <div className="flex items-center text-[14px] text-[#333333] mb-[20px]">
            <DoneIcon sx={{ ml: "5px", pb: "2px",color:"#2e6bc6" }} />
            <p>5 عدد موجود</p>
          </div>
          <div className="flex items-center justify-between h-[42px] text-[12px] mb-[20px]">
            <div className="flex items-center justify-between w-full gap-3">
              <div className="flex items-center justify-between w-[80px] border rounded-[8px] h-[42px]">
                <div className="flex items-center justify-center px-[7px] h-full ">
                  <p>-</p>
                </div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="1"
                  className="w-[30px] h-full border text-center"
                />
                <div className="flex items-center justify-center px-[7px]  h-full ">
                  <p>+</p>
                </div>
              </div>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#2e6bc6",
                  width: "100%",
                  height: "42px",
                }}
              >
                افزودن به کارت
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#242424",
                  width: "100%",
                  height: "42px",
                  "&:hover": { backgroundColor: "#333333 !important" },
                }}
              >
                خرید
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between flex-wrap mb-[20px]  pb-[12px] border-b lg:gap-0 gap-3">
            <div className="flex items-center px-[15px] text-[14px] text-[#333333] gap-2">
              <p className="ml-[5px]">اشتراک:</p>
              <FacebookIcon sx={{width:"20px",height:"20px",color:"#00000099",cursor:"pointer",":hover":{color:"#242424"}}}/>
              <TelegramIcon sx={{width:"20px",height:"20px",color:"#00000099",cursor:"pointer",":hover":{color:"#242424"}}}/>
              <FacebookIcon sx={{width:"20px",height:"20px",color:"#00000099",cursor:"pointer",":hover":{color:"#242424"}}}/>
              <FacebookIcon sx={{width:"20px",height:"20px",color:"#00000099",cursor:"pointer",":hover":{color:"#242424"}}}/>
            </div>
            <div className="flex items-center px-[15px] text-[14px] text-[#333333] ">
              <div className="flex hover:text-[#777] cursor-pointer">
                 <ShuffleIcon sx={{ ml: "5px",width:"16px",height:"16px" }} />
              <p className="ml-[20px]">اشتراک</p>
              </div>
             <div className="flex hover:text-[#777] cursor-pointer">
               <FavoriteBorderIcon sx={{ ml: "5px",width:"16px",height:"16px" }} />
              <p>اضافه کردن به لیست آرزوها</p>
             </div>
             
            </div>
          </div>
          <div className="text-[14px] mb-[20px] border-b pb-[15px]">
            <p className="mb-[10px]">اخرین شانس</p>
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="flex  item-center gap-2 h-[54px]">
                <div className="flex flex-col items-center w-[54px]  h-[54px] border rounded-[8px] p-[5px]">
                  <p className="text-[20px] text-[#333333]">147</p>
                  <p className="text-[12px] text-[#777777]">روز</p>
                </div>
                <div className="flex flex-col items-center w-[54px]  h-[54px] border rounded-[8px] p-[5px]">
                  <p className="text-[20px] text-[#333333]">5</p>
                  <p className="text-[12px] text-[#777777]">ساعت</p>
                </div>
                <div className="flex flex-col items-center w-[54px]  h-[54px] border rounded-[8px] p-[5px]">
                  <p className="text-[20px] text-[#333333]">27</p>
                  <p className="text-[12px] text-[#777777]">دقیقه</p>
                </div>
                <div className="flex flex-col items-center w-[54px]  h-[54px] border rounded-[8px] p-[5px]">
                  <p className="text-[20px] text-[#333333]">17</p>
                  <p className="text-[12px] text-[#777777]">ثانیه</p>
                </div>
              </div>
              <div className="flex flex-col w-full justify-between h-[54px] ">
                <div className="flex items-center justify-between  text-[14px] text-[#777777]">
                  <div className="flex items-center">
                    <p>باقی مانده:</p>
                    <p className="text-[#333333] mr-[3px]">11</p>
                  </div>
                  <div className="flex items-center">
                    <p> سفارش داده شده:</p>
                    <p className="text-[#333333] mr-[3px]">5</p>
                  </div>
                </div>
                <div className="h-[7px] rounded-[8px] bg-[#2e6bc6] mb-[12px]"></div>
              </div>
            </div>
          </div>
          <p className="mb-[10px]"> پرداخت مطمن </p>
          <img
            src="https://a6n4d3q9.rocketcdn.me/accessories/wp-content/uploads/sites/7/2022/04/guaranteed-safe-checkout-bordered.jpg"
            alt=""
            className="h-[40px] object-cover w-full"
          />
        </div>
        {/* Left - Swiper */}
        <div className="flex w-full lg:order-2 order-1">
          <SwiperProduct />
          
        </div>
      </div>
      <div className="border-b">
        <div className="my-[30px] ">
          <p className="text-[22px] text-[#242424] mb-[20px]">
            ویژگی ها و سازگاری
          </p>
          <div className="grid lg:grid-cols-5 grid-cols-2 lg:gap-3 gap-2">
            <div className="lg:col-span-1">
              <img
                src="https://a6n4d3q9.rocketcdn.me/accessories/wp-content/uploads/sites/7/2022/08/accessories-single-product-5.jpg"
                alt=""
                loading="lazy"
                className="h-[415px] w-full object-cover rounded-[8px]"
              />
            </div>
            <div className="col-span-1">
              <img
                src="https://a6n4d3q9.rocketcdn.me/accessories/wp-content/uploads/sites/7/2022/08/accessories-single-product-6.jpg"
                alt=""
                loading="lazy"
                className="h-[415px] w-full object-cover rounded-[8px]"
              />
            </div>
            <div className="col-span-3">
              <div className="flex flex-col h-full justify-center">
                <p className="text-[22px] text-[#242424] mb-[10px]">ویژگی ها</p>
                <p className="mb-[30px] text-[14px] text-[#777777]">
                  Using dummy content or fake information in the Web design
                  process can result in products with unrealistic assumptions
                  and potentially serious design flaws. A seemingly elegant
                  design can quickly begin to bloat with unexpected content or
                  break under the weight of actual activity. Fake data can
                  ensure a nice looking layout but it doesn’t reflect what a
                  living, breathing application must endure.
                </p>
                <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-4">
                  <div className="flex items-center text-[16px] text-[#333333]">
                    <AcUnitIcon sx={{ ml: "10px" }} />
                    <p>تست</p>
                  </div>
                  <div className="flex items-center text-[16px] text-[#333333]">
                    <AcUnitIcon sx={{ ml: "10px" }} />
                    <p>تست</p>
                  </div>
                  <div className="flex items-center text-[16px] text-[#333333]">
                    <AcUnitIcon sx={{ ml: "10px" }} />
                    <p>تست</p>
                  </div>
                  <div className="flex items-center text-[16px] text-[#333333]">
                    <AcUnitIcon sx={{ ml: "10px" }} />
                    <p>تست</p>
                  </div>
                  <div className="flex items-center text-[16px] text-[#333333]">
                    <AcUnitIcon sx={{ ml: "10px" }} />
                    <p>تست</p>
                  </div>
                  <div className="flex items-center text-[16px] text-[#333333]">
                    <AcUnitIcon sx={{ ml: "10px" }} />
                    <p>تست</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showContent ? (
          <>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 mb-[30px]">
              <div className="col-span-1">
                <div className="flex flex-col h-full justify-center">
                  <p className="text-[22px] text-[#242424] mb-[10px]">
                    ویژگی ها
                  </p>
                  <p className="mb-[30px] text-[14px] text-[#777777]">
                    Using dummy content or fake information in the Web design
                    process can result in products with unrealistic assumptions
                    and potentially serious design flaws. A seemingly elegant
                    design can quickly begin to bloat with unexpected content or
                    break under
                  </p>
                  <Button
                    variant="contained"
                    sx={{
                      height: "42px",
                      width: "196px",
                      backgroundColor: "#2e6bc6",
                      mb: "30px",
                      borderRadius: "5px",
                    }}
                  >
                    سوالات و پاسخ
                  </Button>
                </div>
              </div>
              <div className="col-span-1">
                <img
                  src="https://a6n4d3q9.rocketcdn.me/accessories/wp-content/uploads/sites/7/2022/08/accessories-single-product-3-1.jpg"
                  alt=""
                  className="h-[420px] w-full object-cover rounded-[8px]"
                />
              </div>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 mb-[30px]">
              <div className="col-span-1">
                <img
                  src="https://a6n4d3q9.rocketcdn.me/accessories/wp-content/uploads/sites/7/2022/08/accessories-single-product-3-1.jpg"
                  alt=""
                  className="h-[291px] w-full object-cover rounded-[8px]"
                />
              </div>
              <div className="col-span-1">
                <div className="flex flex-col h-full justify-center">
                  <p className="text-[22px] text-[#242424] mb-[10px]">متریال</p>
                  <p className="mb-[30px] text-[14px] text-[#777777]">
                    Using dummy content or fake information in the Web design
                    process can result in products with unrealistic assumptions
                    and potentially serious design flaws. A seemingly elegant
                    design can quickly begin to bloat with unexpected content or
                    break under
                  </p>
                  <div className="flex items-center mb-[30px]">
                    <Avatar
                      alt="Cindy Baker"
                      src="https://a6n4d3q9.rocketcdn.me/accessories/wp-content/uploads/sites/7/2022/08/acs-ab-us-img-avatar-65x65.png"
                      sx={{ width: "65px", height: "65px", ml: "20px" }}
                    />
                    <div className="flex flex-col item-center">
                      <p className="text-[18px] text-[#242424] mb-[10px]">
                        متریال
                      </p>
                      <p className=" text-[14px] text-[#777777]">Using dummy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
        <div className="w-full flex justify-center items-center text-[13px] mb-[30px]">
          <button
            onClick={handleButtonClick}
            className="border-b-[2px] border-[#2e6bc6]"
          >
            {showContent ? "Show Less" : "Show More"}
          </button>
          <ExpandMoreIcon />
        </div>
      </div>
      <div className="py-[35px] px-[15px]">
        <h4 className="text-[22px] text-[#242424] mb-[30px]">فروشنده</h4>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
          <div className="text-[14px]">
            <h2 className=" text-[#242424] mb-[15px]">ریویو</h2>
            <p className=" text-[#777777] mb-[20px]">هنوز ریویو ندارید</p>
          </div>
          {/* Grid - Form */}
          <div>
            <div className="text-[14px]">
              <h2 className=" text-[#242424] mb-[15px]">
                اولین نفری باشید که دیدگاهی را ارسال می کنید برای “قاب چرمی
                آیفون 12 بنفش عمیق”
              </h2>
              <p className=" text-[#777777] mb-[20px]">
                {" "}
                اولین نفری باشید که دیدگاهی را ارسال می کنید برایق”{" "}
              </p>
            </div>
            <form action="">
              <div className="flex items-center mb-[15px]">
                <p className="ml-[15px] text-[14px] text-[#242424]">امتیاز :</p>
                <Rating
                  name="no-value"
                  value={null}
                  size="small"
                  sx={{ mb: "3px" }}
                />
              </div>
              <div className="mb-[15px]">
                <p className="mb-[5px] text-[14px] text-[#242424]">
                  ریویو شما *
                </p>
                <TextField
                  id="outlined-multiline-flexible"
                  label=""
                  multiline
                  rows={7}
                  sx={{ width: "100%" }}
                />
              </div>
              <div className="grid  grid-cols-1 md:grid-cols-2 lg:gap-1 gap-3">
                <div className="mb-[15px]">
                  <label htmlFor="" className="mb-[5px] text-[14px]">
                    نام *
                  </label>
                  <input
                    type="text"
                    className="px-[15px] h-[42px] w-full border rounded-[5px]"
                  />
                </div>
                <div className="mb-[15px]">
                  <label htmlFor="" className="mb-[5px] text-[14px]">
                    ایمیل *
                  </label>
                  <input
                    type="email"
                    className="px-[15px] h-[42px] w-full border rounded-[5px]"
                  />
                </div>
              </div>
              <div className="flex mb-[15px]">
                <input type="checkbox" className="ml-[5px]" />
                <p className="text-[14px] text-[#242424]">
                  برای دفعه بعد که نظر می دهم نام، ایمیل و وب سایت من را در این
                  مرورگر ذخیره کنید.
                </p>
              </div>{" "}
              <Button
                variant="contained"
                sx={{
                  width: "87px",
                  height: "42px",
                  backgroundColor: "#2e6bc6",
                  fontSize: "13px",
                }}
              >
                ثبت{" "}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
