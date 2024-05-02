import React from "react";

const MealsSection = () => {
  const meals = [
    { name: "Curry", price: 500, desc: "Delicioius curries" },
    { name: "Breads", price: 700, desc: "Delicioius Breads" },
    { name: "Rice", price: 200, desc: "Delicioius Rice" },
    { name: "Paneer", price: 900, desc: "Delicioius Paneer" },
    { name: "Egg", price: 600, desc: "Delicioius Egg" },
    { name: "Chicken", price: 1000, desc: "Delicioius Chicken" },
  ];
  return (
    <div className="rounded-md bg-white mx-32 ">
      <div className="p-4">
        {meals.map((items) => (
          <div>
            <h5 className=" font-bold  ">{items.name}</h5>
            <p className=" font-serif   ">
              <i>{items.desc}</i>
            </p>
            <p className=" text-orange-950 font-bold ">{`Rs.` + items.price}</p>
            <div className="border-b border-gray-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealsSection;
