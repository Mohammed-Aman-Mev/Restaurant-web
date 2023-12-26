import React from "react";
import Gridcom1 from "./Gridcom1";
import { mealItem } from "./constent";

const MealsSection = () => {
  return (
    <div className="lg:px-[100px] bg-black w-[100%]">
      <div className="grid w-[100%] h-[400%] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto bg-white">
        {mealItem.map((i, j) => (
          <Gridcom1 key={j} name={i.name} price={i.price} img={i.img} />
        ))}
      </div>
    </div>
  );
};

export default MealsSection;
