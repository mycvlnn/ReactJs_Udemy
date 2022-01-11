import React from "react"
import classes from "./Button.module.css"

const Button = (props) => {
  const { children, type, ...restProps } = props
  return (
    <button className={classes.button} type={type || "button"} {...restProps}>
      {children}
    </button>
  )
}
export default Button
