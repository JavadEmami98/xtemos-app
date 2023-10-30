import { Box, Typography, TextField, Button } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import LaptopIcon from "@mui/icons-material/Laptop";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import CachedIcon from "@mui/icons-material/Cached";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import SecurityIcon from "@mui/icons-material/Security";
import InputIcon from "@mui/icons-material/Input";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import React, { useEffect, useState } from "react";
import Register from "../component/Register/Register";

function Admin() {
  const [value, setValue] = React.useState("1");
  const [entredUsername, setEntredUsername] = useState("");


  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const { name, password } = formData;

  const Onchange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const usernameChangeHandler = (event) => {
    setEntredUsername(event.target.value);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <>
      <Box
        sx={{
          backgroundImage:
            "url('https://app.my-tp.ir/assets/images/login/Background.3e8d46d9.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
          mt: "0",
        }}
      >
        <div className="flex flex-col gap-4 items-center">
          <h1 className="font-extrabold text-[#000000] text-[21px]">
            {"<"} خوش آمدید {">"}
          </h1>
          <div className="flex flex-col items-center justify-center">
            <Box
              component={"div"}
              sx={{
                boxShadow:
                  "rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px",
                backgroundColor: "#ffffff",
                borderRadius: "12px",
              }}
            >
              <div>
                <Box
                  sx={{
                    "& .muirtl-1aquho2-MuiTabs-indicator": { display: "none" },
                    "& .muirtl-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected":
                      { backgroundColor: "#9de4fb95", borderRadius: "13px" },
                    "& .muirtl-13xfq8m-MuiTabPanel-root": { padding: "0px" },
                  }}
                >
                  <TabContext value={value}>
                    <Box
                      sx={{
                        borderBottom: "1px solid #ccc",
                        padding: "5px 20px",
                        margin: "0px 20px 10px",
                      }}
                    >
                      <TabList
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                      >
                        <Tab label=" ورود با نام کاربری" value="1" />
                        <Tab label=" ورود با رمز یکبار مصرف" value="2" />
                        <Tab label=" ورود با QR" value="3" />
                      </TabList>
                    </Box>
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-2 min-h-[530px]">
                      <div className="lg:col-span-2 md:col-span-2 col-span-1 ">
                        <TabPanel value="1">
                          <div className="flex flex-col gap-6 items-center p-3">
                            <h1 className="text-[21px] text-[#000000] font-semibold">
                              ورود با نام کاربری
                            </h1>
                            <TextField
                              onChange={Onchange}
                              value={name}
                              id="name"
                              type="text"
                              label="نام کاربری/کد ملی"
                              variant="outlined"
                              sx={{
                                width: "100%",
                                "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input:focus":
                                  { color: "#673ab7 !important" },
                              }}
                            />
                            <FormControl
                              sx={{ width: "100%" }}
                              variant="outlined"
                            >
                              <InputLabel htmlFor="outlined-adornment-password">
                                رمز عبور
                              </InputLabel>
                              <OutlinedInput
                                id="password"
                                value={password}
                                onChange={Onchange}
                                type={showPassword ? "text" : "password"}
                                endAdornment={
                                  <InputAdornment position="end">
                                    <IconButton
                                      aria-label="toggle password visibility"
                                      onClick={handleClickShowPassword}
                                      onMouseDown={handleMouseDownPassword}
                                      edge="end"
                                    >
                                      {showPassword ? (
                                        <VisibilityOff />
                                      ) : (
                                        <Visibility />
                                      )}
                                    </IconButton>
                                  </InputAdornment>
                                }
                                label="رمز عبور"
                              />
                            </FormControl>
                            <TextField
                              id="outlined-basic"
                              label="تصویر امنیتی "
                              variant="outlined"
                              sx={{
                                width: "100%",
                                "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input:focus":
                                  { color: "#673ab7 !important" },
                              }}
                            />
                            <Box
                              sx={{
                                display: "flex",
                                border: "1px solid #b9b9b9",
                                borderRadius: "4px",
                                width: "100%",
                              }}
                            >
                              <img
                                src="data:image/png;base64, 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"
                                alt=""
                                className="w-full"
                              />

                              {/*   <Skeleton
                                variant="rounded"
                                width={200}
                                height={53}
                                animation="wave"
                              /> */}
                              <IconButton
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  padding: "15px 20px",
                                  cursor: "pointer",
                                }}
                              >
                                <CachedIcon sx={{ color: "#03a9f4" }} />
                              </IconButton>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                width: "100%",
                                justifyContent: "space-between",
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  cursor: "pointer",
                                  ":hover": {
                                    background: "#2196f31c",
                                  },
                                  alignItems: "center",
                                  color: "#2196f3",
                                  gap: "2px",
                                }}
                              >
                                <SecurityIcon
                                  sx={{
                                    padding: "3px !important",
                                    fontSize: { md: "1.2rem" },
                                  }}
                                />
                                <Typography sx={{ fontSize: { md: "0.8rem" } }}>
                                  ارسال/فراموشی رمز عبور
                                </Typography>
                              </Box>

                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  cursor: "pointer",
                                  color: "#2196f3",
                                  gap: "2px",
                                  borderRadius: "4px",
                                  ":hover": {
                                    background: "#2196f31c",
                                  },
                                }}
                              >
                                <CardMembershipIcon
                                  sx={{
                                    padding: "3px !important",
                                    fontSize: { md: "1.2rem" },
                                  }}
                                />
                                <Typography sx={{ fontSize: { md: "0.8rem" } }}>
                                  ثبت نام مودی
                                </Typography>
                              </Box>
                            </Box>
                            <Box sx={{ my: "3.25px", width: "100%" }}>
                              <Button
                                onClick={addUserHandler}
                                variant="contained"
                                sx={{
                                  height: "3.1rem",
                                  fontSize: "11px",
                                  width: "100% !important",
                                  background: "#2196f3",
                                }}
                              >
                                <LaptopIcon />
                                <Typography sx={{ mx: "0.7rem" }}>
                                  ورود
                                </Typography>
                                <InputIcon />
                              </Button>
                            </Box>
                          </div>
                        </TabPanel>

                        <TabPanel value="2">
                          <Register />
                        </TabPanel>

                        <TabPanel value="3">
                          <div className="my-auto  mx-auto  mt-2 px-2">
                            <h1 className="text-[21px] mb-[24px] text-center font-bold">
                              ورود با QR
                            </h1>
                            <div className="flex flex-col items-center border w-full">
                              <div className="relative w-full text-center px-[10px] py-[2px] m-1 bg-[#cb243124] text-[12px] text-[#cb2431]">
                                NotAllowedError: Permission denied
                                <img
                                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NjAgNDYwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NjAgNDYwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNMjMwIDBDMTAyLjk3NSAwIDAgMTAyLjk3NSAwIDIzMHMxMDIuOTc1IDIzMCAyMzAgMjMwIDIzMC0xMDIuOTc0IDIzMC0yMzBTMzU3LjAyNSAwIDIzMCAwem0zOC4zMzMgMzc3LjM2YzAgOC42NzYtNy4wMzQgMTUuNzEtMTUuNzEgMTUuNzFoLTQzLjEwMWMtOC42NzYgMC0xNS43MS03LjAzNC0xNS43MS0xNS43MVYyMDIuNDc3YzAtOC42NzYgNy4wMzMtMTUuNzEgMTUuNzEtMTUuNzFoNDMuMTAxYzguNjc2IDAgMTUuNzEgNy4wMzMgMTUuNzEgMTUuNzFWMzc3LjM2ek0yMzAgMTU3Yy0yMS41MzkgMC0zOS0xNy40NjEtMzktMzlzMTcuNDYxLTM5IDM5LTM5IDM5IDE3LjQ2MSAzOSAzOS0xNy40NjEgMzktMzkgMzl6Ii8+PC9zdmc+"
                                  alt=""
                                  className="h-[14px] absolute top-0 right-1 opacity-[0.6]"
                                />
                              </div>
                              <img
                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNzEuNjQzIDM3MS42NDMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM3MS42NDMgMzcxLjY0MyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZD0iTTEwNS4wODQgMzguMjcxaDE2My43Njh2MjBIMTA1LjA4NHoiLz48cGF0aCBkPSJNMzExLjU5NiAxOTAuMTg5Yy03LjQ0MS05LjM0Ny0xOC40MDMtMTYuMjA2LTMyLjc0My0yMC41MjJWMzBjMC0xNi41NDItMTMuNDU4LTMwLTMwLTMwSDEyNS4wODRjLTE2LjU0MiAwLTMwIDEzLjQ1OC0zMCAzMHYxMjAuMTQzaC04LjI5NmMtMTYuNTQyIDAtMzAgMTMuNDU4LTMwIDMwdjEuMzMzYTI5LjgwNCAyOS44MDQgMCAwIDAgNC42MDMgMTUuOTM5Yy03LjM0IDUuNDc0LTEyLjEwMyAxNC4yMjEtMTIuMTAzIDI0LjA2MXYxLjMzM2MwIDkuODQgNC43NjMgMTguNTg3IDEyLjEwMyAyNC4wNjJhMjkuODEgMjkuODEgMCAwIDAtNC42MDMgMTUuOTM4djEuMzMzYzAgMTYuNTQyIDEzLjQ1OCAzMCAzMCAzMGg4LjMyNGMuNDI3IDExLjYzMSA3LjUwMyAyMS41ODcgMTcuNTM0IDI2LjE3Ny45MzEgMTAuNTAzIDQuMDg0IDMwLjE4NyAxNC43NjggNDUuNTM3YTkuOTg4IDkuOTg4IDAgMCAwIDguMjE2IDQuMjg4IDkuOTU4IDkuOTU4IDAgMCAwIDUuNzA0LTEuNzkzYzQuNTMzLTMuMTU1IDUuNjUtOS4zODggMi40OTUtMTMuOTIxLTYuNzk4LTkuNzY3LTkuNjAyLTIyLjYwOC0xMC43Ni0zMS40aDgyLjY4NWMuMjcyLjQxNC41NDUuODE4LjgxNSAxLjIxIDMuMTQyIDQuNTQxIDkuMzcyIDUuNjc5IDEzLjkxMyAyLjUzNCA0LjU0Mi0zLjE0MiA1LjY3Ny05LjM3MSAyLjUzNS0xMy45MTMtMTEuOTE5LTE3LjIyOS04Ljc4Ny0zNS44ODQgOS41ODEtNTcuMDEyIDMuMDY3LTIuNjUyIDEyLjMwNy0xMS43MzIgMTEuMjE3LTI0LjAzMy0uODI4LTkuMzQzLTcuMTA5LTE3LjE5NC0xOC42NjktMjMuMzM3YTkuODU3IDkuODU3IDAgMCAwLTEuMDYxLS40ODZjLS40NjYtLjE4Mi0xMS40MDMtNC41NzktOS43NDEtMTUuNzA2IDEuMDA3LTYuNzM3IDE0Ljc2OC04LjI3MyAyMy43NjYtNy42NjYgMjMuMTU2IDEuNTY5IDM5LjY5OCA3LjgwMyA0Ny44MzYgMTguMDI2IDUuNzUyIDcuMjI1IDcuNjA3IDE2LjYyMyA1LjY3MyAyOC43MzMtLjQxMyAyLjU4NS0uODI0IDUuMjQxLTEuMjQ1IDcuOTU5LTUuNzU2IDM3LjE5NC0xMi45MTkgODMuNDgzLTQ5Ljg3IDExNC42NjEtNC4yMjEgMy41NjEtNC43NTYgOS44Ny0xLjE5NCAxNC4wOTJhOS45OCA5Ljk4IDAgMCAwIDcuNjQ4IDMuNTUxIDkuOTU1IDkuOTU1IDAgMCAwIDYuNDQ0LTIuMzU4YzQyLjY3Mi0zNi4wMDUgNTAuODAyLTg4LjUzMyA1Ni43MzctMTI2Ljg4OC40MTUtMi42ODQuODIxLTUuMzA5IDEuMjI5LTcuODYzIDIuODM0LTE3LjcyMS0uNDU1LTMyLjY0MS05Ljc3Mi00NC4zNDV6bS0yMzIuMzA4IDQyLjYyYy01LjUxNCAwLTEwLTQuNDg2LTEwLTEwdi0xLjMzM2MwLTUuNTE0IDQuNDg2LTEwIDEwLTEwaDE1djIxLjMzM2gtMTV6bS0yLjUtNTIuNjY2YzAtNS41MTQgNC40ODYtMTAgMTAtMTBoNy41djIxLjMzM2gtNy41Yy01LjUxNCAwLTEwLTQuNDg2LTEwLTEwdi0xLjMzM3ptMTcuNSA5My45OTloLTcuNWMtNS41MTQgMC0xMC00LjQ4Ni0xMC0xMHYtMS4zMzNjMC01LjUxNCA0LjQ4Ni0xMCAxMC0xMGg3LjV2MjEuMzMzem0zMC43OTYgMjguODg3Yy01LjUxNCAwLTEwLTQuNDg2LTEwLTEwdi04LjI3MWg5MS40NTdjLS44NTEgNi42NjgtLjQzNyAxMi43ODcuNzMxIDE4LjI3MWgtODIuMTg4em03OS40ODItMTEzLjY5OGMtMy4xMjQgMjAuOTA2IDEyLjQyNyAzMy4xODQgMjEuNjI1IDM3LjA0IDUuNDQxIDIuOTY4IDcuNTUxIDUuNjQ3IDcuNzAxIDcuMTg4LjIxIDIuMTUtMi41NTMgNS42ODQtNC40NzcgNy4yNTEtLjQ4Mi4zNzgtLjkyOS44LTEuMzM1IDEuMjYxLTYuOTg3IDcuOTM2LTExLjk4MiAxNS41Mi0xNS40MzIgMjIuNjg4aC05Ny41NjRWMzBjMC01LjUxNCA0LjQ4Ni0xMCAxMC0xMGgxMjMuNzY5YzUuNTE0IDAgMTAgNC40ODYgMTAgMTB2MTM1LjU3OWMtMy4wMzItLjM4MS02LjE1LS42OTQtOS4zODktLjkxNC0yNS4xNTktMS42OTQtNDIuMzcgNy43NDgtNDQuODk4IDI0LjY2NnoiLz48cGF0aCBkPSJNMTc5LjEyOSA4My4xNjdoLTI0LjA2YTUgNSAwIDAgMC01IDV2MjQuMDYxYTUgNSAwIDAgMCA1IDVoMjQuMDZhNSA1IDAgMCAwIDUtNVY4OC4xNjdhNSA1IDAgMCAwLTUtNXpNMTcyLjYyOSAxNDIuODZoLTEyLjU2VjEzMC44YTUgNSAwIDEgMC0xMCAwdjE3LjA2MWE1IDUgMCAwIDAgNSA1aDE3LjU2YTUgNSAwIDEgMCAwLTEwLjAwMXpNMjE2LjU2OCA4My4xNjdoLTI0LjA2YTUgNSAwIDAgMC01IDV2MjQuMDYxYTUgNSAwIDAgMCA1IDVoMjQuMDZhNSA1IDAgMCAwIDUtNVY4OC4xNjdhNSA1IDAgMCAwLTUtNXptLTUgMjQuMDYxaC0xNC4wNlY5My4xNjdoMTQuMDZ2MTQuMDYxek0yMTEuNjY5IDEyNS45MzZIMTk3LjQxYTUgNSAwIDAgMC01IDV2MTQuMjU3YTUgNSAwIDAgMCA1IDVoMTQuMjU5YTUgNSAwIDAgMCA1LTV2LTE0LjI1N2E1IDUgMCAwIDAtNS01eiIvPjwvc3ZnPg=="
                                alt=""
                                className="h-[64px] py-2"
                              />
                              <button className="py-[10px] px-2 text-[16px] text-center">
                                برای ثبت پرمیژن استفاده از دوربین گوشی کلیک کنید
                              </button>
                            </div>
                            <div className="flex justify-end">
                              <Button
                                variant="outlined"
                                sx={{
                                  fontSize: "14px",
                                  color: "#673ab7",
                                  border: "1px solid #673ab780",
                                  mt: "34px",
                                }}
                              >
                                بازگشت
                              </Button>
                            </div>
                          </div>
                        </TabPanel>
                      </div>
                      <div className="lg:col-span-2 md:col-span-2 col-span-1 py-2">
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            gap: "24px",
                            pt: 1,
                          }}
                        >
                          <img
                            src="/images/mana.png"
                            alt=""
                            className="md:w-[130px] w-[50px]"
                          />
                          <p className="font-bold text-[16px]">
                            سامانه مودیان مــانــا
                          </p>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                            }}
                          >
                            <SupportAgentIcon sx={{ color: "#20a8d8" }} />
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                color: "#20a8d8",
                                fontWeight: 700,
                                alignItems: "end",
                              }}
                            >
                              <p className="cursor-pointer hover:text-[#000000]">
                                05138813010
                              </p>
                              <p className="cursor-pointer hover:text-[#000000]">
                                09108101067
                              </p>
                            </Box>
                          </Box>
                        </Box>
                      </div>
                    </div>
                  </TabContext>
                </Box>
              </div>
            </Box>
          </div>
        </div>
      </Box>
    </>
  );
}

export default Admin;
