import React from "react";
import { IoStar } from "react-icons/io5";

const TestCom = () => {
  return (
    <li className="flex items-center my-[20px] sm:my-[20px] justify-center w-[100%] sm:w-[250px] mx-auto sm:p-[10px] sm:mx-auto">
      <div className="w-[70%]">
        <div className="flex justify-between w-[200px] sm:w-[100%]">
          <IoStar className="text-yellow-600 text-[13px]" size={"23px"} />
          <IoStar className="text-yellow-600 text-[13px]" size={"23px"} />
          <IoStar className="text-yellow-600 text-[13px]" size={"23px"} />
          <IoStar className="text-yellow-600 text-[13px]" size={"23px"} />
          <IoStar className="text-yellow-600 text-[13px]" size={"23px"} />
        </div>
        <h3 className="text-2xl my-[20px] sm:my-[20px]">"A Great Find"</h3>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          voluptatibus molestiae quo.
        </p>
        <h3 className="font-semibold mt-[15px]">Divi</h3>
      </div>
    </li>
  );
};

export default TestCom;
