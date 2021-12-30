import Card from "../UI/Card"
import ExpenseDate from "./ExpenseDate"
import "./ExpenseItem.css"
function ExpenseItem(props) {
  const { title, amount, date } = props.expense

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  )
}
export default ExpenseItem
