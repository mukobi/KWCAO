import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/impact'>Impact</Link></li>
        <li><Link to='/gallery'>Gallery</Link></li>
        <li><Link to='/take_action'>TakeAction</Link></li>
        <li><Link to='/news'>News</Link></li>
        <li><Link to='/team'>Team</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
