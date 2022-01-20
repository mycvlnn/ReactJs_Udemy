import React, { useContext } from "react"
import { CartContext } from "../../../../store/CartContext/CartContext"
import CartIcon from "../../../Cart/CartIcon"
import classes from "./HeaderCartButton.module.css"

const HeaderCartButton = (props) => {
  const { totalAmount } = useContext(CartContext)
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalAmount}</span>
    </button>
  )
}

export default HeaderCartButton
