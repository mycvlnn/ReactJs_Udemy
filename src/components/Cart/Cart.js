import React, { useContext } from "react"
import { CartContext } from "../../store/CartContext/CartContext"
import Modal from "../UI/Modal/Modal"
import CartItem from "./CartItem"
import classes from "./Cart.module.css"

export default function Cart(props) {
  const cartCtx = useContext(CartContext)
  console.log("values", cartCtx)
  const hasItems = cartCtx.items.length > 0
  const cartItemAddHandler = (item) => {
    console.log("item", item)
    cartCtx.addItem({ ...item, amount: 1 })
  }

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  }
  const cartList = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  )
  return (
    <Modal onClose={props.onClose}>
      {cartList}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && (
          <button className={classes.button} onClick={props.onClose}>
            Order
          </button>
        )}
      </div>
    </Modal>
  )
}
