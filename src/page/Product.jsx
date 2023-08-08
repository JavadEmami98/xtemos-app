import React from "react";
import IndexHeader from "../component/layout/header/IndexHeader";
import ProductDetail from "../component/ProductDetail/ProductDetail";

function Product() {
  return (
    <div>
      <div className="container">
        <IndexHeader />
        <ProductDetail />
      </div>
    </div>
  );
}

export default Product;
