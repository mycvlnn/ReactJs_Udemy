import React, { useRef, useState } from "react"
import Input from "../../UI/Input/Input"
import classes from "./MealItemForm.module.css"

export default function MealItemForm({ onAddToCart, id }) {
  const amountInputRef = useRef()
  const [amountIsValid, setAmountIsValid] = useState(true)
  const submitHandler = (event) => {
    event.preventDefault()
    const enteredAmount = amountInputRef.current.value
    console.log("amountInput", enteredAmount)
    const enteredAmountNumber = +enteredAmount
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false)
      return
    }
    onAddToCart(enteredAmountNumber)
  }
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
      {!amountIsValid && (
        <p className={classes["text-error"]}>Please enter a valid amount</p>
      )}
    </form>
  )
}
