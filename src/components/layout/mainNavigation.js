import { NavLink } from "react-router-dom";
import classes from "./mainNavigation.module.css";

function MainNavigation() {
  return (
    <header>
      <nav>
        <ul className={classes.unOrderesList}>
          <NavLink className={classes.listItem} to={"/"}>
            Home
          </NavLink>
          <NavLink className={classes.listItem} to={"/clothes"}>
            Clothes
          </NavLink>
          {/* <li>
            <NavLink to={}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={}>About</NavLink>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
