import classes from "./Modal.module.css";
import crossIcon from "../../asserts/icons8-x-50.png";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
function Modal(props) {
  const clothCtx = useContext(CartContext);
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
        {modalItems}
        <hr className={classes.bottom_line}></hr>
        <p className={classes.setTotalAmount}>Total Amount: ₹{totalAmount}</p>
      </div>
    </>
  );
}

export default Modal;
