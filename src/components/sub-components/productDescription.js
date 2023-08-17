import { Link } from "react-router-dom";
import StarRating from "../ui/startRating";
import classes from "./productDescription.module.css";
import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import { useRef } from "react";
// import Cart from "./cart";

function ProductDescription({ product }) {
  const [allowAdd, setAllowAdd] = useState(false);
  const amount = useRef();
  const cartCtx = useContext(CartContext);
  function addHandlerAvailabiltyHandler() {
    if (+amount.current.value > 0) {
      setAllowAdd(true);
    } else {
      setAllowAdd(false);
    }
  }
  function addToCartHandler() {
    const enteredAmount = +amount.current.value;
    product.amount = enteredAmount;
    cartCtx.addItem(product);
  }
  return (
    <>
      {/* {openCart && <Cart props={product} />} */}
      {product && (
        <div className={classes.align_product}>
          <button className={classes.buttonclass}>
            <Link className={classes.LinkItem} to="/products">
              Back
            </Link>
          </button>
          <h1>{product.category}</h1>
          <h2>{product.title}</h2>
          <img
            className={classes.image}
            src={product.image}
            alt={product.title}
          />
          <p>Rating: {product.rating.rate}</p>
          <StarRating props={product.rating.rate} />
          <p>Price: ₹ {(product.price * 85).toFixed(2)}</p>
          <button
            disabled={!allowAdd}
            id={product.id}
            className={`${classes.buttonclass} ${classes.addToCart}`}
            onClick={addToCartHandler}
          >
            Add To Cart
          </button>
          <input ref={amount} onChange={addHandlerAvailabiltyHandler} />
        </div>
      )}
    </>
  );
}

export default ProductDescription;
