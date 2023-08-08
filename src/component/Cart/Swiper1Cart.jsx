import { Box, Button } from "@mui/material";
import React from "react";

function Swiper1Cart({title, descripttion1,descripttion2,image,paragraph}) {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: image,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "75vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className=" flex flex-col lg:mr-[75px] px-[15px]">     
          <div className="cart-mo relative lg:text-7xl md:text-[42px] text-[30px] mb-[20px] leading-[52px] lg:leading-[82px] text-[#242424] text-start">
            {title} <br />
            {paragraph}
          </div>
          <div className="text-mo relative">
             <div className="hidden lg:block text-[16px] text-[#777777] mb-[30px] text-start">
           {descripttion1}
           <br />
           {descripttion2}
          </div> </div>
          <div className="btn-mo flex">
              <Button variant="contained" sx={{width:"96.78px !important", height:"42px !important",ml:"15px",fontSize:"13px",backgroundcolor:"#2e6bc6"}}>فروشگاه</Button>
              <Button variant="outlined" sx={{width:"96.78px !important", height:"42px !important",color:"#333",border:"#00000000",fontSize:"13px"}}>خرید</Button>
          </div>
         
         
        </div>
      </Box>
    </div>
  );
}

export default Swiper1Cart;
