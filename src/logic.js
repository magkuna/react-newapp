import uuidv1 from 'uuid/v1'



const LOCAL_STORAGE_KEY = 'jfddl7-users'


class User {
    constructor(name, email, avatar) {
        this.name = name
        this.email = email
        this.avatar = avatar
        this.uuid = uuidv1()
    }
}

const loadUsers = () => JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []

const saveUser = (user) => {
    const currentUsers = loadUsers()

    const newUsers = currentUsers.concat(user)

    localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(newUsers)
    )
}

const deleteUser = (index) => {
    const currentUsers = loadUsers()

    const newUsers = currentUsers.filter((user,userIndex) => userIndex !== index)

    localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(newUsers)
    )
}


window.deleteUser = deleteUser