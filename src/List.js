import React from 'react'

import UserItem from './UserItem';

const List = (props) => {
  return (
    <div>
      {
        props.users.map(
          user => (
            <UserItem
              key={user.uuid}
              user={user}
              deleteUserAndReRender = {props.deleteUserAndReRender}
            />
          )
        )
      }
    </div>
  )
}

export default List