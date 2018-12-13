import React, { Component } from 'react'

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import Login from './pages/Login'

import Timeline from './pages/Timeline'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} ></Route>
          <Route  path="/timeline" component={Timeline} ></Route>
        </Switch>
      </Router>
    )
  }
}

export default App