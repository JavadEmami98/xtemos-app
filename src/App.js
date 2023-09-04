import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./page";
import Product from "./page/Product";
import CheckOut from "./page/CheckOut";
import EmptyCheckout from "./page/EmptyCheckout";
import Cart from "./page/Cart";
import Login from "./page/Login";
import LoginPassword from "./page/LoginPassword";
import ContactUs from "./page/ContactUs";
import Pay from "./page/Pay";

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
        <Route path="/pay" element={<Pay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
