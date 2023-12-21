import React from "react";

const Contactus = () => {
  return (
    <div
      className="w-full h-auto sm:p-[20px] md:p-[40px] bg-no-repeat bg-center bg-cover bg-opacity-20"
      style={{
        backgroundImage:
          "url(https://media.istockphoto.com/id/499781725/photo/variety-is-the-spice-of-life.jpg?s=612x612&w=0&k=20&c=epdWtx5Hu2hUVBxuKFvEiWhiYCa88XqlqW5gqC4oBWQ=)",
      }}
    >
      <div className="w-[100%] h-[100%] md:px-[100px] md:py-[50px] flex items-center justify-between sm:flex-wrap">
        <div className="bg-gray-800 flex items-center justify-center h-[500px] mt-[20px] mx-auto w-[100%] md:w-[450px] md:h-[550px]">
          <div>
            <h2>Hours of Operations</h2>
          </div>
        </div>
        <div className="bg-gray-800 flex items-center justify-center h-[500px] mt-[20px] mx-auto w-[100%] md:w-[450px] md:h-[550px]">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
