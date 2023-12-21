import React from "react";
import TestCom from "./TestCom";
import { testimonialconst } from "./constent";

const Testimonial = () => {
  return (
    <div className="bg-gray-100 w-[100vw] py-[120px] flex items-center justify-center">
      <div className="sm:w-[80%]">
        <div className="flex-col justify-between">
          <h3 className="text-center text-[14px] font-bold text-gray-400 mt-5">
            TESTIMONIALS
          </h3>
          <div className="bg-yellow-600 h-[3px] w-[45px] mx-auto mt-3" />
          <h2 className="text-center text-3xl font-semibold mt-3 sm:text-5xl sm:mt-[50px]">
            What People are Saying
          </h2>
        </div>
        <div className="mt-[60px] w-[100%] flex">
          <ul className="flex w-full mt-5 justify-between items-center flex-wrap">
            {testimonialconst.map((i, j) => (
              <TestCom key={j} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
