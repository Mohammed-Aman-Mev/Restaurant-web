import React from "react";

const Gridcom1 = ({ name, price, img }) => {
  return (
    <>
      {name ? (
        <div className="w-[100%] h-[346px] flex items-center justify-center p-2">
          <div>
            <h3 className="text-center text-yellow-600 font-semibold sm:text-2xl">
              {price}
            </h3>
            <h2 className="text-center sm:text-3xl sm:mt-3">{name}</h2>
            <p className="text-center sm:mt-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem, dignissimos voluptas. Excepturi error voluptatibus
              dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Corrupti rem assumenda
            </p>
          </div>
        </div>
      ) : (
        <div
          className="w-[100%] h-[346px] bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: img,
          }}
        ></div>
      )}
    </>
  );
};

export default Gridcom1;
