import { Component } from "react"

import Users from "./Users"
import classes from "./UserFinder.module.css"
import { UserContext } from "../store/UserContext"

class UserFinder extends Component {
  static contextType = UserContext
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
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      })
    }
  }

  //DEMO fake call api
  componentDidMount() {
    console.log("componentDidMount")
    this.setState({
      filteredUsers: this.context.users,
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
