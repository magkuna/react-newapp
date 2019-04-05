import uuidv1 from 'uuid/v1'


const LOCAL_STORAGE_KEY = 'jfddl7-users'

export class User {
  constructor(name, email, avatar) {
    this.name = name
    this.email = email
    this.avatar = avatar
    this.uuid = uuidv1()
  }
}

export const loadUsers = () => JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []

const modifyUsers = (makeModifications) => {
  const currentUsers = loadUsers()

  const newUsers = makeModifications(currentUsers)

  localStorage.setItem(
    LOCAL_STORAGE_KEY,
    JSON.stringify(newUsers)
  )
}

export const saveUser = (user) => modifyUsers(
  currentUsers => currentUsers.concat(user)
)

export const deleteUser = (uuid) => modifyUsers(
  currentUsers => currentUsers.filter((user) => user.uuid !== uuid)
)


