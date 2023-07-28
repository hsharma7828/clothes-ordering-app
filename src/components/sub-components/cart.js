import classes from "./cart.module.css";
import crossIcon from "../../asserts/icons8-x-50.png";
function Cart(props) {
  return (
    <>
      <div className={classes.cart_modal}>
        <img
          className={classes.cross_icon}
          src={crossIcon}
          alt="cross icon"
          onClick={props.onClose}
        />
        <p>Welcome to Cart Section</p>
      </div>
    </>
  );
}

export default Cart;
