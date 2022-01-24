import { Component } from "react"

import Users from "./Users"
import classes from "./UserFinder.module.css"

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
]
class UserFinder extends Component {
  constructor() {
    super()
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    }
  }
  searchChangeHandler(event) {
    this.setState({
      searchTerm: event.target.value,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      })
    }
  }

  //DEMO fake call api
  componentDidMount() {
    console.log("componentDidMount")
    this.setState({
      filteredUsers: DUMMY_USERS,
    })
  }
  render() {
    return (
      <div className={classes.finder}>
        <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        <Users users={this.state.filteredUsers} />
      </div>
    )
  }
}

export default UserFinder
