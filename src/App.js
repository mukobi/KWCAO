import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import Home from './pages/Home';
import Books from './pages/Books';
import About from './pages/About';
import Header from './components/header';

const App = () =>
  <Router>
    <div>
      <Header />
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/books">Books</Link></li>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/books" component={Books}/>
      </Switch>
    </div>
  </Router>

export default App
