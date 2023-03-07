import React from 'react'
import logo from '../media/Logo.png'

import './Header.css'

const Header = () => {
  return (
    <header>
        <img src={logo} alt="Restaurant Logo" />
    </header>
  )
}

export default Header