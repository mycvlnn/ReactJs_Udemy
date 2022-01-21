import React, { useContext, useEffect, useState } from "react"
import { CartContext } from "../../../../store/CartContext/CartContext"
import CartIcon from "../../../Cart/CartIcon"
import classes from "./HeaderCartButton.module.css"

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnHighlighted] = useState(false)
  const { items } = useContext(CartContext)
  const numberOfCartItem = items.reduce((total, item) => total + item.amount, 0)
  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ""}`
  console.log("btnClasses", btnClasses)
  useEffect(() => {
    console.log("useEffect")
    if (items.length === 0) return
    setBtnHighlighted(true)
    const idTimer = setTimeout(() => {
      setBtnHighlighted(false)
    }, 300)

    return () => {
      console.log("clean up", idTimer)
      clearTimeout(idTimer)
    }
  }, [items])
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  )
}

export default HeaderCartButton
