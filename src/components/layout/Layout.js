import React from "react";
import MainNavigation from "./MainNavigation";

import classes from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <MainNavigation />
      </header>
      <main className={classes.main}>{children}</main>
    </>
  );
};

export default Layout;
