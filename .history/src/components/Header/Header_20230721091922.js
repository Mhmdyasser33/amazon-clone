import React from 'react'
import { Link } from 'react-router-dom'
import amazonLog from '../../images/header-logo.png'
import "./Header.css"
const Header = () => {
  return (
    <div className='Header'>
    <Link to="/">
     <img  className='header-logo' src={amazonLog } alt='amazon-logo'/>
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
          <div className='header-options'>
           <span className='header-option-one'> Your </span>
           <span className='header-option-two'>Prime </span>
          </div>
          <Link to="/checkout">
        <div className='header-optionCart'>
        <img src='../../images/icons/shopping-cart.png' alt='shoppingCart'/>
        <span> 6 </span>
        </div>
        </Link>
    </div>
    </div>
  )
}

export default Header