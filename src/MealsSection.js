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
            <div className="flex justify-between">
              <div>
                <h5 className=" font-bold  ">{items.name}</h5>
                <p className=" font-serif   ">
                  <i>{items.desc}</i>
                </p>
                <p className=" text-orange-950 font-bold ">
                  {`Rs.` + items.price}
                </p>
              </div>
              <div className="items-end justify-center">
                <div className="flex ">
                  <p className="text-black m-1">Quantity</p>
                  <input
                    className="rounded-md w-10 h-6 m-1 bg-white border-black border-solid border-2     "
                    type="number"
                  />
                </div>
                <button className="rounded-md w-20 items-center font-bold m-2 h-6 text-white bg-orange-900 border-b border-gray-500 flex justify-center">
                  + Add
                </button>
              </div>
            </div>
            <div className="border-b  border-gray-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealsSection;
