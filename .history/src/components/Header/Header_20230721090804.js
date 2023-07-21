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
    <img src='../../images/icons/searchIcon.png' alt='search-icon'/>
    </div>
    <div className='header-nav'>
        <Link to="/login">
        <div className='header-options'>
         <div className='header-option-one'>Hello Guest </div>
         <div className='header-option-two'>Sign In</div>
        </div>
        </Link>
        <Link to="/orders">
        <div className='header-options'>
         <div className='header-option-one'> Returns  </div>
         <div className='header-option-two'>& Orders </div>
        </div>
        </Link>
          <dtwo className='header-options'>
           <span className='header-option-one'> Your </span>
           <span className='header-option-two'>Prime </span>
          </dtwo
    </div>
    </div>
  )
}

export default Header