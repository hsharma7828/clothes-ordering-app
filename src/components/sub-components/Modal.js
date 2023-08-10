import classes from "./Modal.module.css";
import crossIcon from "../../asserts/icons8-x-50.png";
function Modal(props) {
  function closeModalHandler() {
    props.onClose();
  }
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
      </div>
    </>
  );
}

export default Modal;
