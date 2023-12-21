import React from "react";

const StorySection = () => {
  return (
    <div className="w-[100%] h-auto p-[5%] font-sans">
      <div className="w-full h-auto flex-wrap flex sm:p-7 md:flex-nowrap px-auto">
        <div className="w-full h-[600px] flex-col justify-between p-5 items-center py-[10%]">
          <h3 className="text-gray-400 text-[13px] font-bold">OUR STORY</h3>
          <div className="bg-yellow-600 w-[50px] h-[3px] mt-2" />
          <h2 className="mt-4 text-4xl">Welcome To Royal</h2>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            quidem quo deserunt tenetur dolore adipisci quas et tempora illum
            cupiditate vel dolor sequi, eveniet, pariatur fugiat, nulla placeat
            eius ipsum?Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nihil itaque dolores accusantium unde deserunt doloribus blanditiis.
            Qui nesciunt nisi sequi.
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eos
            quasi sapiente sunt non ducimus ratione, officiis eum atque soluta
            tempora quis rem cum? Dolores a suscipit minima soluta Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Doloribus laborum enim
            reiciendis soluta inventore voluptatem modi exercitationem. Dolore,
            quidem optio. do
          </p>
        </div>
        <div
          className="w-full h-[600px] bg-no-repeat bg-center bg-cover mt-5"
          style={{
            backgroundImage:
              "url(https://media.istockphoto.com/id/857307942/photo/vegetarian-restaurant-food-indian-fruit-salad.jpg?s=612x612&w=0&k=20&c=xRRmFoDRhtmaaCqIeDqSdxoqVDfoS7DOwmxuD-B2jrE=)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default StorySection;
