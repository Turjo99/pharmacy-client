import React from "react";
import { Link } from "react-router-dom";
import Products from "./Products";

const ProductPage = () => {
  return (
    <div>
      <div className="text-center my-5">
        <button className="btn btn-primary">
          <Link to={"/add"}>Add A Product</Link>
        </button>
      </div>
      <Products></Products>
    </div>
  );
};

export default ProductPage;
