import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className=" py-3 text-center font-bold bg-neutral text-neutral-content">
        <a className=" normal-case text-4xl  mx-auto ">Medi-Heart</a>
      </div>
      <div className=" text-base ">
        <div className=" text-center my-4">
          <Link to={"/"} className="mx-3  py-2 px-4 btn-outline">
            Home
          </Link>
          <Link to={"banner"} className="mx-3  py-2 px-4 btn-outline">
            Banner
          </Link>
          <Link className="mx-3  py-2 px-4 btn-outline">Products</Link>
          <Link className="mx-3  py-2 px-4 btn-outline">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
