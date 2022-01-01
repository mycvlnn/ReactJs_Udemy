import { useState, useEffect } from "react"

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("")
  const [enterNameIsValid, setEnterNameIsValid] = useState(false)
  //mặc định ban đầu thì trường này sẽ không được touch vào
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault()
    //Được hiểu là nếu người dùng ban đầu không thay đổi gì input và submit luôn thì tất cả các trường sẽ được hiểu là đã được touch
    //trong trường hợp này thì ta chỉ có một trường thôi
    setEnteredNameTouched(true)
    //Check truong hop la rong thi khong thuc hien lenh ben duoi
    if (enteredName.trim() === "") {
      setEnterNameIsValid(false)
      return
    }
    alert(enteredName)
    setEnteredName("")
  }
  const nameInputIsInvalid = !enterNameIsValid && enteredNameTouched

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control"

  useEffect(() => {
    //to do something
    if (enterNameIsValid) {
      //demo http request
      console.log("send value to server")
    }
  }, [enterNameIsValid])
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
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
