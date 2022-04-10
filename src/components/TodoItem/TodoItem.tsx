import React from 'react'
import classes from './TodoItem.module.css'

interface TodoItemProps {
  job: string
  onRemoveJob: () => void
}

const TodoItem: React.FC<TodoItemProps> = (props) => {
  return (
    <li onClick={props.onRemoveJob} className={classes.item}>
      {props.job}
    </li>
  )
}

export default TodoItem
