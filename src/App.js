import React, { useState, useCallback, useMemo } from "react"
import "./App.css"
import DemoList from "./components/Demo/DemoList"
import Button from "./components/UI/Button"

function App() {
  console.log("App Running...")
  const [listTitle, setListTitle] = useState("My List")

  const changeTitleHandler = useCallback(() => {
    setListTitle("New title")
  }, [])

  const listItems = useMemo(() => {
    return [5, 3, 2, 1, 10, 9]
  }, [])
  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler} type="button">
        Change List Title
      </Button>
    </div>
  )
}

export default App
