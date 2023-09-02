import classes from "./Modal.module.css";
import crossIcon from "../../asserts/icons8-x-50.png";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import { useNavigate } from "react-router-dom";
function Modal(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const clothCtx = useContext(CartContext);
  useEffect(() => {
    const isUserLoggedIn = localStorage.getItem("Login");

    if (isUserLoggedIn) {
      setIsLoggedIn(true);
    }
  }, []);
  const navigate = useNavigate();
  const { items } = clothCtx;
  const { totalAmount } = clothCtx;
  function closeModalHandler() {
    props.onClose();
  }
  function cartItemAddHandler(item) {
    clothCtx.addItem({ ...item, amount: 1 });
  }
  function cartItemRemoveHandler(id) {
    clothCtx.removeItem(id);
  }
  function titleLengthHandler(title) {
    let newTitle = "";
    if (title?.length > 20) {
      newTitle = title.slice(0, 30) + "...";
    }
    return newTitle.trim();
  }
  function authHandler() {
    if (localStorage.getItem("Login")) {
      const message = window.confirm(
        "You will be Logged Out? Do you wish continue..."
      );
      if (message) {
        clothCtx.userLoggedOut();
        navigate("/products");
      }
    } else {
      navigate("/auth");
    }
  }
  const modalItems = (
    <ul className={classes.list_control}>
      {items.map((event) => (
        <li key={event.id} className={classes.item}>
          <div>
            <img
              className={classes.modal_img}
              src={event.image}
              alt={event.title}
            />
            <h2 className={classes.title}>{titleLengthHandler(event.title)}</h2>
          </div>
          <div className={classes.divAdjuster}>
            <h2 className={classes.amount}>{event.amount}</h2>
            <div className={classes.actions}>
              <button onClick={cartItemRemoveHandler.bind(null, event?.id)}>
                −
              </button>
              <button onClick={cartItemAddHandler.bind(null, event)}>+</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
  const btnText = isLoggedIn ? "Logout" : "Login";
  return (
    <>
      <img
        className={classes.cross_icon}
        src={crossIcon}
        alt="cross icon"
        onClick={closeModalHandler}
      />
      <div className={classes.cart_modal}>
        <p>Welcome to Cart Section</p>
        <div className={classes.login_button}>
          <button onClick={authHandler}>{btnText}</button>
        </div>
        {modalItems}
        <hr className={classes.bottom_line}></hr>
        <p className={classes.setTotalAmount}>
          Total Amount: ₹{totalAmount.toFixed(2)}
        </p>
      </div>
    </>
  );
}

export default Modal;
