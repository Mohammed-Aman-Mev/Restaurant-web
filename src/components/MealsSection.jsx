import React from "react";
import Gridcom1 from "./Gridcom1";
import Gridcom2 from "./Gridcom2";

const MealsSection = () => {
  const arr = [
    {
      name: "name1",
      price: "$10",
      img: "url(https://media.istockphoto.com/id/1158623408/photo/indian-hindu-veg-thali-food-platter-selective-focus.jpg?s=612x612&w=0&k=20&c=MOm3sfIfL22URV6juSCxpA3yfr4O63yJUV5vitufR7Y=)",
      id: 15,
    },
    {
      name: "name2",
      price: "$20",
      img: "url(https://media.istockphoto.com/id/1054228718/photo/indian-sweets-in-a-plate-includes-gulab-jamun-rasgulla-kaju-katli-morichoor-bundi-laddu.jpg?s=612x612&w=0&k=20&c=hYWCXLaldKvhxdBa83M0RnUij7BCmhf-ywWdvyIXR40=)",
      id: 16,
    },
    {
      name: "name3",
      price: "$30",
      img: "url(https://media.istockphoto.com/id/1165114438/photo/boiled-rice-in-a-bowl.jpg?s=612x612&w=0&k=20&c=LpGzGTOja3SzDkpCgPB2UccfUGYyYbBmMyDkZLGu1gk=)",
      id: 17,
    },
    {
      name: "name4",
      price: "$40",
      img: "url(https://media.istockphoto.com/id/183869552/photo/pasta-with-king-prawns.jpg?s=612x612&w=0&k=20&c=aLTrQ16nUuIEnoP6_haHbJ9ZZMjV7xyuhIBPG4ipFeo=)",
      id: 18,
    },
    {
      name: "name5",
      price: "$50",
      img: "url(https://media.istockphoto.com/id/1444699073/video/chicken-biryani.jpg?s=640x640&k=20&c=_C8x-YofCXUteTjgpkVEW0lk7EfhPwrDcTUAaXMFMF4=)",
      id: 19,
    },
    {
      name: "name6",
      price: "$60",
      img: "url(https://media.istockphoto.com/id/1419004778/photo/delicious-south-india-dish-sambar-in-a-bowl.jpg?s=612x612&w=0&k=20&c=p4XRFyWF0yqvabnH7DZkrMyg5G0urKAMrWZPTQsuNlU=)",
      id: 20,
    },
  ];
  return (
    <div className="lg:px-[100px] bg-black">
      <div className="grid w-[100%] h-[400%] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto bg-white">
        {arr.map((i, j) => (
          <>
            <Gridcom1 name={i.name} price={i.price} key={j} />
            <Gridcom2 img={i.img} key={i.id} />
          </>
        ))}
      </div>
    </div>
  );
};

export default MealsSection;
