import React, { useContext } from 'react'
import { TodoContext } from '../../store/TodoContext'
import TodoItem from '../TodoItem/TodoItem'
import classes from './Todos.module.css'

const Todos: React.FC = () => {
  const { jobList } = useContext(TodoContext)

  const renderTodosList = () => {
    return jobList.map((item) => {
      return <TodoItem id={item.id} key={item.id} job={item.job} />
    })
  }

  return <div className={classes.todos}>{renderTodosList()}</div>
}

export default Todos
