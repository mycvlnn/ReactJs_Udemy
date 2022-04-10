class Todo {
  job: string
  id: string
  constructor(job: string) {
    this.id = Math.random().toString()
    this.job = job
  }
}
export default Todo
