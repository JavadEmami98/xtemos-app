import { Box } from "@mui/material";
import HamMenu from "./HamMenu";
import { Button, Drawer } from "@mui/material";
import React, { Fragment } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";

function HeaderMobile() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #f1f2f4",
          width: "100%",
          height: "60px",
        }}
      >
        <HamMenu />
        <img
          src="https://a6n4d3q9.rocketcdn.me/accessories/wp-content/themes/woodmart/images/wood-logo-dark.svg"
          alt=""
          loading="lazy"
          style={{ height: "35px", objectFit: "cover", padding: "5px 0px" }}
        />

        <div className="flex items-center">
          <Badge badgeContent={2} color="primary">
            <ShoppingCartOutlinedIcon
              onClick={() => setOpen(true)}
              sx={{ mb: "2px" }}
            />
          </Badge>
          <Fragment>
            <Drawer anchor={"left"} open={open} onClose={() => setOpen(false)}>
              <div className="w-[300px] ">
                <div className="flex items-center justify-between px-[15px] py-[20px] h-[66px] text-[18px] text-[#242424] border-b">
                  <p>کارت خرید</p>
                  <div className="flex items-center text-[14px] text-[#333333]">
                    <p>بستن</p>
                    <CloseIcon
                      sx={{ p: "2px", mr: "3px" }}
                      onClick={() => setOpen(false)}
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center mt-[20px] py-[10px] px-[15px]">
                  <RemoveShoppingCartOutlinedIcon
                    sx={{
                      height: "90px",
                      width: "130px",
                      mb: "20px",
                      color: "#f1f1f1",
                    }}
                  />
                  <p className="text-[14px] text-[#242424] mb-[20px]">
                    محصولی یافت نشد
                  </p>
                  <Button
                    variant="contained"
                    sx={{
                      fontSize: "13px",
                      backgroundColor: "#2e6bc6",
                      height: "36px",
                    }}
                  >
                    بازگشت به شاپ
                  </Button>
                </div>
              </div>
            </Drawer>
          </Fragment>
        </div>
      </Box>
    </div>
  );
}

export default HeaderMobile;
