import React, { useContext, useRef } from 'react'
import { TodoContext } from '../../store/TodoContext'
import classes from './NewJob.module.css'

const NewJob: React.FC = (props) => {
  const { addJobHandler } = useContext(TodoContext)
  const inputTextRef = useRef<HTMLInputElement>(null)

  const addJob = (event: React.FormEvent) => {
    event.preventDefault()
    const enteredTextJob: string = inputTextRef.current!.value

    if (enteredTextJob.trim().length === 0) {
      alert('Please enter your job')
      return
    }
    addJobHandler(enteredTextJob)
    inputTextRef.current!.value = ''
  }

  return (
    <form onSubmit={addJob} className={classes.form}>
      <label>Task To Do</label>
      <input ref={inputTextRef} type="text" />
      <button>Add To Do</button>
    </form>
  )
}

export default NewJob
