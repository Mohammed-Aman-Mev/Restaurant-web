import React from "react";

const Contactus = () => {
  return (
    <div
      className="w-full h-auto bg-no-repeat bg-center bg-cover bg-opacity-20"
      style={{
        backgroundImage:
          "url(https://media.istockphoto.com/id/499781725/photo/variety-is-the-spice-of-life.jpg?s=612x612&w=0&k=20&c=epdWtx5Hu2hUVBxuKFvEiWhiYCa88XqlqW5gqC4oBWQ=)",
      }}
    >
      <div className="w-[100%] bg-slate-900 bg-transparent bg-opacity-50 h-[100%] md:px-[100px] md:py-[50px] flex items-center justify-between flex-wrap">
        <div className="bg-gray-800 pt-[70px] text-white flex justify-center h-[500px] mt-[20px] mx-auto w-[100%] md:py-[80px] md:w-[450px] md:h-[650px]">
          <div className="w-full">
            <h2 className="text-center text-3xl">Hours of Operations</h2>
            <h4 className="text-center mt-[40px]">MON - FRI</h4>
            <h4 className="text-center mt-[10px]">10:00am - 1:00pm</h4>
            <h4 className="text-center mt-[10px]">4:00pm - 10:30pm</h4>
            <div className="h-[2px] w-[70%] mx-auto mt-[10px] bg-yellow-600" />
            <h4 className="text-center mt-[10px]">SAT</h4>
            <h4 className="text-center mt-[10px]">10:00am - 1:00pm</h4>
            <div className="h-[2px] mt-[10px] w-[70%] mx-auto bg-yellow-600" />
            <h4 className="text-center mt-[10px]">SUN</h4>
            <h4 className="text-center mt-[10px]">We are closed</h4>
            <div className="flex items-center justify-center">
              <button className="bg-yellow-600 text-[13px] p-1 items-center mx-auto w-[150px] mt-[30px]">
                MAKE A RESERVATION
              </button>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 flex-col text-white items-center justify-between mt-[20px] mx-auto w-[100%] h-auto md:w-[450px] md:h-[650px]">
          <div className="flex-col items-center justify-center mb-[70px]">
            <h4 className="text-center text-xl mt-[80px]">Drop Us a Line</h4>
            <p className="text-center mt-[10px]">
              Lorem ipsum dolor sit amet. Lorem, ipsum dolor.
            </p>
            <div className="flex items-center justify-center mt-[10px]">
              <button className="bg-yellow-600 text-[13px] p-1 items-center mx-auto w-[150px] mt-[30px]">
                MAKE A RESERVATION
              </button>
            </div>
          </div>
          <div className="flex-col items-center mt-[80px]">
            <h2 className="text-center text-[20px]">Our Newsletter</h2>
            <p className="text-center">Lorem ipsum dolor sit amet.</p>
            <input
              type="text"
              placeholder="First Name"
              className="bg-black text-white p-1 mx-auto w-[300px] mt-[10px] block"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="bg-black text-white p-1 mx-auto w-[300px] mt-[10px] block"
            />
            <input
              type="text"
              placeholder="Email"
              className="bg-black text-white p-1 mx-auto w-[300px] mt-[10px] block"
            />
            <button className="p-1 mx-auto w-[300px] mt-[10px] block text-white bg-yellow-600">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
