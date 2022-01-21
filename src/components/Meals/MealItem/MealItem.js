import React, { useContext } from "react"
import { CartContext } from "../../../store/CartContext/CartContext"
import classes from "./MealItem.module.css"
import MealItemForm from "./MealItemForm"

export default function MealItem(props) {
  const cartCtx = useContext(CartContext)
  const { name, description, price } = props
  const priceUnit = `$${price.toFixed(2)}`
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    })
  }
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{priceUnit}</div>
      </div>
      <div>
        <MealItemForm
          onAddToCart={addToCartHandler}
          id={props.id}
          item={props}
        />
      </div>
    </li>
  )
}
