import Header from "./Header";

import React, { useState } from "react";
import Banner from "./Banner";
import MealsSection from "./MealsSection";
import Headers from "./components/Layout/Headers";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider className="bg-neutral-700 ">
      <Headers onShowCart={showCartHandler} />
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      {/*<Header></Header>
      <Banner />
      <MealsSection /> */}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
