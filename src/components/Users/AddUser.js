import React, { useState, useRef } from "react"
import Button from "../UI/Button"
import Card from "../UI/Card"
import ErrorModal from "../UI/ErrorModal"
import classes from "./AddUser.module.css"

export default function AddUser(props) {
  const nameInputRef = useRef()
  const ageInputRef = useRef()
  const [error, setError] = useState()
  const addUserHandler = (e) => {
    e.preventDefault()
    const enteredName = nameInputRef.current.value
    const enteredAge = ageInputRef.current.value
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values)",
      })
      return
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age ( > 0)",
      })
      return
    }
    const user = {
      id: Math.random().toString(),
      name: enteredName,
      age: enteredAge,
    }
    props.onAddUser(user)
    nameInputRef.current.value = ""
    ageInputRef.current.value = ""
  }

  //Handle in case user entered + || - || e  and so on
  const ageKeyDownHandler = (e) => {
    // prevent: "e", "=", ",", "-", "."
    if ([69, 187, 188, 189, 190].includes(e.keyCode)) {
      e.preventDefault()
    }
  }
  const errorHandler = () => {
    setError(null)
  }
  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input
            onKeyDown={ageKeyDownHandler}
            type="number"
            id="age"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  )
}
