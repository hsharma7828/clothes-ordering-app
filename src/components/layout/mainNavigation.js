import classes from "./mainNavigation.module.css";
import hamburger from "../../asserts/icons8-hamburger-128.png";
import cart from "../../asserts/icons8-cart-80.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Modal from "../sub-components/Modal";
import CartSummary from "../sub-components/cartSummary";

function MainNavigation() {
  const [modalCart, setModalCart] = useState(false);
  function openModalsectionHandler() {
    document.getElementById("modal").style.display = "none";
    setModalCart(true);
  }
  function closeModalHandler() {
    setModalCart(false);
    document.getElementById("modal").style.display = "";
  }
  return (
    <>
      <nav>
        <ul className={classes.list}>
          <div className={classes.listDiv}>
            <li className={classes.listItem}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes.active : classes.navLnk
                }
                end
                to={"/home"}
              >
                Home
              </NavLink>
            </li>
          </div>
          <div className={classes.listDiv}>
            <li className={classes.listItem}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes.active : classes.navLnk
                }
                end
                to={"/products"}
              >
                Availabe Products
              </NavLink>
            </li>
          </div>
          <img id="cart" src={cart} alt="cart icon" className={classes.cart} />
          <CartSummary />
          <img
            id="modal"
            src={hamburger}
            alt="modal icon"
            className={classes.humburger}
            onClick={openModalsectionHandler}
          />
        </ul>
      </nav>
      {modalCart && <Modal onClose={closeModalHandler} />}
    </>
  );
}

export default MainNavigation;
