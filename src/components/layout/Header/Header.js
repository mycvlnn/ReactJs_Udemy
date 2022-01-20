import React, { Fragment } from "react"
import classes from "./Header.module.css"
import ImageMeals from "../../../assets/images/meals.jpg"
import HeaderCartButton from "./HeaderCartButton/HeaderCartButton"

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={ImageMeals} alt="Meals" />
      </div>
    </Fragment>
  )
}

export default Header
