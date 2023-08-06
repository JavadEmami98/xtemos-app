import React from "react";
import Swiper1 from "../component/Swiper1/Swiper1";
import Swiper2 from "../component/Swiepr2/Swiper2";
import { Container } from "@mui/material";
import Part1 from "../component/Part1/Part1";
import CustomTab from "../component/Tab/Tab";
import Part2 from "../component/Part2/Part2";
import Swiper3 from "../component/Swiper3/Swiper3";
import GridFour from "../component/GridFour/GridFour";
import Part3 from "../component/Part3/Part3";
import Swiper4 from "../component/Swiper4/Swiper4";
import Part4 from "../component/Part4/Part4";
import Swiper5 from "../component/Swiper5/Swiper5";
import GridPics from "../component/GridPics/GridPics";
import Footer from "../component/layout/footer/Footer";
import BottomNavigation from "../component/layout/footer/BottomNavigation";
import BackToTopButton from "../component/BackToTop/BackToTop";
import IndexHeader from "../component/layout/header/IndexHeader";

function Index() {
  return (
    <div>
      <Container maxWidth="lg">
        <IndexHeader />
      </Container>
      <Swiper1 />
      <Container maxWidth="lg">
        <Swiper2 />
        <Part1 />
        <CustomTab />
        <Part2 />
        <Swiper3 />
        <GridFour />
        <Part3 />
        <Swiper4 />
        <Part4 />
        <Swiper5 />
      </Container>
      <GridPics />
      <div className="relative">
        <Footer />
        <div className="absolute top-2 left-3 z-10">
          <BackToTopButton />
        </div>
      </div>
      <div className="lg:hidden block">
        <BottomNavigation />
      </div>
    </div>
  );
}

export default Index;
