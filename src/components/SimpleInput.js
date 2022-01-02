import { useState } from "react"

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("")
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)

  const [enteredEmail, setEnteredEmail] = useState("")
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)

  const enteredNameIsValid = enteredName.trim() !== ""
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched

  const validRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  const enteredEmailIsValid =
    enteredEmail.trim() !== "" && enteredEmail.match(validRegex)
  const emailInputIsInValid = !enteredEmailIsValid && enteredEmailTouched

  let formIsValid = false
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value)
  }

  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true)
  }

  const emailInputChangeHandler = (e) => {
    setEnteredEmail(e.target.value)
  }

  const emailInputBlurHandler = (e) => {
    setEnteredEmailTouched(true)
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault()

    const values = {
      name: enteredName,
      email: enteredEmail,
    }
    alert(JSON.stringify(values))

    setEnteredName("")
    setEnteredNameTouched(false)

    setEnteredEmail("")
    setEnteredEmailTouched(false)
  }

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control"

  const emailInputClasses = emailInputIsInValid
    ? "form-control invalid"
    : "form-control"

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          onBlur={nameInputBlurHandler}
          onChange={nameInputChangeHandler}
          type="text"
          id="name"
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-mail</label>
        <input
          onBlur={emailInputBlurHandler}
          onChange={emailInputChangeHandler}
          type="email"
          id="email"
          value={enteredEmail}
        />
        {emailInputIsInValid && (
          <p className="error-text">Email must be valid</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
