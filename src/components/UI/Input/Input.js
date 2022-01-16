import React, { useRef, useImperativeHandle, forwardRef } from "react"
import classes from "./Input.module.css"
const Input = (props, ref) => {
  const inputRef = useRef()
  const { isValid, label, value, onChange, onBlur, id, type } = props
  console.log("re-render")
  const activate = () => {
    inputRef.current.focus()
  }
  useImperativeHandle(ref, () => {
    return {
      focus: activate,
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

export default forwardRef(Input)
