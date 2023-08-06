import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "8px",
        width: "50px",
        height: "50px",
        color:"#333",
        border: "1px solid #e0e0e6",
        borderRadius: "50%",
        cursor: "pointer",
        backgroundColor:"#fffffff6"
      }}
    >
     <KeyboardArrowUpOutlinedIcon/>
    </Box>
  );
};

export default BackToTopButton;
