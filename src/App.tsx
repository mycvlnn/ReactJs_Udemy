import { useState } from 'react'
import NewJob from './components/NewJob/NewJob'
import Todos from './components/Todos/Todos'
import Todo from './models/todo'

function App() {
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

  return (
    <div className="app">
      <NewJob onAddJob={addJobHandler} />
      <Todos jobList={jobList} onRemoveJob={removeJobHanlder} />
    </div>
  )
}

export default App
