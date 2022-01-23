import React, { useMemo } from "react"
import classes from "./DemoList.module.css"

function DemoList(props) {
  console.log("Demo list RUNNING")
  const { items } = props
  const sortedList = useMemo(() => {
    console.log("use memo")
    return items.sort((a, b) => a - b)
  }, [items])
  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => {
          return <li key={item}>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default React.memo(DemoList)
