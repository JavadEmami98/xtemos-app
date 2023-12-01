import { Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/action/index";

function Tamrin() {
  const [showForm, setShowForm] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [smsCode, setSmsCode] = useState("");
  const dispatch = useDispatch();
  /*  const loading = useSelector((state) => state.auth.loading); */
  /*   const error = useSelector((state) => state.auth.error); */

  const handleLogin = () => {
    axios
      .post("https://api-audiolog.iran.liara.run/api/auth/generate-otp", {
        phoneNumber,
      })
      .then((response) => {
        toggleForm();
      })
      .catch((error) => {
        dispatch(loginFailure(error.message));
      });
  };

  const handleCheckSMS = () => {
    
  }

  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };
  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      {showForm ? (
        <div className="flex gap-3 flex-col rounded-[12px] p-4 bg-[#f0f0f0] border-[1.5px]">
          <div>
            <label htmlFor="">شماره تلفن </label>
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              id="password"
              type="tel"
              className="h-[40px] w-full rounded-[8px] px-2"
            />
          </div>
          <div className="w-full">
            <Button
              onClick={handleLogin}
              /* disabled={loading} */
              variant="contained"
              sx={{ marginTop: "15px", width: "100%" }}
            >
              ثبت
              {/*     {loading ? "Logging in..." : "Login"} */}
            </Button>
            {/*  {error && <p style={{ color: "red" }}>{error}</p>} */}
          </div>
        </div>
      ) : (
        <div className="flex gap-3 flex-col rounded-[12px] p-4 bg-red-300 border-[1.5px]">
          <label htmlFor="">کد </label>
          <input
            onChange={(e) => setSmsCode(e.target.value)}
            type="number"
            className="h-[40px] w-full rounded-[8px] px-2"
          />
          <div className="flex items-center gap-4 w-full">
            <Button
              onClick={toggleForm}
              variant="contained"
              sx={{ marginTop: "15px", width: "100%" }}
            >
              بازگشت
            </Button>
            <Button
              variant="contained"
              sx={{ marginTop: "15px", width: "100%" }}
              onClick={handleCheckSMS}
            >
              ثبت
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tamrin;
/*  const [formData, setFormData] = useState({

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
  }; */

/*  try {
      await axios.post("http://localhost:3001/register", {
        phoneNumber: phoneNumber,
      });
      console.log("SMS sent successfully");
    } catch (error) {
      console.error("Failed to send SMS", error);
    } */

/*  const handleRegistration = async () => {
    try {
      const response = await axios.post("YOUR_AUTH_API_ENDPOINT", phoneNumber);
      const { token } = response.data;

      localStorage.setItem("token", token);

      Tamrin();
    } catch (error) {
      console.error("Login failed", error);
    }
  }; */

/* const handleRegistration = async () => {
    try {
      await axios.post("http://localhost:3001/register", {
        phoneNumber: phoneNumber,
      });
      console.log("SMS sent successfully");
    } catch (error) {
      console.error("Failed to send SMS", error);
    }
  };

  const handleCheckSMS = async () => {
    try {
      await axios.post("http://localhost:3001/check-sms", {
        phoneNumber: phoneNumber,
        smsCode: smsCode,
      });
      console.log("SMS code verified successfully");
    } catch (error) {
      console.error("Failed to verify SMS code", error);
    }
  };

  const dispatch = useDispatch();

  const handleLogin = () => {
    const credentials = { username: "user", password: "password" };
    dispatch(loginUser(credentials));
  };

  useEffect(
    () => {
      // Check for the token in the Redux state
      const token = getState().auth.token;
      const phoneNumber = localStorage.getItem("phoneNumber");

      if (token && phoneNumber) {
        // Redirect to the first page
        history.push("/");
        console.log(`User with phone number ${phoneNumber} is logged in.`);
      }
    },
    [
      /* dependencies */
