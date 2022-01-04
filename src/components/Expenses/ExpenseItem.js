import { useState } from "react"
import Card from "../UI/Card"
import ExpenseDate from "./ExpenseDate"
import "./ExpenseItem.css"
function ExpenseItem(props) {
  const { title, amount, date } = props.expense
  const [heading, setHeading] = useState(title)
  const clickHandler = (e) => {
    setHeading("Updated")
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{heading}</h2>
        <div className="expense-item__price">${amount}</div>
        <button onClick={clickHandler}>Change title</button>
      </div>
    </Card>
  )
}
export default ExpenseItem
