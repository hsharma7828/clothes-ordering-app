import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./topRated.module.css";

function TopRated({ products }) {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    function topRatedProduct() {
      let topProducts = [];
      if (products) {
        products[0].forEach((product) => {
          if (product.rating.rate > 4.0) {
            topProducts.push(product);
          }
        });
        setProductList(topProducts);
      }
    }
    topRatedProduct();
  }, [products]);
  return (
    <>
      <h1>Our Top Rated Products</h1>
      {productList && (
        <ul className={classes.list}>
          {productList.map((event) => (
            <li key={event.id} className={classes.item}>
              <Link to={`/products/${event.id}`}>
                <h2>{event.title}</h2>
                <img src={event.image} alt={event.title} />
                <div className={classes.content}></div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default TopRated;
