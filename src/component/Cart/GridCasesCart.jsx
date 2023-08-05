import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

function GridCasesCart() {
  return (
    <div>
      <div className="relative">
        <img
          src="https://woodmart.xtemos.com/accessories/wp-content/uploads/sites/7/2022/05/straps-ltd-4.jpg"
          alt=""
          loading="lazy"
          className="object-cover h-[240px] mb-[10px] m-auto "
        />
        <div className="lg:hidden absolute bottom-0 left-0 bg-[#2e6bc6] z-10 rounded-bl-[7px]">
          <ShoppingCartOutlinedIcon
            sx={{ color: "white", width: "40px", height: "40px", p: "6px" }}
          />
        </div>
        <div className="lg:hidden  absolute top-0 right-0 border z-10 rounded-[50%]">
          <FavoriteBorderOutlinedIcon
            sx={{ color: "#333333", width: "35px", height: "35px", p: "8px" }}
          />
        </div>
      </div>

      <h3 className="mb-[5px] text-center text-inherit">اپل واچ الترا</h3>
      <p className="mb-[5px] text-[12px] text-[#a5a5a5] text-center">
        سیلیکون
      </p>
      <p className="text-[14px] text-[#2e6bc6] text-center">199IRR</p>
    </div>
  );
}

export default GridCasesCart;
