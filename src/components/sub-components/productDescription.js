import { Link } from "react-router-dom";
import StarRating from "../ui/startRating";
import classes from "./productDescription.module.css";
// import Cart from "./cart";
// import { useState } from "react";

function ProductDescription({ product }) {
  // const [openCart, setOpenCart] = useState(false);
  function addToCartHandler() {
    // setOpenCart(true);
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
          <p>Price: ₹ {product.price * 85}</p>
          <button
            id={product.id}
            className={`${classes.buttonclass} ${classes.addToCart}`}
            onClick={addToCartHandler}
          >
            Add To Cart
          </button>
        </div>
      )}
    </>
  );
}

export default ProductDescription;
