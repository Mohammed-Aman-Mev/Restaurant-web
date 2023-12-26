import React from "react";

const Fresh = () => {
  return (
    <div className="bg-gray-100 p-[20px] w-[100%] h-[500px] flex items-center justify-center">
      <div className="w-[70%]">
        <div className="flex-col justify-between">
          <h3 className="text-center text-[14px] font-bold text-gray-400 mt-5">
            ONLY THE BEST
          </h3>
          <div className="bg-yellow-600 h-[3px] w-[45px] mx-auto mt-3" />
          <h2 className="text-center text-3xl font-semibold mt-3 sm:text-5xl sm:mt-[50px]">
            Fresh Ingredients, Tasty Maels
          </h2>
          <p className="text-center mt-3 sm:mt-[50px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            repudiandae voluptatum similique at eos molestias vitae? Possimus
            sequi, voluptas molestias minus pariatur eligendi neque recusandae
            ratione maiores cupiditate molestiae quae!
          </p>
        </div>
        <div className="flex items-center mt-[40px]">
          <button className="bg-yellow-600 text-sm text-white p-1.5 px-1.5 w-[130px] mx-auto">
            VIEW ITEMS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fresh;
