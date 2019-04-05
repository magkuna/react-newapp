import React from 'react'

import List from './List'

import { loadUsers, deleteUser } from './logic'

class ListUsers extends React.Component {
  state = {
    users: loadUsers(),
  }

  deleteUserAndReRender = (uuid) => {
    deleteUser(uuid)

    this.setState({
      users: loadUsers(),
    })
  }

  render() {
    return (
      <div>
        <List
          users={this.state.users}
          deleteUserAndReRender = {this.deleteUserAndReRender}
        />
      </div>
    )
  }
}
export default ListUsers