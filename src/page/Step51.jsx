import React from "react";
import CircleIcon from "@mui/icons-material/Circle";

function Step51() {
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
            اخذ تسهیلات
          </h3>
          <p className="lg:text-[23px] text-[15px] text-[#6E27A0] font-bold">
            دریافت اعتبار از سمت بانک
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
            احراز هویت و عقد قرارداد
          </h3>
          <p className="text-[19px] text-[#787878]">
            صحت سنجی فیزیکی و تحویل مدارک به کارشناسان
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
            5
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-[#6E27A0] lg:text-[28px] text-[18px] font-bold">
            اخذ اعتبار از بانک
          </h3>
          <p className="text-[#787878] lg:text-[24px] text-[18px] font-bold">
            شارژ اعتبار در کیف پول بانک آینده ( طرح طراوت )
          </p>
        </div>
      </div>
      <div className="flex  flex-col w-full justify-center gap-5 items-center my-[20px] border-[2px] rounded-[36px] border-[#707070] border-dashed lg:p-10 md:p-[30px] p-4">
        <img
          src="assests/images/planLoan/tik.svg"
          alt=""
          className="lg:h-[177px] md:h-[157px] h-[140px]"
        />
        <p className="lg:text-[24px] md:text-[20px] text-[17px] font-bold text-[#787878]">
          اتمام فرآیند تسهیلات - با تشکر از اعتماد شما{" "}
        </p>
        <p className="lg:text-[21px] text-[14px] font-bold text-[#991890]">
          برای استفاده از اعتبار خود می توانید کیف پول سایت را از بخش داشبورد
          کاربری شارژ نموده و سپس محصول خود را خرید نمایید.
        </p>
      </div>
      <p className="lg:text-[21px] md:text-[18px] text-[15px] text-[#B5B5B5] font-bold ">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
        رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      </p>
    </div>
  );
}

export default Step51;
