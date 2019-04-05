import React from 'react'
import { loadUsers } from './logic'
import UserItem from './UserItem'

const ListUsers = (props) => {
    const users = loadUsers()

    return (
        <div>
            {
                users.map(
                    user => (
                        <UserItem
                            key={user.uuid}
                            user={user}
                        />
                    )
                )
            }
        </div>
    )

}


export default ListUsers
