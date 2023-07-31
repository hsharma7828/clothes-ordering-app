import { Link } from "react-router-dom";
import classes from "./clothesList.module.css";
import filterIcon from "../../asserts/icons8-filter-50.png";
import resetIcon from "../../asserts/icons8-reset-24.png";
import { useState } from "react";

function ClothesList({ events }) {
  const [openList, setOpenList] = useState(false);
  const [productList, setProductList] = useState([...events[0]]);
  function setOpenListHandler() {
    setOpenList(!openList);
  }
  function resetHandler() {
    setProductList([...events[0]]);
  }
  function filterListHandler(value) {
    setProductList(filterProductList([...events[0]], value));
  }
  function filterProductList(list, value) {
    let listData = [];
    list.forEach((ele) => {
      if (ele.category === value) {
        listData.push(ele);
      }
    });
    return listData;
  }
  const dataList = (
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
  );
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
        <ul className={openList ? classes.filterList : classes.hideul}>
          {events[1].map((ele, index) => (
            <li key={index} value={ele} onClick={() => filterListHandler(ele)}>
              {ele}
            </li>
          ))}
        </ul>
      </div>
      <img
        src={resetIcon}
        alt="Reset Icon"
        className={classes.reset}
        onClick={resetHandler}
      />
      <hr></hr>
      {dataList}
    </div>
  );
}

export default ClothesList;
