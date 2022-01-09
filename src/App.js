import ExpenseItem from "./components/Expenses/ExpenseItem"
import NewExpenses from "./components/NewExpenses/NewExpenses"
import Card from "./components/UI/Card"

function App() {
  const expenses = [
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
  const renderExpenses = () => {
    return expenses.map((expense, index) => {
      return <ExpenseItem key={index} expense={expense} />
    })
  }

  const addExpenseHandler = (expense) => {
    console.log("App.js")
    console.log("expense", expense)
  }

  return (
    <div className="App">
      <Card className="expense">
        <NewExpenses onAddExpense={addExpenseHandler} />
        {renderExpenses()}
      </Card>
    </div>
  )
}

export default App
