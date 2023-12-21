import React from "react";
import { item } from "./constent";
import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";


const Navigate = ({ handleToggle, toggle }) => {
  return (
    <div
      className={
        toggle
          ? "w-full h-[100vh] bg-gray-400 flex items-center justify-center p-4 md:hidden"
          : "hidden"
      }
    >
      <div onClick={handleToggle}>
        <ul className="flex-col">
          {item.map((i, j) => (
            <NavLink
              to={i.path}
              key={j}
              className={({ isActive }) =>
                isActive ? "font-bold text-[21px]" : "font-semibold text-[20px]"
              }
            >
              <li>{i.title}</li>
            </NavLink>
          ))}
          <NavLink
            to="/shopingcard"
            
          >
            <li>
              <FaCartShopping size={"25px"} />
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navigate;
