import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

function Register() {
  const [inputValue, setInputValue] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);
  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    console.log(phoneNumber);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  const resendOTP = () => {
    setMinutes(1);
    setSeconds(30);
  };
  /* 
  const handleRegistration = async () => {
    try {
      await axios.post("http://localhost:3001/register", {
        phoneNumber: phoneNumber,
      });
      console.log("SMS sent successfully");
    } catch (error) {
      console.error("Failed to send SMS", error);
    }
  }; */

  return (
    <div>
      <div className="px-4">
        {currentStep === 1 ? (
          <>
            {" "}
            <div className="px-[15px] text-[20px] mt-[20px] text-center font-bold">
              ورود با رمز عبور یک بار مصرف
            </div>
            <TextField
              value={inputValue}
              onChange={handleInputChange}
              id="outlined-basic"
              label="تلفن همراه"
              variant="outlined"
              type="tel"
              sx={{
                width: "100%",
                mt: "24px",
              }}
            />
            <div className="flex gap-2 justify-between mt-[20px] px-[12px] w-full">
              <Button
                onClick={handleNumberChange}
                disabled={inputValue.length <= 9}
                type="tel"
                variant="contained"
                sx={{
                  fontSize: "16px",
                  minWidth: "64px !important",
                  width: "100%",
                }}
              >
                ثبت
              </Button>
              <Button
                variant="outlined"
                sx={{
                  fontSize: "16px",
                  minWidth: "64px !important",
                  width: "100%",
                }}
              >
                بازگشت
              </Button>
            </div>
            <div className="flex items-center gap-3 px-3 mt-4 text-[12px]">
              {seconds > 0 || minutes > 0 ? (
                <p>
                  زمان باقی مانده تا ارسال مجدد رمز :{" "}
                  {minutes < 10 ? `0${minutes}` : minutes}:
                  {seconds < 10 ? `0${seconds}` : seconds}
                </p>
              ) : (
                <p className="text-[12px]">کد را دریافت نکرده اید؟ </p>
              )}

              <Button
                variant="outlined"
                disabled={seconds > 0 || minutes > 0}
                style={{
                  color: seconds > 0 || minutes > 0 ? "#673ab7" : "#673ab7",
                }}
                onClick={resendOTP}
                sx={{ fontSize: "12px", padding: "3px 9px", color: "#673ab7" }}
              >
                دریافت مجدد کد
              </Button>
            </div>
          </>
        ) : currentStep === 2 ? (
          <>
            <div className="px-[15px] text-[20px] mt-[20px] text-center font-bold">
            vvvvvvv
            </div>
            <TextField
              value={inputValue}
              onChange={handleInputChange}
              id="outlined-basic"
              label="تلفن همراه"
              variant="outlined"
              type="tel"
              sx={{
                width: "100%",
                mt: "24px",
              }}
            />
            <div className="flex gap-2 justify-between mt-[20px] px-[12px] w-full">
             
              <Button
                variant="outlined"
                sx={{
                  fontSize: "16px",
                  minWidth: "64px !important",
                  width: "100%",
                }}
              >
                بازگشت
              </Button>
            </div>

            <div className="flex items-center gap-3 px-3 mt-4 text-[12px]">
              {seconds > 0 || minutes > 0 ? (
                <p>
                  زمان باقی مانده تا ارسال مجدد رمز :{" "}
                  {minutes < 10 ? `0${minutes}` : minutes}:
                  {seconds < 10 ? `0${seconds}` : seconds}
                </p>
              ) : (
                <p className="text-[12px]">کد را دریافت نکرده اید؟ </p>
              )}

              <Button
                variant="outlined"
                disabled={seconds > 0 || minutes > 0}
                style={{
                  color: seconds > 0 || minutes > 0 ? "#673ab7" : "#673ab7",
                }}
                onClick={resendOTP}
                sx={{ fontSize: "12px", padding: "3px 9px", color: "#673ab7" }}
              >
                دریافت مجدد کد
              </Button>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Register;
