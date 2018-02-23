import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Gallery from './Pages/Gallery'
import Impact from './Pages/Impact'
import News from './Pages/News'
import TakeAction from './Pages/TakeAction'
import Team from './Pages/Team'
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/contact' component={Contact}/>
      <Route exact path='/gallery' component={Gallery}/>
      <Route exact path='/impact' component={Impact}/>
      <Route exact path='/news' component={News}/>
      <Route exact path='/take_action' component={TakeAction}/>
      <Route exact path='/team' component={Team}/>
    </Switch>
  </main>
)

export default Main