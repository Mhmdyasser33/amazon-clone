import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import amazonLogo from '../../images/login-logo.png'
const Login = () => {
  const handleRegister = (e) =>{
    e.preventDefault() ;
  }
  return (
    <div className='login'>
     <Link to="/">
     <img className='amazon-logo' src={amazonLogo} alt='amazon-logo'/>
     </Link>

    <div className='login-container'>
      <h1 className='signIn'>Sign in </h1>
    <form>
     <h5 className='email'>E-mail </h5>
    <input type='email' name='email' />
    <h5 className='password'> password </h5>
    <input type='password' name='password'/>
     <button className='login-btn'> Sign in </button>
     <p className='randomText'>
        By continuing, you agree to Amazon's Fake Clone Conditions of Use
            and Privacy Notice.
     </p>
     <button className='register-btn' onClick={handleRegister}>
     Create your Amazon Account
     </button>
    </form>
    </div>
    </div>
  )
}

export default Login