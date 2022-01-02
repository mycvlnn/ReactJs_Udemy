import { useState } from "react"

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("")
  //mặc định ban đầu thì trường này sẽ không được touch vào
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)
  const enteredNameIsValid = enteredName.trim() !== ""
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value)
  }

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true)
  }
  const formSubmissionHandler = (event) => {
    event.preventDefault()
    //Được hiểu là nếu người dùng ban đầu không thay đổi gì input và submit luôn thì tất cả các trường sẽ được hiểu là đã được touch
    //trong trường hợp này thì ta chỉ có một trường thôi
    setEnteredNameTouched(true)
    //Check truong hop la rong thi khong thuc hien lenh ben duoi
    if (!enteredNameIsValid) return
    alert(enteredName)
    setEnteredName("")
    setEnteredNameTouched(false)
  }

  const nameInputClasses = nameInputIsInvalid
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
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
