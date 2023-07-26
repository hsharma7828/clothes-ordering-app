import classes from "./mainNavigation.module.css";
import hamburger from "../../asserts/icons8-hamburger-128.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Cart from "../carts/cart";

function MainNavigation() {
  const [openCart, setOpenCart] = useState(false);
  function openCartsectionHandler() {
    document.getElementById("hamburger").style.display = "none";
    setOpenCart(true);
  }
  return (
    <>
      <nav>
        <ul className={classes.list}>
          <div className={classes.listDiv}>
            <li className={classes.listItem}>
              <NavLink className={classes.navLnk} to={"/"}>
                Home
              </NavLink>
            </li>
          </div>
          <div className={classes.listDiv}>
            <li className={classes.listItem}>
              <NavLink className={classes.navLnk} to={"/clothes"}>
                Clothes
              </NavLink>
            </li>
          </div>
          <img
            id="hamburger"
            src={hamburger}
            alt="burger icon"
            className={classes.humburger}
            onClick={openCartsectionHandler}
          />
        </ul>
      </nav>
      {openCart && <Cart />}
    </>
  );
}

export default MainNavigation;
