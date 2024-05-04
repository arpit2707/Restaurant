import React from "react";
import Modal from "./Modal";

const Cart = () => {
  const cartItems = (
    <ul>
      {[{ id: "c1", name: "Sushi", amount: 200, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div>
        <button>Close</button>
        <button>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
