import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Books from './Pages/Books'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/books' component={Books}/>
    </Switch>
  </main>
)

export default Main