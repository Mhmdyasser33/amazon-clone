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
      <h1>Sign in </h1>
    </div>
    <form>
      <div>
    <label>E-main</label>
    <input type='email'/>
    <label>Password</label>
    <input type='password'/>
      </div>
     <button> Sign in </button>
     <p>
        By continuing, you agree to Amazon's Fake Clone Conditions of Use
            and Privacy Notice.
     </p>
     <button>
     Create your Amazon Account
     </button>
    </form>
    </div>
  )
}

export default Login