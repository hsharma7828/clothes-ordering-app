import { Link } from "react-router-dom";
import classes from "./clothesList.module.css";
import filterIcon from "../../asserts/icons8-filter-50.png";
import { useState } from "react";

function ClothesList({ events }) {
  const [openList, setOpenList] = useState(false);
  function setOpenListHandler() {
    setOpenList(!openList);
  }
  return (
    <div className={classes.events}>
      <h1>All Available Products</h1>
      <div className={classes.filterDiv}>
        <img
          src={filterIcon}
          alt="Filter Icon"
          className={classes.filter}
          onClick={setOpenListHandler}
        />
        {openList && (
          <ul className={classes.filterList}>
            {events[1].map((ele, index) => (
              <li>{ele}</li>
            ))}
          </ul>
        )}
      </div>
      <hr></hr>
      <ul className={classes.list}>
        {events[0].map((event) => (
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
