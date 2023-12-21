import React, { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";

import { item } from "./constent";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Navbar = ({ handleToggle, toggle }) => {
  return (
    <nav className="flex bg-white h-[70px] justify-between items-center px-8 w-full sticky top-0">
      <div className="w-[70%] sm:w-[50%] md:w-[35%]">
        <h3 className="font-sans w-full font-semibold text-xl sm:text-2xl md:text-xl">
          Restaurant Landing Page
        </h3>
      </div>
      <div className="hidden sm:flex md:w-[60%] xl:w-[50%]">
        <ul className={"hidden md:flex sm:justify-between font-sans w-full"}>
          {item.map((i, j) => (
            <NavLink
              to={i.path}
              key={j}
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-[21px] md:text-[16px]"
                  : "font-semibold text-[20px] md:text-[15px]"
              }
            >
              <li>{i.title}</li>
            </NavLink>
          ))}
          <NavLink to="/shopingcard">
            <li>
              <FaCartShopping size={"20px"} />
            </li>
          </NavLink>
        </ul>
      </div>
      <div className="w-[30px] md:hidden" onClick={handleToggle}>
        <IoReorderThreeOutline size={"25px"} />
      </div>
    </nav>
  );
};

export default Navbar;
