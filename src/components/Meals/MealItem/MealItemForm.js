import React, { useContext } from "react"
import { CartContext } from "../../../store/CartContext/CartContext"
import Input from "../../UI/Input/Input"
import classes from "./MealItemForm.module.css"

export default function MealItemForm(props) {
  const { addItem } = useContext(CartContext)
  const submitHandler = (event) => {
    event.preventDefault()
    addItem({ ...props.item, amount: 1 })
  }
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
    </form>
  )
}
