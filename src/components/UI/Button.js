import React from "react"
import classes from "./Button.module.css"
export default function Button({ children, ...restProps }) {
  console.log("Button RUNNING")
  return (
    <div className={classes.btn} {...restProps}>
      {children}
    </div>
  )
}
