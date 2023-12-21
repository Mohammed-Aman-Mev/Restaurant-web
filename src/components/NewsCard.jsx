import React from "react";

const NewsCard = ({ data }) => {
  return (
    <div className="w-[90%] sm:w-[350px] h-auto md:w-[300px] bg-white mt-[20px] mx-auto">
      <div
        className="w-[100%] h-[200px] sm:h-[240px] bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: data.img,
        }}
      ></div>
      <div className="flex items-center justify-center h-auto">
        <div className="flex-col w-[100%] h-auto px-[15px] py-[25px] justibe">
          <h3 className="text-[16px] font-semibold">{data.name} lorem</h3>
          <h4 className="font-bold text-[13px] my-[5px] text-yellow-600">
            {data.category}
          </h4>
          <p className="text-[14px] font-semibold text-gray-400">
            {data.comments}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
