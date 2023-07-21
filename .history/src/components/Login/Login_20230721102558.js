import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import amazonLogo from '../../images/header-logo.png'
const Login = () => {
  return (
    <div className='login'>
     <Link to="/login">
     <img className='amazon-login' src={amazonLogo} alt='amazon-logo'/>
    </Link>
    <div className='login-container'>
      <h1 className='signIn'>Sign in </h1>
    </div>
    <form>
      <div>
    <label for="email">E-main</label>
    <input type='email' name='email' value=""/>
    <label for="password">Password</label>
    <input type='password' name='password' value=""/>
      </div>
     <button className='login-btn'> Sign in </button>
     <p className='randomText'>
        By continuing, you agree to Amazon's Fake Clone Conditions of Use
            and Privacy Notice.
     </p>
     <button className='register-btn'>
     Create your Amazon Account
     </button>
    </form>
    </div>
  )
}

export default Login