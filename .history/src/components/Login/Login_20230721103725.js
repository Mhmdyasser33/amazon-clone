import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import amazonLogo from '../../images/header-logo.png'
const Login = () => {
  return (
    <>
    <div className='login'>

     <Link to="/login">
     <img className='amazon-login' src={amazonLogo} alt='amazon-logo'/>
     </Link>

    <div className='login-container'>
      <h1 className='signIn'>Sign in </h1>
    <form>
     <h5>E-mail </h5>
    <input type='email' name='email' value=""/>

    <h5> password </h5>
    <input type='password' name='password' value=""/>
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
    </div>

    </>
  )
}

export default Login