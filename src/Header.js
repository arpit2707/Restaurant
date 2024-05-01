import React from "react";
import "./style/_header.css";

const Header = () => {
  return (
    <div className=" flex  bg-orange-800 justify-between">
      <h5 className="py-4 mx-4 text-white text-2xl font-bold  ">ReactMeals</h5>
      <div className="py-2 my-2 flex border-solid bg-orange-900  border-solid font-bold p-4 mr-10 rounded-md">
        <h5 className="mx-4 text-white font-bold mt-2">Your Cart</h5>
        <p className="bg-orange-700  font-bold p-2 mr-4  text-white rounded-md mb-1">
          {0}
        </p>
      </div>
    </div>
  );
};

export default Header;
