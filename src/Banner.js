import React from "react";
import banners from "./imges/jason-leung-poI7DelFiVA-unsplash.jpg";

const Banner = () => {
  return (
    <div className="relative">
      {/* Banner Image */}
      <img
        src={banners}
        className="object-cover w-full h-[300px] md:h-[400px] lg:h-[500px]"
        alt="Delicious Food"
      />

      <div className="absolute top-1/4 md:left-1/4 lg:left-1/4 z-10 w-1.5/3 md:w-2/3 lg:w-1/2 h-max   md:h-[50%] lg:h-[40%] bg-orange-500 opacity-100 rounded-md">
        <div className="text-white p-4">
          <h3 className="text-md md:text-xl lg:text-2xl mb-4">
            Delicious Food, Delivered To You
          </h3>
          <p className="text-sm md:text-base lg:text-lg mb-4">
            Choose your favorite meal from our broad section of available meals
            and enjoy a delicious lunch or dinner at home.
          </p>
          <p className="text-sm md:text-base lg:text-lg">
            All our meals are cooked with high-quality ingredients, just-in-time
            and of course by experienced chefs!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
