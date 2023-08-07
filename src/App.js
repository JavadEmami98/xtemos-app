import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './page';
import Product from './page/Product';
import CheckOut from './page/CheckOut';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/product" element={<Product />} />
      <Route path="/checkout" element={<CheckOut />} />
    </Routes> 
  </BrowserRouter>
  );
}

export default App;
