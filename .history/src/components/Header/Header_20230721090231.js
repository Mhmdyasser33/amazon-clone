import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='Header'>
    <Link to="/">
     <img src='../../images/login-logo.png' alt='amazon-logo'/>
    </Link>
    <div className='header-search'>
    <input type='text'/>
    
    </div>
    </div>
  )
}

export default Header