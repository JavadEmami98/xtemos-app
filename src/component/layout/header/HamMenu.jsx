import React, { Fragment } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TabHamMenu from "./TabHamMenu";

const HamMenu = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Fragment>
      <div>
        <Box sx={{ display: "flex", alignItems: "center", overflowY: "auto" }}>
          <MenuIcon onClick={() => setOpen(true)} />
          <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #f1f2f4",
                width: "300px",
              }}
            >
              <div className="relative w-full">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="جستجو برای محصولات"
                  className="h-[70px] w-full pr-[20px] pl-[50px]"
                />
                <div className="absolute top-5 left-4">
                  <SearchIcon sx={{ color: "#777" }} />
                </div>
              </div>
            </Box>
            <TabHamMenu />
          </Drawer>
        </Box>
      </div>
    </Fragment>
  );
};

export default HamMenu;
