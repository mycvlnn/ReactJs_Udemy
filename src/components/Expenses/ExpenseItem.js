import { useState } from "react"
import Card from "../UI/Card"
import ExpenseDate from "./ExpenseDate"
import "./ExpenseItem.css"
function ExpenseItem(props) {
  const { title, amount, date } = props.expense
  const [test, setTest] = useState("test")
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <h3>{test}</h3>
        <div className="expense-item__price">${amount || 0}</div>
        <button onClick={() => setTest("hhahahaahha")}>change test</button>
      </div>
    </Card>
  )
}
export default ExpenseItem
