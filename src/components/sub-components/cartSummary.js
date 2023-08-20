import { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./cartSummary.module.css";

function CartSummary() {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numberOfCartItem = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <div className={classes.badge_control}>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </div>
  );
}

export default CartSummary;
