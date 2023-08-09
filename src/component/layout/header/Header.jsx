import React, { Fragment } from "react";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { Box, Drawer } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Badge from "@mui/material/Badge";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CloseIcon from '@mui/icons-material/Close';

const menu = [
  { title: "قاب ها" },
  { title: "قاب ها" },
  { title: "قاب ها" },
  { title: "قاب ها" },
  { title: "قاب ها" },
  { title: "قاب ها" },
];

function Header() {
  const [open2, setOpen2] = React.useState(false);
  return (
    <div className="flex justify-between items-center h-[90px] ">
      <img
        src="https://a6n4d3q9.rocketcdn.me/accessories/wp-content/themes/woodmart/images/wood-logo-dark.svg"
        alt=""
        loading="lazy"
        className="h-[36px] py-[5px] object-cover"
      />
      <div className="flex items-center text-[14px] px-[10px]">
        <div className="flex items-center relative">
          <>
            <div className="open-menu flex gap-5 items-center h-[90px] w-full">
              {menu.map((item, index) => (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "&:hover": { color: "#2e6bc6" },
                    cursor: "pointer",
                    color: "#333333",
                  }}
                  key={index}
                >
                  <p> {item.title}</p>
                  <ExpandMoreOutlinedIcon
                    sx={{ color: "#52525273", p: "4px" }}
                  />
                </Box>
              ))}
            </div>
          </>
          <div className="menu-bar">
            <div className="absolute top-20 right-0 z-10 border bg-[#fff] w-[220px] rounded-[8px] py-[12px] px-[20px]">
              <p className="py-[10px] text-[#848484] hover:text-[#2e6bc6] cursor-pointer">
                قاب آیفون
              </p>
              <p className="py-[10px] text-[#848484] hover:text-[#2e6bc6] cursor-pointer">
                قاب آیفون
              </p>
              <p className="py-[10px] text-[#848484] hover:text-[#2e6bc6] cursor-pointer">
                قاب آیفون
              </p>
              <p className="py-[10px] text-[#848484] hover:text-[#2e6bc6] cursor-pointer">
                قاب آیفون
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center">
          <div className="flex items-center text-[14px] text-[#333333] cursor-pointer hover:text-[#33333399]">
            <p>ورود / ثبت نام</p>
          </div>
          {/* Search */}
          <Fragment> 
            <div className="px-[10px]">
            <SearchOutlinedIcon    onClick={() => setOpen2(true)} sx={{":hover":{color:"#33333399"},cursor:"pointer"}}/>
          </div>
          <Drawer
              anchor={"bottom"}
              open={open2}
              onClose={() => setOpen2(false)}
            >
              <div className="h-[80vh]"> 
              <div className="relative h-[110px] border-b">
                <input type="text" placeholder="جستجو برای محصول" className="h-[110px] w-full text-center outline-none border-b lg:text-[48px] font-semibold text-[20px] text-[#333]"/>
                <CloseIcon onClick={() => setOpen2(false)} sx={{position:"absolute",top:30,left:20,width:"50px",height:"50px",color:"#777777",cursor:"pointer"}}/>
              </div>
              <div className="flex justify-center w-full mt-[10px] text-[16px] text-[#777777]">
                <span>برای دیدن محصولاتی که به دنبال آن هستید شروع به تایپ کنید.</span>
              </div>
              </div>
          </Drawer>
          </Fragment>
          
          <div className="px-[10px]">
            <Badge badgeContent={2} color="primary">
              <FavoriteBorderIcon  sx={{":hover":{color:"#33333399"},cursor:"pointer"}} />
            </Badge>
          </div>
          <div className="px-[10px]">
            <Badge badgeContent={2} color="primary">
              <MultipleStopIcon  sx={{":hover":{color:"#33333399"},cursor:"pointer"}} />
            </Badge>
          </div>
          <div className="px-[10px]">
            <Badge badgeContent={2} color="primary">
              <ShoppingCartOutlinedIcon sx={{":hover":{color:"#33333399"},cursor:"pointer"}} />
            </Badge>
          </div>
        </div>
    </div>
  );
}

export default Header;
