import { useEffect, useState } from "react";
import classes from "./startRating.module.css";

const StarRating = (props) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    if (props) {
      setRating(Math.round(props.props));
    }
  }, [props]);
  return (
    <div className={classes.star_rating}>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? classes.on : classes.off}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className={classes.star}>&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
