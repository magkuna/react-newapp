import React from 'react'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import AddUser from './AddUser'
import ListUsers from './ListUsers'

const App = (props) => (
  <div>
    <Router>
      <Link to={'/'}>Lista</Link> <Link to={'/add'}>Dodaj</Link>
      <Route exact path={'/'} component={ListUsers} />
      <Route path={'/add'} component={AddUser} />
    </Router>
  </div>
)

export default App
