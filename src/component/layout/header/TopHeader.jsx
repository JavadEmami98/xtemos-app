import React, { useEffect, useState } from "react";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { Box } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Badge from "@mui/material/Badge";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const menu = [
  { title: "قاب ها" },
  { title: "قاب ها" },
  { title: "قاب ها" },
  { title: "قاب ها" },
  { title: "قاب ها" },
  { title: "قاب ها" },
];

const TopHeader = () => {
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
  return (
    <Box
      sx={{
        top: scrollPosition > 85 ? "0px" : "-80px",
        transition: "all 400ms ease",
        borderBottom: " 2px solid rgba(0, 0, 0, 0.12)",
      }}
      className="fixed bg-white z-40 right-0 left-0  "
      component={"nav"}
    >
      <div className="flex justify-between container items-center h-[60px]">
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
                <p className=" py-[10px] text-[#848484] hover:text-[#2e6bc6] cursor-pointer">
                  قاب آیفون
                </p>
                <p className=" py-[10px] text-[#848484] hover:text-[#2e6bc6] cursor-pointer">
                  قاب آیفون
                </p>
                <p className=" py-[10px] text-[#848484] hover:text-[#2e6bc6] cursor-pointer">
                  قاب آیفون
                </p>
                <p className=" py-[10px] text-[#848484] hover:text-[#2e6bc6] cursor-pointer">
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
          <div className="px-[10px]">
            <SearchOutlinedIcon  sx={{":hover":{color:"#33333399"},cursor:"pointer"}}/>
          </div>
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
    </Box>
  );
};

export default TopHeader;
