import { useRef, useState } from "react"

const SimpleInput = (props) => {
  const nameInputRef = useRef()
  const [enteredName, setEnteredName] = useState("")
  const [enterNameIsValid, setEnterNameIsValid] = useState(true)

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault()
    //Check truong hop la rong thi khong thuc hien lenh ben duoi
    if (enteredName.trim() === "") {
      setEnterNameIsValid(false)
      return
    }
    alert(enteredName)
    console.log("nameInputRef", nameInputRef.current.value)
    //trường hợp sau khi submit ta muốn clear giá trị trong trường input
    //Có 2 cách đề làm:
    // nameInputRef.current.value = "" //Cách này không khuyến khích vì nó đang chọc thẳng vào DOM
    setEnteredName("")
  }

  const nameInputClasses = enterNameIsValid
    ? "form-control"
    : "form-control invalid"

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          onChange={nameInputChangeHandler}
          type="text"
          id="name"
          value={enteredName}
        />
        {!enterNameIsValid && (
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
