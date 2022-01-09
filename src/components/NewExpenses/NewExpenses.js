import React, { useState } from "react"
import ExpenseForm from "./ExpenseForm"
import "./NewExpenses.css"

export default function NewExpenses(props) {
  const [isEditing, setIsEditing] = useState(false)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    props.onAddExpense(expenseData)
    setIsEditing(false)
  }
  const startEditingHandler = () => {
    setIsEditing(true)
  }
  const canceEditinglHandler = () => {
    setIsEditing(false)
  }
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={canceEditinglHandler}
        />
      )}
    </div>
  )
}
