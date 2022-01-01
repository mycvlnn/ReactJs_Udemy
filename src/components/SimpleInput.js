import { useRef, useState } from "react"

const SimpleInput = (props) => {
  const nameInputRef = useRef()
  const [enteredName, setEnteredName] = useState("")
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault()
    //Check truong hop la rong thi khong thuc hien lenh ben duoi
    if (enteredName.trim() === "") return
    alert("enteredName", enteredName)
    console.log("nameInputRef", nameInputRef.current.value)
    //trường hợp sau khi submit ta muốn clear giá trị trong trường input
    //Có 2 cách đề làm:
    // nameInputRef.current.value = "" //Cách này không khuyến khích vì nó đang chọc thẳng vào DOM
    setEnteredName("")
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          onChange={nameInputChangeHandler}
          type="text"
          id="name"
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
