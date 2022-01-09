import ExpensesFilter from "components/Expenses/ExpensesFilter"
import { useState } from "react"
import NewExpenses from "./components/NewExpenses/NewExpenses"
import Card from "./components/UI/Card"
import ExpenseList from "components/Expenses/ExpenseList/ExpenseList"
import ExpenseChart from "components/Expenses/ExpenseChart"

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
]
function App() {
  const [filteredYear, setFilteredYear] = useState("2020")

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const filterExpense = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  )

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  return (
    <div className="App">
      <Card className="expense">
        <NewExpenses onAddExpense={addExpenseHandler} />
        <ExpenseChart expenses={filterExpense} />
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseList items={filterExpense} />
      </Card>
    </div>
  )
}

export default App
