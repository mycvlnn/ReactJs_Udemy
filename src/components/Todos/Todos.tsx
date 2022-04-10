import React from 'react'
import Todo from '../../models/todo'
import TodoItem from '../TodoItem/TodoItem'
import classes from './Todos.module.css'

interface TodosProps {
  jobList: Todo[]
  onRemoveJob: (idJob: string) => void
}

const Todos: React.FC<TodosProps> = ({ jobList, onRemoveJob }) => {
  const renderTodosList = () => {
    return jobList.map((item) => {
      return (
        <TodoItem
          onRemoveJob={() => onRemoveJob(item.id)}
          key={item.id}
          job={item.job}
        />
      )
    })
  }

  return <div className={classes.todos}>{renderTodosList()}</div>
}

export default Todos
