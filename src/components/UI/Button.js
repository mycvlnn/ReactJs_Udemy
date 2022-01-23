import React from "react"
import classes from "./Button.module.css"
function Button({ children, ...restProps }) {
  console.log("Button RUNNING")
  return (
    <button className={classes.btn} {...restProps}>
      {children}
    </button>
  )
}

export default React.memo(Button)
