import React from "react";
import { IoStar } from "react-icons/io5";

const TestCom = () => {
  return (
    <li className="flex items-center justify-center">
      <div>
        <div className="flex">
          <IoStar className="text-yellow-600 text-[13px]" size={"20px"} />
          <IoStar className="text-yellow-600 text-[13px]" size={"20px"} />
          <IoStar className="text-yellow-600 text-[13px]" size={"20px"} />
          <IoStar className="text-yellow-600 text-[13px]" size={"20px"} />
          <IoStar className="text-yellow-600 text-[13px]" size={"20px"} />
        </div>
        <h3>"A Great Find"</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          voluptatibus molestiae quo.
        </p>
        <h3 className="font-semibold">Divi</h3>
      </div>
    </li>
  );
};

export default TestCom;
