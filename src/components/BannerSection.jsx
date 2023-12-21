import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";

const BannerSection = () => {
  return (
    <section
      className="w-full h-[100vh] bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage:
          "url(https://media.istockphoto.com/id/74411700/photo/chef-chopping-parsley.jpg?s=612x612&w=0&k=20&c=56QQoZ8iELg9Hw-uuITFPWTk1_61NLXSx3eUEQJRKEU=)",
      }}
    >
      <div className="w-full h-[100%] bg-gray-900 bg-opacity-65 flex justify-center items-center">
        <div className="flex-col justify-between sm:w-[50%] mt-9">
          <h1 className="text-white bg-transparent text-4xl text-center sm:text-4xl md:text-5xl ">
            Only Quality Food
          </h1>
          <p className="text-gray-300 mt-9 text-center px-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur, tenetur eius consequatur doloremque ipsa molestias
            laudantium rerum temporibus labore blanditiis! Doloribus enim nulla
            velit molestiae aspernatur.
          </p>
          <div className="w-[260px] mx-auto flex justify-between mt-9">
            <button className="p-1 text-sm text-white border-2 border-white px-2 w-[120px]">
              VIEW MENU
            </button>
            <button className="bg-yellow-600 text-sm text-white p-1.5 px-1.5 w-[120px]">
              RESEVATION
            </button>
          </div>
          <div className="p-0 flex items-center justify-center mt-[50px]">
            <FaArrowDownLong color="white" size={"20px"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
