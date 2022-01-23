import React, { useState, useCallback } from "react"
import DemoOutput from "./components/Demo/DemoOutput"
import Button from "./components/UI/Button"
import Paragraph from "./components/UI/Paragraph"
function App() {
  console.log("APP RUNNING")
  const [showParagraph, setShowParagraph] = useState(false)
  const [allowToggle, setAllowToggle] = useState(false)
  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph)
    }
  }, [allowToggle])

  const allowToggleHandler = () => {
    setAllowToggle(true)
  }
  return (
    <React.Fragment>
      <h1>Hi There!</h1>
      {showParagraph && <DemoOutput />}
      <Paragraph>This is a paragraph</Paragraph>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
      <br />
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
    </React.Fragment>
  )
}

export default App
