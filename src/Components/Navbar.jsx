import React from "react";
import Banner from "./Banner";

const Navbar = () => {
  return (
    <div>
      <nav className="px-14 py-10 ">
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-purple-500">
          DS Portfolio
        </span>
      </nav>
      <Banner />
    </div>
  );
};

export default Navbar;
