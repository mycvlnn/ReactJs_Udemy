import React, { useContext } from 'react'
import { TodoContext } from '../../store/TodoContext'
import classes from './TodoItem.module.css'

interface TodoItemProps {
  job: string
  id: string
}

const TodoItem: React.FC<TodoItemProps> = ({ id, job }) => {
  const { removeJobHanlder } = useContext(TodoContext)
  return (
    <li onClick={() => removeJobHanlder(id)} className={classes.item}>
      {job}
    </li>
  )
}

export default TodoItem
