import { Link, NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const isActiveNav = (nav) => (nav.isActive ? classes.active : "");
  return (
    <header className={classes.header}>
      <Link to="/" className={classes.logo}>
        Great Quotes
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/quotes" className={isActiveNav}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quote" className={isActiveNav}>
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
