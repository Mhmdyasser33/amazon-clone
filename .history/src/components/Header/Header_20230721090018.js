import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='Header'>
    <Link to="/">
     <img src='.' alt='amazon-logo'/>
    </Link>
    </div>
  )
}

export default Header