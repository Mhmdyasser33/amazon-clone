import React from 'react'
import { Link } from 'react-router-dom'
import amazonLogo from '../../images/header-logo.png'
import searchIcon from '../../images/icons/searchIcon.png'
import shoppingCartIcon from '../../images/icons/shopping-cart.png'
import "./Header.css"
import { UseAuth } from '../../context/GlobalContext'
const Header = () => {
  const {user} = UseAuth() ;

  return (
    <div className='Header'>
    <Link to="/">
     <img  className='header-logo' src={amazonLogo} alt='amazon-logo'/>
    </Link>
    <div className='header-search'>
    <input className='header-searchInput' type='text' placeholder='Search Amazon'/>
    <img className='inputSearchIcon' src={searchIcon} alt='search-icon'/>
    </div>
    <div className='header-nav'>
        <Link to="/login">
        <div className='header-options'>
         <div className='header-option-one'>Hello {user ? `${user.email}` : "Guest"} </div>
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
        <img className='shopping-cart-icon' src={shoppingCartIcon} alt='shoppingCart'/>
        <span className='numberOfProductInCart'> 6 </span>
        </div>
        </Link>
    </div>
    </div>
  )
}

export default Header