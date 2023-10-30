import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./page";
import Product from "./page/Product";
import CheckOut from "./page/CheckOut";
import EmptyCheckout from "./page/EmptyCheckout";
import Cart from "./page/Cart";
import Login from "./page/Login";
import LoginPassword from "./page/LoginPassword";
import ContactUs from "./page/ContactUs";
import Admin2 from "./page/Admin2";
import "./App.css";
import CustomSize from "./page/CustomSize";
import Step1 from "./page/Step1";
import Step2 from "./page/Step2";
import Step3 from "./page/Step3";
import Step4 from "./page/Step4";
import Step5 from "./page/Step5";
import Step51 from "./page/Step51";
import Payment from "./page/Payment";
import Admin from "./page/Admin";
import Okala from "./page/Okala";


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/product" element={<Product />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/emptycheckout" element={<EmptyCheckout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginpassword" element={<LoginPassword />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin2" element={<Admin2 />} />
        <Route path="/customsize" element={<CustomSize />} />
        <Route path="/step1" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
        <Route path="/step4" element={<Step4 />} />
        <Route path="/step5" element={<Step5 />} />
        <Route path="/step51" element={<Step51 />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/okala" element={<Okala />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
