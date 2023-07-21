import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import amazonLogo from '../../images/header-logo.png'
const Login = () => {
  return (
    <div className='login'>
     <Link to="/login">
     <img  className='header-logo' src={amazonLogo} alt='amazon-logo'/>
    </Link>
    <div>
      <h2>Sign in </h2>
    </div>
    <form>
      <div>

      </div>
    <label>E-main</label>
    <input type='email'/>
    <label>Password</label>
    <input type='password'/>
    </form>
    </div>
  )
}

export default Login