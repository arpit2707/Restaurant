import { useContext } from "react";
import CartContext from "../../store/cart-context";
import HeaderCartButtonC from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import Cart from "../Cart/Cart";

const HeaderCartButton = (props) => {
  const cartCont = useContext(CartContext);
  const noOfCartItems = cartCont.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{noOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
