import React, { useRef } from 'react'
import classes from './NewJob.module.css'

interface NewJobProps {
  onAddJob: (textJob: string) => void
}

const NewJob: React.FC<NewJobProps> = (props) => {
  const inputTextRef = useRef<HTMLInputElement>(null)

  const addJobHandler = (event: React.FormEvent) => {
    event.preventDefault()
    const enteredTextJob: string = inputTextRef.current!.value

    if (enteredTextJob.trim().length === 0) {
      alert('Please enter your job')
      return
    }
    props.onAddJob(enteredTextJob)
    inputTextRef.current!.value = ''
  }

  return (
    <form onSubmit={addJobHandler} className={classes.form}>
      <label>Task To Do</label>
      <input ref={inputTextRef} type="text" />
      <button>Add To Do</button>
    </form>
  )
}

export default NewJob
