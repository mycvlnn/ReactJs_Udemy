import React from "react"
import classes from "./Input.module.css"

const Input = (props) => {
  const { input, label } = props
  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} />
    </div>
  )
}
export default Input
