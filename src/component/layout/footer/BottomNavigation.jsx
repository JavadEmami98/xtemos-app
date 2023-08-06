import React, { Fragment, useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Badge from "@mui/material/Badge";
/* import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"; */
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Box, Button, Drawer, Typography } from "@mui/material";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CloseIcon from "@mui/icons-material/Close";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import ShopCart from "./ShopCart";

function BottomNavigation() {
  const [open2, setOpen2] = React.useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  const [activeItem, setActiveItem] = useState("");

  const handleClick = (item) => {
    setActiveItem(item);
  };
  return (
    <div>
      <Box
        sx={{
          bottom: scrollPosition > 600 ? "0px" : "-80px",
          transition: "all 300ms ease",
        }}
        className="flex justify-between items-center px-4 pt-[9px] py-1 fixed left-0 bottom-0 right-0 z-[100] bg-white h-[57px] w-full border-t border-[#0000001f]"
      >
        <div
          onClick={() => handleClick("home")}
          style={{ color: activeItem === "home" ? "gray" : "black" }}
          className="flex flex-col justify-center items-center w-full"
        >
          <StorefrontIcon sx={{ mb: "2px" }} />
          <Typography sx={{ fontSize: "11px" }}>فروشگاه</Typography>
        </div>

        <div
          onClick={() => handleClick("pic")}
          style={{ color: activeItem === "pic" ? "gray" : "black" }}
          className="flex flex-col justify-center items-center w-full"
        >
          <Badge badgeContent={2} color="primary">
            <FavoriteBorderIcon sx={{ mb: "2px" }} />
          </Badge>
          <Typography sx={{ fontSize: "11px" }}>لیست آرزوها</Typography>
        </div>
        <div className="w-full">
          <ShopCart />
        </div>

        <div
          onClick={() => handleClick("acc")}
          style={{ color: activeItem === "acc" ? "gray" : "black" }}
          className="flex flex-col justify-center  items-center w-full"
        >
          <PermIdentityIcon sx={{ mb: "2px" }} />
          <Fragment>
            <Typography
              sx={{ fontSize: "11px" }}
              onClick={() => setOpen2(true)}
            >
              حساب کاربری
            </Typography>
            <Drawer
              anchor={"left"}
              open={open2}
              onClose={() => setOpen2(false)}
            >
              <div className="w-[300px] ">
                <div className="flex items-center justify-between px-[15px] py-[20px] h-[66px] text-[18px] text-[#242424] border-b">
                  <p>ثبت نام</p>
                  <div className="flex items-center text-[14px] text-[#333333]">
                    <p>بستن</p>
                    <CloseIcon
                      sx={{ p: "2px", mr: "3px" }}
                      onClick={() => setOpen2(false)}
                    />
                  </div>
                </div>
                <div className="flex flex-col text-[14px] text-[#242424] mt-[20px] border-b pt-[20px] pb-[15px] px-[15px]">
                  <form action="">
                    <label htmlFor="">یوزر یا ایمیل *</label>
                    <input
                      type="text"
                      className="h-[42px] w-full mt-[5px] mb-[20px] px-[15px] border rounded-[5px]"
                    />
                    <label htmlFor="">پسورد *</label>
                    <input
                      type="text"
                      className="h-[42px] w-full mt-[5px] mb-[20px] px-[15px] border rounded-[5px]"
                    />
                    <Button
                      variant="contained"
                      sx={{
                        height: "42px",
                        width: "100%",
                        fontSize: "13px",
                        backgroundColor: "#2e6bc6",
                        mb: "20px",
                      }}
                    >
                      ورود
                    </Button>
                    <div className="flex justify-between items-center text-[14px]">
                      <p className="text-[#2e6bc6]">فراموشی رمز عبور؟</p>
                      <div className="flex items-center ">
                        <p className="ml-[5px]">یادآوری</p>
                        <input type="checkbox" />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="flex flex-col items-center justify-center  py-[20px] px-[15px] border-b">
                  <RemoveShoppingCartOutlinedIcon
                    sx={{
                      height: "54px",
                      width: "130px",
                      mb: "15px",
                      color: "#f1f1f1",
                    }}
                  />
                  <p className="text-[14px] text-[#242424] mb-[15px]">
                    محصولی یافت نشد
                  </p>
                  <div className="text-[13px] text-[#333333] border-b border-[#2e6bc6]">
                    <p>اکانت جدید بسازید</p>
                  </div>
                </div>
              </div>
            </Drawer>
          </Fragment>
        </div>
      </Box>
    </div>
  );
}

export default BottomNavigation;
