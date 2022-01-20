import React from "react"
import Modal from "../UI/Modal/Modal"
import classes from "./Cart.module.css"
const mockData = [{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }]

export default function Cart(props) {
  const cartList = (
    <ul className={classes["cart-items"]}>
      {mockData.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )
  return (
    <Modal onClose={props.onClose}>
      {cartList}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button} onClick={props.onClose}>
          Order
        </button>
      </div>
    </Modal>
  )
}
