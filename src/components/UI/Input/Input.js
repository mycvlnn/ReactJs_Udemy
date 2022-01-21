import React from "react"
import classes from "./Input.module.css"

const Input = (props, ref) => {
  const { input, label } = props
  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input} />
    </div>
  )
}
export default React.forwardRef(Input)
