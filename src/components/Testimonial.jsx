import React from "react";
import TestCom from "./TestCom";

const Testimonial = () => {
  const arr = [
    {
      name: "Divi",
      first: "A Great Find",
      com: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Consequatur voluptatibus molestiae quo.",
    },
    {
      name: "Divi",
      first: "A Great Find",
      com: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Consequatur voluptatibus molestiae quo.",
    },
    {
      name: "Divi",
      first: "A Great Find",
      com: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Consequatur voluptatibus molestiae quo.",
    },
    {
      name: "Divi",
      first: "A Great Find",
      com: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Consequatur voluptatibus molestiae quo.",
    },
  ];
  return (
    <div className="bg-gray-100 p-[10px] w-[100vw] h-[500px] flex items-center justify-center">
      <div className="w-[70%]">
        <div className="flex-col justify-between">
          <h3 className="text-center text-[14px] font-bold text-gray-400 mt-5">
            TESTIMONIALS
          </h3>
          <div className="bg-yellow-600 h-[3px] w-[45px] mx-auto mt-3" />
          <h2 className="text-center text-3xl font-semibold mt-3 sm:text-5xl sm:mt-[50px]">
            What People are Saying
          </h2>
          <ul className="flex w-full mt-5">
            {arr.map((i, j) => 
              <TestCom key={j} />
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
