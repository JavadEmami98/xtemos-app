import React, { useState } from "react";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { Box } from "@mui/material";

function QA() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleDetails = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="container lg:py-[64px] md:[32px] py-[16px]">
      <h2 className="lg:text-[25px] md:text-[19px] text-[17px] text-[#061962] lg:mb-[32px] md:mb-[24px] mb-[16px] font-bold text-center">
        سوالات متداول
      </h2>
      <p className="lg:text-[20px] md:text-[18px] text-[14px] text-[#061962] lg:mb-[32px] md:mb-[16px] mb-[8px] font-normal text-center">
        پاسخ سوالاتی که در مورد دریافت وام خرید کالا دارید
      </p>
      <div className="flex flex-col gap-4 w-full">
        <ul className="flex flex-col gap-4 w-full">
          <li className="flex flex-col px-[32px]  bg-[#f2f5f8] rounded-[1.5rem] ">
            <div className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium ">
              <span className="py-[27px] pl-[27px]">
                گرفتن تسهیلات بانک تجارت برای چه کسانی امکان‌پذیر است؟
              </span>
              <AddCircleOutlinedIcon
                onClick={toggleDetails}
                sx={{ color: "#424c5c" }}
                className="ani-btn"
              />
            </div>
            <Box
              sx={{
                px: "64px",
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>
                افراد بین ۱۸ تا ۷۰ سال در صورت داشتن شرایط زیر می‌­توانند با طی
                مسیر تخصیص اعتبار، این تسهیلات را دریافت کنند:
                <br />
                ۱- داشتن چک صیادی بنفش، ۲ - کسب امتیاز لازم در امکان‌سنجی
              </span>
            </Box>
          </li>
          <li className="flex flex-col px-[32px]  bg-[#f2f5f8] rounded-[1.5rem] ">
            <div className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium ">
              <span className="py-[27px] pl-[27px]">
                آیا می‌توانم با ورود به مراحل بعدی، اطلاعاتم را در مراحل قبل
                تغییر بدهم؟
              </span>
              <AddCircleOutlinedIcon
                onClick={toggleDetails}
                sx={{ color: "#424c5c" }}
                className="ani-btn"
              />
            </div>
            <Box
              sx={{
                px: "64px",
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>
                خیر؛ با تغییر وضعیت در مراحل ثبت‌نام، امکان بازگشت به وضعیت قبل
                و اصلاح اطلاعات وجود ندارد.
              </span>
            </Box>
          </li>
          <li className="flex flex-col px-[32px]  bg-[#f2f5f8] rounded-[1.5rem] ">
            <div className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium ">
              <span className="py-[27px] pl-[27px] leading-6">
                مدارک مورد نیاز و هزینه ثبت نام حضوری چه‌قدر است؟
              </span>
              <AddCircleOutlinedIcon
                onClick={toggleDetails}
                sx={{ color: "#424c5c" }}
                className="ani-btn"
              />
            </div>
            <Box
              sx={{
                px: "64px",
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>
                مدارک مورد نیاز برای ثبت‌نام حضوری شامل <br />- کارت ملی جدید
                <br />- شناسنامه و یا کارت ملی قدیم با رسید درخواست کارت ملی
                جدید
                <br />- چک صیادی به‌نام فرد متقاضی (برای کاربرانی که به جای سفته
                از روش چک استفاده می‌کنند.)
                <br />
                هزینه ثبت‌نام در آخرین مرحله و در صورت‌فعال‌سازی کامل از
                شمادریافت می‌شود و مبلغ آن ۱۰۰ هزار تومان است
              </span>
            </Box>
          </li>
          <li className="flex flex-col px-[32px]  bg-[#f2f5f8] rounded-[1.5rem] ">
            <div className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium ">
              <span className="py-[27px] pl-[27px] leading-6">
                آیا می‌توانم بعد از ثبت نام، تعداد اقساط یا مبلغ وامم را تغییر
                بدهم؟
              </span>
              <AddCircleOutlinedIcon
                onClick={toggleDetails}
                sx={{ color: "#424c5c" }}
                className="ani-btn"
              />
            </div>
            <Box
              sx={{
                px: "64px",
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>
                خیر؛ مگر این که طرح فعلی خود را لغو و دوباره برای طرح جدید اقدام
                به ثبت‌نام کنید.
              </span>
            </Box>
          </li>
          <li className="flex flex-col px-[32px]  bg-[#f2f5f8] rounded-[1.5rem] ">
            <div className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium ">
              <span className="py-[27px] pl-[27px] leading-6">
                مواردی مانند تاریخ تولد و غیره را صحیح وارد کردم، اما در قسمت
                تکمیل اطلاعات با خطا مواجه می‌شوم، علت چیست؟
              </span>
              <AddCircleOutlinedIcon
                onClick={toggleDetails}
                sx={{ color: "#424c5c" }}
                className="ani-btn"
              />
            </div>
            <Box
              sx={{
                px: "64px",
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>
                اطلاعات ثبتی در این قسمت باید کاملا مطابق با اطلاعات کارت ملی
                شما باشد؛ اگر کاملا از صحت اطلاعات وارد کرده خود مطمئنید، خطایی
                که با آن مواجه شده‌اید را به کارشناسان ما اطلاع دهید.
              </span>
            </Box>
          </li>
          <li className="flex flex-col px-[32px]  bg-[#f2f5f8] rounded-[1.5rem] ">
            <div className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium ">
              <span className="py-[27px] pl-[27px] leading-6">
                مواردی مانند تاریخ تولد و غیره را صحیح وارد کردم، اما در قسمت
                تکمیل اطلاعات با خطا مواجه می‌شوم، علت چیست؟
              </span>
              <AddCircleOutlinedIcon
                onClick={toggleDetails}
                sx={{ color: "#424c5c" }}
                className="ani-btn"
              />
            </div>
            <Box
              sx={{
                px: "64px",
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>
                اطلاعات ثبتی در این قسمت باید کاملا مطابق با اطلاعات کارت ملی
                شما باشد؛ اگر کاملا از صحت اطلاعات وارد کرده خود مطمئنید، خطایی
                که با آن مواجه شده‌اید را به کارشناسان ما اطلاع دهید.
              </span>
            </Box>
          </li>
          <li className="flex flex-col px-[32px]  bg-[#f2f5f8] rounded-[1.5rem] ">
            <div className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium ">
              <span className="py-[27px] pl-[27px] leading-6">
                قبلا با شماره موبایل خودم اما با کد ملی شخص دیگری ثبت نام کردم؛
                آیا می‌توانم کد ملی را تغییر دهم و دوباره ثبت‌نام کنم؟
              </span>
              <AddCircleOutlinedIcon
                onClick={toggleDetails}
                sx={{ color: "#424c5c" }}
                className="ani-btn"
              />
            </div>
            <Box
              sx={{
                px: "64px",
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>
                خیر؛ با وارد کردن شماره موبایل و کد ملی عملیات استعلام اجرا
                می‌شود؛ بنابراین نمی‌توانید دوباره با همان شماره موبایل و کد ملی
                دیگری ثبت نام کنید. تنها روش پیش روی شما این است که با شماره
                موبایل دیگری که به نام کد ملی شماست دوباره اقدام کنید.
              </span>
            </Box>
          </li>
          <li className="flex flex-col px-[32px]  bg-[#f2f5f8] rounded-[1.5rem] ">
            <div className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium ">
              <span className="py-[27px] pl-[27px] leading-6">
                آیا برای دریافت اعتبار با تامین مالی بانک تجارت، باید حتما حساب
                بانکی تجارت داشته باشم؟
              </span>
              <AddCircleOutlinedIcon
                onClick={toggleDetails}
                sx={{ color: "#424c5c" }}
                className="ani-btn"
              />
            </div>
            <Box
              sx={{
                px: "64px",
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>
                خیر؛ در این شرایط بانک برای شما به‌صورت غیرحضوری حساب بانکی
                افتتاح خواهد کرد.
              </span>
            </Box>
          </li>
          <li className="flex flex-col px-[32px]  bg-[#f2f5f8] rounded-[1.5rem] ">
            <div className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium ">
              <span className="py-[27px] pl-[27px] leading-6">
                محاسبه امتیاز در امکان‌سنجی بر چه مبنایی است و چه عواملی در
                محاسبه آن تاثیرگذراند؟
              </span>
              <AddCircleOutlinedIcon
                onClick={toggleDetails}
                sx={{ color: "#424c5c" }}
                className="ani-btn"
              />
            </div>
            <Box
              sx={{
                px: "64px",
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>
                مبنای محاسبه امتیاز، سابقه مالی افراد در سیستم بانکی است و
                مواردی مثل اقساط پرداخت نشده در گذشته، اقساط باز، دیرکرد در
                پرداخت اقساط، نداشتن چک برگشتی و ... در امتیاز نهایی
                تاثیرگذراند. در مدل بانک تجارت صرفا به افراد با رتبه اعتباری
                ایرانیان A و B وام تعلق می‌گیرد.
              </span>
            </Box>
          </li>
          <li className="flex flex-col px-[32px]  bg-[#f2f5f8] rounded-[1.5rem] ">
            <div className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium ">
              <span className="py-[27px] pl-[27px] leading-6">
                اگر نتیجه امکان‌سنجی من مردود اعلام شود، چه اتفاقی میفتد؟ آیا
                باز هم می‌توانم برای ثبت‌نام اقدام کنم؟
              </span>
              <AddCircleOutlinedIcon
                onClick={toggleDetails}
                sx={{ color: "#424c5c" }}
                className="ani-btn"
              />
            </div>
            <Box
              sx={{
                px: "64px",
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>
                در صورتی که در فرایند امکان‌سنجی مردود شوید، با ارسال پیامک از
                طر‌ح‌های متناسب با امتیاز دریافتی‌خود مطلع می‌شوید.
                <br />
                امکان تکرار در لحظه فرایند امکان‌سنجی برای هیچ کدام از کاربران
                وجود نداد؛ در صورت نیاز به امکان‌سنجی دوباره، باید با لغو فرایند
                از ابتدا مرحله امکان‌سنجی را آغاز کنید.
                <br />
                اگر پیامکی برای پیشنهاد طرح‌های جایگزین برای شما ارسال نشود یعنی
                در زمان ثبت‌ درخواست شما، طرحی متناسب با امتیازتان وجود ندارد.
                <br />
                طرح پیشنهادی که از آن مطلع می‌شوید، بالاترین مبلغی است که در حال
                حاضر می‌توانید دریافت کنید.
              </span>
            </Box>
          </li>
          <li className="flex flex-col px-[32px]  bg-[#f2f5f8] rounded-[1.5rem] ">
            <div className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium ">
              <span className="py-[27px] pl-[27px] leading-6">
                اگر نتیجه امکان‌سنجیم موفقیت‌آمیز نباشد، آیا می‌توانم بعد از رفع
                سوءاثر دوباره برای امکان‌سنجی اقدام کنم؟
              </span>
              <AddCircleOutlinedIcon
                onClick={toggleDetails}
                sx={{ color: "#424c5c" }}
                className="ani-btn"
              />
            </div>
            <Box
              sx={{
                px: "64px",
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>
                بله؛ در این شرایط می‌توانید با پرداخت اقساط معوق یا مشخص کردن
                وضعیت چک برگشتی، رفع سوء‌اثر کنید و با گذشت حداقل دو هفته از رفع
                سوء‌اثر دوباره برای ثبت‌نام اقدام کنید.
              </span>
            </Box>
          </li>
          <li className="flex flex-col px-[32px]  bg-[#f2f5f8] rounded-[1.5rem] ">
            <div className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium ">
              <span className="py-[27px] pl-[27px] leading-6">
                اگر نتیجه امکان‌سنجیم موفقیت‌آمیز نباشد، آیا می‌توانم بعد از رفع
                سوءاثر دوباره برای امکان‌سنجی اقدام کنم؟
              </span>
              <AddCircleOutlinedIcon
                onClick={toggleDetails}
                sx={{ color: "#424c5c" }}
                className="ani-btn"
              />
            </div>
            <Box
              sx={{
                px: "64px",
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>
                بله؛ در این شرایط می‌توانید با پرداخت اقساط معوق یا مشخص کردن
                وضعیت چک برگشتی، رفع سوء‌اثر کنید و با گذشت حداقل دو هفته از رفع
                سوء‌اثر دوباره برای ثبت‌نام اقدام کنید.
              </span>
            </Box>
          </li>
          <li className="flex flex-col px-[32px]  bg-[#f2f5f8] rounded-[1.5rem] ">
            <div className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium ">
              <span className="py-[27px] pl-[27px] leading-6">
                آیا می‌­توانم برای چک از دگرضامنی استفاده کنم؟
              </span>
              <AddCircleOutlinedIcon
                onClick={toggleDetails}
                sx={{ color: "#424c5c" }}
                className="ani-btn"
              />
            </div>
            <Box
              sx={{
                px: "64px",
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>
                خیر؛ فرآیند تخصیص اعتبار بانک تجارت فقط به صورت خودضامنی است و
                چک ضمانت تنها باید به نام خود فرد متقاضی باشد.
              </span>
            </Box>
          </li>
          <li className="flex flex-col px-[32px]  bg-[#f2f5f8] rounded-[1.5rem] ">
            <div className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium ">
              <span className="py-[27px] pl-[27px] leading-6">
                تصویر چکم تایید شده است؛ چطور اصل چک را برای دیجی‌پی ارسال کنم؟
              </span>
              <AddCircleOutlinedIcon
                onClick={toggleDetails}
                sx={{ color: "#424c5c" }}
                className="ani-btn"
              />
            </div>
            <Box
              sx={{
                px: "64px",
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>
                اگر ساکن تهرانید:
                <br />
                با هماهنگی قبلی همکاران ما در زمان و مکان از پیش تعیین شده با
                ارسال پیک، چک را از شما دریافت می‌کنند.
                <br />
                می‌توانید با مراجعه به مراکز حضوری (پلاتین و نارمک و شرکت دیجی)
                چک را تحویل دهید.
                <br />
                یا خودتان چک را با پست برای ما ارسال کنید.
                <br />
                اما اگر ساکن شهری به‌غیر از تهران هستید، باید چک را به صندوق
                پستی ۱۹۳۹۵۳۱۹۹ پست کنید.
              </span>
            </Box>
          </li>
          <li className="flex flex-col px-[32px]  bg-[#f2f5f8] rounded-[1.5rem] ">
            <div className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium ">
              <span className="py-[27px] pl-[27px] leading-6">
                آیا می‌توانم چکی با تاریخ گذشته بارگذاری کنم؟
              </span>
              <AddCircleOutlinedIcon
                onClick={toggleDetails}
                sx={{ color: "#424c5c" }}
                className="ani-btn"
              />
            </div>
            <Box
              sx={{
                px: "64px",
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>
                خیر؛ تاریخ سررسید چک باید به تاریخ ۱۰ روز آینده باشد و امکان
                تغییر تاریخ وجود ندارد.
              </span>
            </Box>
          </li>
          <li className="flex flex-col px-[32px]  bg-[#f2f5f8] rounded-[1.5rem] ">
            <div className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium ">
              <span className="py-[27px] pl-[27px] leading-6">
                آیا می توانم چکم را حضوری به شرکت تحویل بدهم؟
              </span>
              <AddCircleOutlinedIcon
                onClick={toggleDetails}
                sx={{ color: "#424c5c" }}
                className="ani-btn"
              />
            </div>
            <Box
              sx={{
                px: "64px",
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>
                بله؛ در صورت لزوم و با هماهنگی با مرکز پشتیبانی چک را یا در
                مراکز حضوری در تهران (پلاتین - نارمک) و یا در شرایط اضطراری با
                مراجعه در ساعات و روزهای کاری به محل شرکت تحویل دهید.
              </span>
            </Box>
          </li>
          <li className="flex flex-col px-[32px]  bg-[#f2f5f8] rounded-[1.5rem] ">
            <div className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium ">
              <span className="py-[27px] pl-[27px] leading-6">
                چکم را چطور پر کنم؟
              </span>
              <AddCircleOutlinedIcon
                onClick={toggleDetails}
                sx={{ color: "#424c5c" }}
                className="ani-btn"
              />
            </div>
            <Box
              sx={{
                px: "64px",
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>
                راهنمایی برای پر کردن چک در سایت دیجی‌پی تهیه شده است؛ با مشاهده
                ویدیوی موجود در لینک می‌توانید به راحتی چک خود را به درستی پر
                کنید.
              </span>
            </Box>
          </li>
          <li className="flex flex-col px-[32px]  bg-[#f2f5f8] rounded-[1.5rem] ">
            <div className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium ">
              <span className="py-[27px] pl-[27px] leading-6">
                آیا چک فقط باید برای خود متقاضی اعتبار باشد؟{" "}
              </span>
              <AddCircleOutlinedIcon
                onClick={toggleDetails}
                sx={{ color: "#424c5c" }}
                className="ani-btn"
              />
            </div>
            <Box
              sx={{
                px: "64px",
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>
                برای دریافت وام با تامین مالی بانک تجارت، چک ضمانت فقط باید به
                نام خود متقاضی باشد.
              </span>
            </Box>
          </li>
          <li className="flex flex-col px-[32px]  bg-[#f2f5f8] rounded-[1.5rem] ">
            <div className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium ">
              <span className="py-[27px] pl-[27px] leading-6">
                اگر برای تحویل چک در محل (تهران) و زمان مشخص شده حاضر نباشم،
                چطور می‌توانم دوباره هماهنگی‌های لازم را انجام دهم؟
              </span>
              <AddCircleOutlinedIcon
                onClick={toggleDetails}
                sx={{ color: "#424c5c" }}
                className="ani-btn"
              />
            </div>
            <Box
              sx={{
                px: "64px",
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>
                در این شرایط با تماس مجدد شما و با ارسال لینک پیامکی از سمت ما،
                و فرم ثبت آدرس و زمان را تکمیل می‌کنید تا برای دریافت اصل چک با
                شما دوباره هماهنگی صورت بگیرد.
              </span>
            </Box>
          </li>
          <li className="flex flex-col px-[32px]  bg-[#f2f5f8] rounded-[1.5rem] ">
            <div className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium ">
              <span className="py-[27px] pl-[27px] leading-6">
                بعد از ارسال اصل چک، چقدر طول می‌کشد تا چک تایید شود؟
              </span>
              <AddCircleOutlinedIcon
                onClick={toggleDetails}
                sx={{ color: "#424c5c" }}
                className="ani-btn"
              />
            </div>
            <Box
              sx={{
                px: "64px",
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>
                در ارسال‌های پستی این زمان بستگی به عملکرد دفاتر پستی دارد که
                معمولا از ۱ تا ۱۰روز کاری زمان می‌برد و بعد از تحویل چک به صندوق
                پستی شرکت، نهایتا تا ۷۲ ساعت فیزیک چک تأئید می‌شود.
              </span>
            </Box>
          </li>
          <li className="flex flex-col px-[32px]  bg-[#f2f5f8] rounded-[1.5rem] ">
            <div className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium ">
              <span className="py-[27px] pl-[27px] leading-6">
                هزینه ساخت امضای دیجیتال و امکان سنجی چقدر است؟
              </span>
              <AddCircleOutlinedIcon
                onClick={toggleDetails}
                sx={{ color: "#424c5c" }}
                className="ani-btn"
              />
            </div>
            <Box
              sx={{
                px: "64px",
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>
                ساخت امضا و اجرا مرحله امکان‌سنجی برای متقاضیان هزینه‌ای ندارد.
              </span>
            </Box>
          </li>
          <li className="flex flex-col px-[32px]  bg-[#f2f5f8] rounded-[1.5rem] ">
            <div className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium ">
              <span className="py-[27px] pl-[27px] leading-6">
                هزینه صدور سفته الکتروینک چقدر است؟
              </span>
              <AddCircleOutlinedIcon
                onClick={toggleDetails}
                sx={{ color: "#424c5c" }}
                className="ani-btn"
              />
            </div>
            <Box
              sx={{
                px: "64px",
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>هزینه صدور سفته ۲۲۵۰۰ تومان است.</span>
            </Box>
          </li>
          <li className="flex flex-col px-[32px]  bg-[#f2f5f8] rounded-[1.5rem] ">
            <div className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium ">
              <span className="py-[27px] pl-[27px] leading-6">
                آیا می‌توانم با نسخه تحت وب اپلیکیشن امضای دیجیتالم را بسازم؟
              </span>
              <AddCircleOutlinedIcon
                onClick={toggleDetails}
                sx={{ color: "#424c5c" }}
                className="ani-btn"
              />
            </div>
            <Box
              sx={{
                px: "64px",
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span> بله؛ این امکان وجود دارد.</span>
            </Box>
          </li>
          <li className="flex flex-col px-[32px]  bg-[#f2f5f8] rounded-[1.5rem] ">
            <div className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium ">
              <span className="py-[27px] pl-[27px] leading-6">
                آیا امضای ساخته شده تاریخ انقضا دارد؟
              </span>
              <AddCircleOutlinedIcon
                onClick={toggleDetails}
                sx={{ color: "#424c5c" }}
                className="ani-btn"
              />
            </div>
            <Box
              sx={{
                px: "64px",
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>
                بله؛ به دلایل امنیتی امضای دیجیتال تمام کاربران یک‌بار مصرف‌اند
                و بعد از یک ماه منقضی و از دسترس خارج خواهند شد.
              </span>
            </Box>
          </li>
          <li className="flex flex-col px-[32px]  bg-[#f2f5f8] rounded-[1.5rem] ">
            <div className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium ">
              <span className="py-[27px] pl-[27px] leading-6">
                آیا با پاک کردن اپلیکیشن دیجی‌پی برای امضای دیجیتالم مشکلی پیش
                می‌آید؟
              </span>
              <AddCircleOutlinedIcon
                onClick={toggleDetails}
                sx={{ color: "#424c5c" }}
                className="ani-btn"
              />
            </div>
            <Box
              sx={{
                px: "64px",
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>
                خیر؛ با نصب مجدد اپلیکیشن و ورود با شماره موبایل قبلی، به همه
                اطلاعات خود از جمله امضای دیجیتالتان دوباره دسترسی خواهید داشت.
              </span>
            </Box>
          </li>
          <li className="flex flex-col px-[32px]  bg-[#f2f5f8] rounded-[1.5rem] ">
            <div className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium ">
              <span className="py-[27px] pl-[27px] leading-6">
                آیا می‌توانم بعد از پرداخت هزینه خدمات و زیرساخت فرایند ثبت‌نام
                را لغو کنم؟
              </span>
              <AddCircleOutlinedIcon
                onClick={toggleDetails}
                sx={{ color: "#424c5c" }}
                className="ani-btn"
              />
            </div>
            <Box
              sx={{
                px: "64px",
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>
                خیر؛ به‌غیر از موارد خاص که کاربر مشکلات غیرقابل‌حلز مثل ارسال
                چک به نام شخص دیگر یا مشکل انسداد حساب داشته باشد، امکان لغو
                فرایند در این مرحله وجود ندارد.
              </span>
            </Box>
          </li>
          <li className="flex flex-col px-[32px]  bg-[#f2f5f8] rounded-[1.5rem] ">
            <div className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium ">
              <span className="py-[27px] pl-[27px] leading-6">
                آیا برای دریافت وام باید هزینه خدمات و زیرساخت پرداخت کنم؟
              </span>
              <AddCircleOutlinedIcon
                onClick={toggleDetails}
                sx={{ color: "#424c5c" }}
                className="ani-btn"
              />
            </div>
            <Box
              sx={{
                px: "64px",
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>
                بله؛ با توجه به طرح انتخابی، باید مبلغی به صورت نقدی در مرحله
                پرداخت هزینه خدمات و زیرساخت پرداخت کنید.
              </span>
            </Box>
          </li>
          <li className="flex flex-col px-[32px]  bg-[#f2f5f8] rounded-[1.5rem] ">
            <div className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium ">
              <span className="py-[27px] pl-[27px] leading-6">
                بعد از پرداخت هزینه خدمات و زیرساخت، چقدر زمان می‌برد تا کیف
                پولم فعال شود؟
              </span>
              <AddCircleOutlinedIcon
                onClick={toggleDetails}
                sx={{ color: "#424c5c" }}
                className="ani-btn"
              />
            </div>
            <Box
              sx={{
                px: "64px",
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>
                اگر مشکلی رخ ندهد، نهایتا بعد از ۴۸ ساعت کاری کیف پولتان فعال
                خواهد شد.
              </span>
            </Box>
          </li>
          <li className="flex flex-col px-[32px]  bg-[#f2f5f8] rounded-[1.5rem] ">
            <div className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium ">
              <span className="py-[27px] pl-[27px] leading-6">
                بعد از چه مدتی از امضای قرارداد باید هزینه خدمات و زیرساخت را
                پرداخت کنم؟
              </span>
              <AddCircleOutlinedIcon
                onClick={toggleDetails}
                sx={{ color: "#424c5c" }}
                className="ani-btn"
              />
            </div>
            <Box
              sx={{
                px: "64px",
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>
                بلافاصله بعد از امضای قرارداد، به مرحله پرداخت هزینه خدمات و
                زیرساخت می‌رسید.
              </span>
            </Box>
          </li>
          <li className="flex flex-col px-[32px]  bg-[#f2f5f8] rounded-[1.5rem] ">
            <div className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium ">
              <span className="py-[27px] pl-[27px] leading-6">
                آیا محدودیت کالایی در طرح تجارت وجود دارد؟
              </span>
              <AddCircleOutlinedIcon
                onClick={toggleDetails}
                sx={{ color: "#424c5c" }}
                className="ani-btn"
              />
            </div>
            <Box
              sx={{
                px: "64px",
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>
                خیر، تمامی کالاهای با دوام و مصرفی روزانه را می‌توان با این طرح
                خرید. لازم به ذکر است که در حال حاضر سرویس و خدماتی مانند اشتراک
                دیجی پلاس،کارت هدیه و بیمه را نمی‌توان با این طرح خریداری کرد.
              </span>
            </Box>
          </li>
          <li className="flex flex-col px-[32px]  bg-[#f2f5f8] rounded-[1.5rem] ">
            <div className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium ">
              <span className="py-[27px] pl-[27px] leading-6">
                حداقل مبلغ خرید با اعتبار طرح تجارت چقدر است؟
              </span>
              <AddCircleOutlinedIcon
                onClick={toggleDetails}
                sx={{ color: "#424c5c" }}
                className="ani-btn"
              />
            </div>
            <Box
              sx={{
                px: "64px",
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>
                حداقل مبلغ خرید شما در این طرح نباید کمتر از ۲۵۰۰۰ تومان باشد.
              </span>
            </Box>
          </li>
          <li className="flex flex-col px-[32px]  bg-[#f2f5f8] rounded-[1.5rem] ">
            <div className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium ">
              <span className="py-[27px] pl-[27px] leading-6">
                آیا می‌توانم بیشتر از مبلغ اعتبارم خرید کنم؟
              </span>
              <AddCircleOutlinedIcon
                onClick={toggleDetails}
                sx={{ color: "#424c5c" }}
                className="ani-btn"
              />
            </div>
            <Box
              sx={{
                px: "64px",
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>
                بله، در صورتی که میزان خریدتان بیشتر از اعتبارتان باشد،
                مابه‌التفاوت مبلغ کالا را می‌توانید با کارت بانکی از طریق درگاه
                IPG، به صورت نقدی پرداخت کنید.
              </span>
            </Box>
          </li>
          <li className="flex flex-col px-[32px]  bg-[#f2f5f8] rounded-[1.5rem] ">
            <div className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium ">
              <span className="py-[27px] pl-[27px] leading-6">
                هزینه خدمات و زیرساخت چطور باید پرداخت کنم؟
              </span>
              <AddCircleOutlinedIcon
                onClick={toggleDetails}
                sx={{ color: "#424c5c" }}
                className="ani-btn"
              />
            </div>
            <Box
              sx={{
                px: "64px",
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>
                در مدل بانک تجارت، تمام کارمزد به صورت یک‌جا و پیش از فعال‌سازی
                از کاربر دریافت می‌شود. در صورت عدم تخصیص اعتبار به کاربر توسط
                بانک مبلغ کارمزد به صورت قابل برداشت به کیف پول کاربر منتقل
                می‌شود. (حداکثر ظرف ۷۲ ساعت کاری)
              </span>
            </Box>
          </li>
          <li className="flex flex-col px-[32px]  bg-[#f2f5f8] rounded-[1.5rem] ">
            <div className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium ">
              <span className="py-[27px] pl-[27px] leading-6">
                اگر در دوره خرید نتوانم کل اعتبارم را مصرف کنم، چه اتفاقی برای
                باقی‌مانده اعتبارم میفتد؟
              </span>
              <AddCircleOutlinedIcon
                onClick={toggleDetails}
                sx={{ color: "#424c5c" }}
                className="ani-btn"
              />
            </div>
            <Box
              sx={{
                px: "64px",
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>
                باقیمانده اعتبار شما بدون کسر کارمزد، حداکثر ۷ روز پس از پایان
                دوره خرید (۱۸۰+ ۱۸۰روز) در کیف پول اعتباری‌تان در دسترس خواهد
                بود. از این اعتبار بدون محدودیت زمانی می‌­توانید یا برای خرید از
                فروشگاه‌های طرف قرارداد دیجی‌پی، مثل دیجی‌کالا و یا برای استفاده
                از خدمات دیجی پی (پرداخت قبض، خرید شارژ و ...) استفاده کنید.
                به‌یاد داشته باشید این اعتبار غیرقابل انتقال به کارت‌های بانکی
                شماست و با آن نمی‌توانید اقساط خود را پرداخت کنید.
              </span>
            </Box>
          </li>
          <li className="flex flex-col px-[32px]  bg-[#f2f5f8] rounded-[1.5rem] ">
            <div className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium ">
              <span className="py-[27px] pl-[27px] leading-6">
                اقساطم در مدل بانک تجارت بر چه اساسی صادر می‌شوند؟
              </span>
              <AddCircleOutlinedIcon
                onClick={toggleDetails}
                sx={{ color: "#424c5c" }}
                className="ani-btn"
              />
            </div>
            <Box
              sx={{
                px: "64px",
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>
                فارغ از میزان سبد خرید، اقساط شما بر اساس مبلغ کل اعتباری که
                دریافت کرده‌اید صادر می‌شوند.
                <br />
                مثلا اگر اعتبار ۳۰ میلیونی دریافت کرده باشید و تنها از ۲۵ میلیون
                تومان استفاده کنید، طبق قرارداد اقساط شما بر اساس ۳۰ میلیون
                تومان صادر می‌شود و باقیمانده اعتبارتان بدون کسر کارمزد پس از
                پایان دوره خرید به کیف پول شما منتقل می‌شود. این مبلغ منتقل شده
                به کیف پول شما غیرقابل برداشت است و تنها برای خرید از
                فروشگاه‌های طرف قرارداد دیجی‌پی قابل استفاده خواهد بود.
              </span>
            </Box>
          </li>
          <li className="flex flex-col px-[32px]  bg-[#f2f5f8] rounded-[1.5rem] ">
            <div className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium ">
              <span className="py-[27px] pl-[27px] leading-6">
                اقساطم چه زمانی صادر می‌­شوند؟
              </span>
              <AddCircleOutlinedIcon
                onClick={toggleDetails}
                sx={{ color: "#424c5c" }}
                className="ani-btn"
              />
            </div>
            <Box
              sx={{
                px: "64px",
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>
                پس از فعال شدن کیف پول اعتباری‌تان، ۱۸۰ روز فرصت دارید تا اولین
                خریدتان را نهایی کند و از روز خرید اول‌تان ۱۸۰ روز دیگر مهلت
                دارید تا اعتبارتان را مصرف کنید. در مدل بانک تجارت قرارداد کاربر
                در زمان فعالسازی بسته می‌شود و بنابراین اقساط هم بر اساس میزان
                اعتبار درخواستی‌ کاربر، یک ماه بعد از تخصیص آن توسط بانک به
                کاربر (پیش از فعال‌سازی) صادر می‌شود و در اپلیکیشن دیجی‌پی قابل
                مشاهده‌اند.
              </span>
            </Box>
          </li>
          <li className="flex flex-col px-[32px]  bg-[#f2f5f8] rounded-[1.5rem] ">
            <div className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium ">
              <span className="py-[27px] pl-[27px] leading-6">
                چه زمانی می‌توانم اقساطم را پرداخت کنم؟
              </span>
              <AddCircleOutlinedIcon
                onClick={toggleDetails}
                sx={{ color: "#424c5c" }}
                className="ani-btn"
              />
            </div>
            <Box
              sx={{
                px: "64px",
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>
                از زمان نهایی شدن قرارداد، می‌توانید از طریق اپلیکیشن دیجی‌پی
                قسط خود را پرداخت کنید (این زمان در پروژه تجارت در حال حاضر بعد
                از زمان فعالسازی است).
              </span>
            </Box>
          </li>
          <li className="flex flex-col px-[32px]  bg-[#f2f5f8] rounded-[1.5rem] ">
            <div className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium ">
              <span className="py-[27px] pl-[27px] leading-6">
                چطور اقساطم را پرداخت کنم؟
              </span>
              <AddCircleOutlinedIcon
                onClick={toggleDetails}
                sx={{ color: "#424c5c" }}
                className="ani-btn"
              />
            </div>
            <Box
              sx={{
                px: "64px",
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>
                در حال حاضر در طرح تجارت تنها روشی که می‌توانید اقساطتان را
                پرداخت کنید از طریق اپلیکیشن دیجی‌پی است.
              </span>
            </Box>
          </li>
          <li className="flex flex-col px-[32px]  bg-[#f2f5f8] rounded-[1.5rem] ">
            <div className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium ">
              <span className="py-[27px] pl-[27px] leading-6">
                چطور می‌توانم برای لغو فرایند ثبت‌نام درخواست بدهم؟
              </span>
              <AddCircleOutlinedIcon
                onClick={toggleDetails}
                sx={{ color: "#424c5c" }}
                className="ani-btn"
              />
            </div>
            <Box
              sx={{
                px: "64px",
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>
                در تمامی مراحل به‌غیراز مرحله پرداخت هزینه خدمات و زیر ساخت
                ارسال جهت تایید بانک، با به‌روزرسانی اپلیکیشن یا از طریق نسخه
                تحت وب آن می‌توانید درخواست لغو خود رو ثبت کنید تا کارشناسان
                دیجی‌پی بعد از بررسی، لغو فرایند را اجرایی کنند.
              </span>
            </Box>
          </li>

          <li className="flex flex-col px-[32px]  bg-[#f2f5f8] rounded-[1.5rem] ">
            <div className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium ">
              <span className="py-[27px] pl-[27px] leading-6">
                در صورت داشتن اعتبار فعال با اقساطی باقی‌مانده می‌تواند از طرح
                دیگری هم اعتبار دریافت کنم؟
              </span>
              <AddCircleOutlinedIcon
                onClick={toggleDetails}
                sx={{ color: "#424c5c" }}
                className="ani-btn"
              />
            </div>
            <Box
              sx={{
                px: "64px",
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>
                خیر؛‌ اگر وام فعال دارید، نمی‌توانید از طرح دیگری در دیجی‌پی
                استفاده کنید.
              </span>
            </Box>
          </li>
          <li className="flex flex-col px-[32px]  bg-[#f2f5f8] rounded-[1.5rem] ">
            <div className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium ">
              <span className="py-[27px] pl-[27px] leading-6">
                آیا برای دریافت اعتبار از طرح تجارت باید به بانک هم مراجعه کنم؟
              </span>
              <AddCircleOutlinedIcon
                onClick={toggleDetails}
                sx={{ color: "#424c5c" }}
                className="ani-btn"
              />
            </div>
            <Box
              sx={{
                px: "64px",
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>
                خیر؛ کلیه مراحل دریافت اعتبار در طرح تجارت به‌صورت آنلاین انجام
                می‌شود. تنها در صورت بروز مشکلاتی مانند مسدودی حساب و یا مشکلات
                مرتبط با حساب، برای رفع نقص باید به شعب بانک تجارت مراجعه کنید.
              </span>
            </Box>
          </li>
          <li className="flex flex-col px-[32px]  bg-[#f2f5f8] rounded-[1.5rem] ">
            <div className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium ">
              <span className="py-[27px] pl-[27px] leading-6">
                برای دریافت اعتبار با تامین مالی بانک تجارت چه نوع ضمانتی باید
                ارائه کنم؟
              </span>
              <AddCircleOutlinedIcon
                onClick={toggleDetails}
                sx={{ color: "#424c5c" }}
                className="ani-btn"
              />
            </div>
            <Box
              sx={{
                px: "64px",
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>
                در حال حاضر ثبت‌نام طرح تجارت در تمامی مبالغ با ضمانت چک صیادی
                بنفش و سفته الکترونیک امکانش‌پذیر است.
              </span>
            </Box>
          </li>
          <li className="flex flex-col px-[32px]  bg-[#f2f5f8] rounded-[1.5rem] ">
            <div className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium ">
              <span className="py-[27px] pl-[27px] leading-6">
                فرایند دریافت اعتبار از شروع ثبت‌نام تا فعال‌سازی اعتبار چقدر
                زمان می‌برد؟
              </span>
              <AddCircleOutlinedIcon
                onClick={toggleDetails}
                sx={{ color: "#424c5c" }}
                className="ani-btn"
              />
            </div>
            <Box
              sx={{
                px: "64px",
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>
                اگر ثبت‌نام با ضمانت چک صیادی باشد، در صورتی که چک ضمانت را به
                موقع ارسال کنید و اختلالی وجود نداشته باشد، فرایند ثبت‌نام
                نهایتا یک هفته و در صورتی که ثبت نام با ضمانت سفته الکترونیک
                باشد و اختلالی وجود نداشته باشد نهایتا ۷۲ساعت کاری زمان می‌برد.
              </span>
            </Box>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default QA;
