import React from "react";
import { useMediaQuery } from "@mui/material";
import Header from "./Header";
import TopHeader from "./TopHeader";
import HeaderMobile from "./HeaderMobile";

function IndexHeader() {
  const isLg = useMediaQuery("(min-width:975px)");

  return (
    <>
      {isLg ? (
        <>
          <Header />
          <TopHeader />
        </>
      ) : (
        <>
        <HeaderMobile/>
        </>
      )}
    </>
  );
}

export default IndexHeader;
