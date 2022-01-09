import React from "react"
import ExpenseItem from "../ExpenseItem"
import "./ExpenseList.css"

export default function ExpenseList(props) {
  if (props.items.length === 0) {
    return <h3 className="expenses-list__fallback">No found expenses</h3>
  }
  return (
    <ul className="expense-list">
      {props.items.map((expense) => {
        return <ExpenseItem key={expense.id} expense={expense} />
      })}
    </ul>
  )
}
