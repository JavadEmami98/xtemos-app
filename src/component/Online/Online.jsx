import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import React from "react";
import Pay from "../../page/Pay";

function Online() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className="container mt-8 lg:py-[64px] md:[32px] py-[16px]">
      <Box
        sx={{
          "& .muirtl-1aquho2-MuiTabs-indicator": { display: "none" },
          "& .muirtl-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected": {
            backgroundColor: "#f0f5ff",
            color: "#0040ff",
            borderRadius: "14px",
            border: "2px solid #0040ff",
            fontSize: "17px",
            fontWeight: 700,
          },
          "& .muirtl-13xfq8m-MuiTabPanel-root": { padding: "0px" },
          "& .muirtl-heg063-MuiTabs-flexContainer": {
            border: "2px solid #dee3e7",
            borderRadius: "16px",
            p: "8px",
            m: "0px",
            backgroundColor: "#fff",
          },
          "& .muirtl-1h9z7r5-MuiButtonBase-root-MuiTab-root": {
            fontSize: { lg: "17px", md: "14px", sm: "14px", xs: "14px" },
          },
        }}
      >
        <TabContext value={value}>
          <Box sx={{ width: "100% !important" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              sx={{ width: "100%" }}
            >
              <Tab label="ثبت‌نام آنلاین دریافت وام" value="1" />
              <Tab label=" ثبت‌نام حضوری" value="2" />
            </TabList>
          </Box>

          <TabPanel value="1">
            <div className="lg:mt-[64px] mt-[32px] lg:text-[27px] md:text-[21px] text-[17px] text-center text-[#424c5c] font-black">
              <p>مزایای ثبت نام آنلاین</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 lg:gap-6 gap-2 lg:mt-[32px] mt-[10px]">
              {/* border nadare ,chon bg whhite dasht border gozashtm tashkhis dade beshe */}
              <div className="flex gap-3 items-center rounded-[16px] p-2 border-[1px]  bg-white">
                <div className="flex-[0_0_48px] flex justify-center items-center rounded-[12px] bg-[#fff5ee] h-[48px] ">
                  <img
                    src="https://www.mydigipay.com/static/2023/08/76b12844-2f57-4b82-8e8c-43f4fb2c03fe.svg"
                    alt=""
                    className="h-[24px] w-[24px] object-cover"
                  />
                </div>
                <p className="text-[#2c3544] md:text-[12px] text-[14px] font-bold">
                  {" "}
                  ثبت‌نام آسان{" "}
                </p>
              </div>
              <div className="flex gap-3 items-center rounded-[16px] p-2 border-[1px] bg-white">
                <div className="flex-[0_0_48px] flex justify-center items-center rounded-[12px] bg-[#fff5ee] h-[48px] ">
                  <img
                    src="https://www.mydigipay.com/static/2023/08/8068f0d7-61b8-4b9c-8e2a-fb1ddd798a50.svg"
                    alt=""
                    className="h-[24px] w-[24px] object-cover"
                  />
                </div>
                <p className="text-[#2c3544] md:text-[12px] text-[14px] font-bold">
                  {" "}
                  اعتبار سنجی بسیار سریع{" "}
                </p>
              </div>
              <div className="flex gap-3 items-center rounded-[16px] p-2 border-[1px]  bg-white">
                <div className="flex-[0_0_48px] flex justify-center items-center rounded-[12px] bg-[#fff5ee] h-[48px] ">
                  <img
                    src="https://www.mydigipay.com/static/2023/08/6bc9062a-9227-4aaa-bcbd-21ee5f560b02.svg"
                    alt=""
                    className="h-[24px] w-[24px] object-cover"
                  />
                </div>
                <p className="text-[#2c3544] md:text-[12px] text-[14px] font-bold">
                  {" "}
                  دریافت وام بدون نیاز به ضامن{" "}
                </p>
              </div>
            </div>
            <Pay />
          </TabPanel>
          <TabPanel value="2">hij2</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

export default Online;
