import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='login'>
     <Link to="/">
     <img  className='header-logo' src={amazonLogo} alt='amazon-logo'/>
    </Link>
    </div>
  )
}

export default Login