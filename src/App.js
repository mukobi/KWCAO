import React from 'react';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom';

import Header from './components/header';
import Main from './Main'

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

export default App
