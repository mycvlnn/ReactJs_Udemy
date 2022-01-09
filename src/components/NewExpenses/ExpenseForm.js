import React, { useState } from "react"
import "./ExpenseForm.css"
const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  })

  const onChangeHandler = (event) => {
    const { name, value } = event.target
    setUserInput((prevState) => {
      //return new State
      return {
        ...prevState,
        [name]: value,
      }
    })
  }

  const submitHandler = (event) => {
    event.preventDefault()
    const expenseData = {
      ...userInput,
      date: new Date(userInput.date),
    }
    props.onSaveExpenseData(expenseData)
    setUserInput({
      title: "",
      amount: "",
      enteredDate: "",
    })
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input name="title" type="text" onChange={onChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            name="amount"
            type="number"
            min="0.01"
            step="0.01"
            onChange={onChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            name="date"
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            onChange={onChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}
export default ExpenseForm
