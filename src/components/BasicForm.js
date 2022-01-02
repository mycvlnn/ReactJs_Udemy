import { useState } from "react"

const BasicForm = (props) => {
  //first name
  const [enteredFirstName, setEnteredFirstName] = useState("")

  const [enteredFirstNameTouched, setEnteredFirstNameTouched] = useState(false)

  const enteredFirstNameIsValid = enteredFirstName !== ""

  const firstNameInputIsInvalid =
    !enteredFirstNameIsValid && enteredFirstNameTouched

  const firstNameInputChangeHandler = (e) => {
    setEnteredFirstName(e.target.value)
  }

  const firstNameInputBlurHandler = (e) => {
    setEnteredFirstNameTouched(true)
  }
  //End

  //last name
  const [enteredLastName, setEnteredLastName] = useState("")

  const [enteredLastNameTouched, setEnteredLastNameTouched] = useState(false)

  const enteredLastNameIsValid = enteredLastName !== ""

  const lastNameInputIsInvalid =
    !enteredLastNameIsValid && enteredLastNameTouched

  const lastNameInputChangeHandler = (e) => {
    setEnteredLastName(e.target.value)
  }

  const lastNameInputBlurHandler = (e) => {
    setEnteredLastNameTouched(true)
  }

  //end

  //email
  const [enteredEmail, setEnteredEmail] = useState("")

  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)

  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  const enteredEmailIsValid =
    enteredEmail !== "" && enteredEmail.match(regexEmail)

  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched

  const emailInputChangeHandler = (e) => {
    setEnteredEmail(e.target.value)
  }

  const emailInputBlurHandler = (e) => {
    setEnteredEmailTouched(true)
  }
  //end

  let isFormValid = false

  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid
  ) {
    isFormValid = true
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setEnteredFirstNameTouched(true)
    setEnteredLastNameTouched(true)
    setEnteredEmailTouched(true)
    if (!isFormValid) {
      return
    }
    const values = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
    }
    alert(JSON.stringify(values))

    //Clear value input and touche
    setEnteredFirstName("")
    setEnteredFirstNameTouched(false)

    setEnteredLastName("")
    setEnteredLastNameTouched(false)

    setEnteredEmail("")
    setEnteredEmailTouched(false)
  }

  //css classes error
  const firstNameClasses = firstNameInputIsInvalid
    ? "form-control invalid"
    : "form-control"

  const lastNameClasses = lastNameInputIsInvalid
    ? "form-control invalid"
    : "form-control"

  const emailClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control"
  return (
    <form onSubmit={handleSubmit}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            onBlur={firstNameInputBlurHandler}
            onChange={firstNameInputChangeHandler}
            type="text"
            id="name"
            value={enteredFirstName}
          />
          {firstNameInputIsInvalid && (
            <p className="error-text">First Name is invalid.</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            onChange={lastNameInputChangeHandler}
            onBlur={lastNameInputBlurHandler}
            type="text"
            id="name"
            value={enteredLastName}
          />
          {lastNameInputIsInvalid && (
            <p className="error-text">Last Name is invalid.</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          type="text"
          id="name"
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Last Name is invalid.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  )
}

export default BasicForm
