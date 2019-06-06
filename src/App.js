import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import { Home } from './pages'

function App () {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </div>
  )
}

export default App
