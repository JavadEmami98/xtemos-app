import { Button, Drawer, Typography } from "@mui/material";
import React, { Fragment,  useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";

function ShopCart() {
    const [open, setOpen] = React.useState(false);
    const [activeItem, setActiveItem] = useState("");

    const handleClick = (item) => {
      setActiveItem(item);
    };
  return (
    <div>
          <div
          onClick={() => handleClick("fav")}
          style={{ color: activeItem === "fav" ? "gray" : "black" }}
          className="flex flex-col justify-center items-center w-full"
        >
          <Badge badgeContent={2} color="primary">
            <ShoppingCartOutlinedIcon sx={{ mb: "2px" }} />
          </Badge>
          <Fragment>
            <Typography onClick={() => setOpen(true)} sx={{ fontSize: "10px" }}>
              کارت
            </Typography>
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
    </div>
  )
}

export default ShopCart