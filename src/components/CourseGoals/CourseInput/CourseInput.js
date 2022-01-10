import React, { useState } from "react"
import styled from "styled-components"
import Button from "../../UI/Button/Button"
import "./CourseInput.css"

const FormControl = styled.div`
  margin: 0.5rem 0;
  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.invalid ? "red" : "black")};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    background-color: ${(props) =>
      props.invalid ? "rgb(211, 130, 130)" : "transparent"};
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`

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
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>

      <Button type="submit">Add Goal</Button>
    </form>
  )
}

export default CourseInput
