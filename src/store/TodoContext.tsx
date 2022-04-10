import React, { useState } from 'react'
import Todo from '../models/todo'

type TodoTypes = {
  jobList: Todo[]
  removeJobHanlder: (idJob: string) => void
  addJobHandler: (textJob: string) => void
}

export const TodoContext = React.createContext<TodoTypes>({
  jobList: [],
  removeJobHanlder: (idJob: string) => {},
  addJobHandler: (textJob: string) => {}
})

const TodoContextProvider: React.FC = (props) => {
  const [jobList, setJobList] = useState<Todo[]>([])

  const addJobHandler = (textJob: string) => {
    setJobList((prevJobList) => {
      const newJob = new Todo(textJob)
      return [newJob, ...prevJobList]
    })
  }

  const removeJobHanlder = (idJob: string) => {
    setJobList((prevJobList) => {
      return prevJobList.filter((job) => job.id !== idJob)
    })
  }

  const valueContext = {
    jobList,
    addJobHandler,
    removeJobHanlder
  }
  return (
    <TodoContext.Provider value={valueContext}>
      {props.children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider
