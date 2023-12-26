import React from "react";
import NewsCard from "./NewsCard";
import { news } from "./constent";

const NewsandEvents = () => {
  return (
    <div className="bg-gray-100 w-[100%] py-[120px] flex items-center justify-center">
      <div className="sm:w-[80%]">
        <div className="flex-col justify-between">
          <h3 className="text-center text-[14px] font-bold text-gray-400 mt-5">
            DON'T MISS
          </h3>
          <div className="bg-yellow-600 h-[3px] w-[45px] mx-auto mt-3" />
          <h2 className="text-center text-3xl font-semibold mt-3 sm:text-5xl sm:mt-[50px]">
            Our News and Events
          </h2>
          <p className="text-center mx-auto font-semibold text-gray-400 my-[30px] sm:my-[35px] sm:w-[70%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            quam facilis necessitatibus Lorem ipsum dolor sit, amet consectetur
            adipisicing.
          </p>
        </div>
        <div className="flex my-[100px] w-full justify-between flex-wrap">
          {news.map((i, j) => (
            <NewsCard key={j} data={i} />
          ))}
        </div>
        <div className="flex w-full justify-center items-center">
          <button className="bg-yellow-600 text-sm text-white p-1.5 px-1.5 w-[130px] mx-auto">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsandEvents;
