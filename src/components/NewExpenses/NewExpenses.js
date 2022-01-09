import React from "react"
import ExpenseForm from "./ExpenseForm"
import "./NewExpenses.css"

export default function NewExpenses(props) {
  //Tuân theo convention code để khi đi làm sẽ không phải sửa tính cách như mình ngày xưa

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    props.onAddExpense(expenseData)
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}
