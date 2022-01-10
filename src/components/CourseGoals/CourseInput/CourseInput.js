import React, { useState } from "react"
import Button from "../../UI/Button/Button"
import styles from "./CourseInput.module.css"

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("")
  const [isValid, setIsValid] = useState(true)

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value)
    if (event.target.value.trim() !== "") {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }

  const formSubmitHandler = (event) => {
    event.preventDefault()
    if (enteredValue.trim() === "") {
      setIsValid(false)
      return
    }
    props.onAddGoal(enteredValue)
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>

      <Button type="submit">Add Goal</Button>
    </form>
  )
}

export default CourseInput
