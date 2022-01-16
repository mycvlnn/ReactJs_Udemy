import React, { useEffect, useRef } from "react"
import classes from "./Input.module.css"
const Input = (props) => {
  const inputRef = useRef()
  const { isValid, label, value, onChange, onBlur, id, type } = props
  // const activate = () => {
  //   inputRef.current.focus()
  // }
  useEffect(() => {
    if (isValid === false) {
      inputRef.current.focus()
    }
  })
  return (
    <div
      className={`${classes.control} ${
        isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={id}>{label}</label>
      <input
        ref={inputRef}
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  )
}

export default React.memo(Input)
