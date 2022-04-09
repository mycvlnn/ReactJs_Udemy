import React from 'react'

interface TodosProps {
  items: string[]
}

const Todos: React.FC<TodosProps> = ({ items }) => {
  const renderTodosList = () => {
    return items.map((job, index) => {
      return <li key={index}>{job}</li>
    })
  }

  return <div>{renderTodosList()}</div>
}

export default Todos
