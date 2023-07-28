import { Link } from "react-router-dom";
import classes from "./clothesList.module.css";

function ClothesList({ events }) {
  return (
    <div className={classes.events}>
      <h1>All Available Products</h1>
      <hr></hr>
      <ul className={classes.list}>
        {events.map((event) => (
          <li key={event.id} className={classes.item}>
            <Link to={`/products/${event.id}`}>
              <h2>{event.title}</h2>
              <img src={event.image} alt={event.title} />
              <div className={classes.content}></div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClothesList;
