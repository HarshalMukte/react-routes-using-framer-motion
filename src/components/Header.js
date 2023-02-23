import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/nike">Nike</NavLink></li>
        </ul>
    </div>
  )
}

export default Header