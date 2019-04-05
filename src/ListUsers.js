import React from 'react'
import { loadUsers } from './logic'

const ListUsers = (props) => {
    const users = loadUsers()

    return (
        <div>
            {
                users.map(
                    user => (
                        <div
                        key={user.uuid}
                        >
                            {user.name}
                        </div>
                    )
                )
            }
        </div>
    )

}


export default ListUsers
