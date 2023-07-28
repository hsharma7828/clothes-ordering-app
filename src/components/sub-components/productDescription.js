import StarRating from "../ui/startRating";
import classes from "./productDescription.module.css";

function ProductDescription({ product }) {
  return (
    <>
      {product && (
        <div className={classes.align_product}>
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
        </div>
      )}
    </>
  );
}

export default ProductDescription;
