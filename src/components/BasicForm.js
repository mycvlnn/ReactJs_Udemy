import useInput from "../hooks/useInput"
import { regexEmail } from "../constants"
const BasicForm = (props) => {
  const isFirstNameValid = (value) => value.trim() !== ""
  const isLastNameValid = (value) => value.trim() !== ""
  const isEmailValid = (value) => value.match(regexEmail) && value.trim() !== ""
  //first name
  const {
    value: enteredFirstName,
    hasError: firstNameInputIsInvalid,
    isValid: enteredFirstNameIsValid,
    valueChangeHandler: firstNameInputChangeHandler,
    inputBlurHandler: firstNameInputBlurHandler,
    reset: resetFirstName,
  } = useInput(isFirstNameValid)

  //last name
  const {
    value: enteredLastName,
    hasError: lastNameInputIsInvalid,
    isValid: enteredLastNameIsValid,
    valueChangeHandler: lastNameInputChangeHandler,
    inputBlurHandler: lastNameInputBlurHandler,
    reset: resetLastName,
  } = useInput(isLastNameValid)

  //email
  const {
    value: enteredEmail,
    hasError: emailInputIsInvalid,
    isValid: enteredEmailIsValid,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmail,
  } = useInput(isEmailValid)

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
    resetFirstName()
    resetLastName()
    resetEmail()
  }

  const classNameHandler = (valueInputIsInvalid) => {
    return valueInputIsInvalid ? "form-control invalid" : "form-control"
  }

  //css classes error
  const firstNameClasses = classNameHandler(firstNameInputIsInvalid)
  const lastNameClasses = classNameHandler(lastNameInputIsInvalid)
  const emailClasses = classNameHandler(emailInputIsInvalid)

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
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  )
}

export default BasicForm
