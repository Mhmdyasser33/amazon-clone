import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import amazonLogo from '../../images/login-logo.png';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/GlobalContext';

const Login = () => {
  const { user } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Handle user registration
  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        // If registration is successful, navigate to the homepage
        (response && navigate('/'));
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  // Handle user sign in
  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        // If sign in is successful, navigate to the homepage
        (userAuth && navigate('/'));
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img className='amazon-logo' src={amazonLogo} alt='amazon-logo' />
      </Link>

      <div className='login-container'>
        <h1 className='signIn'>{user ? 'Sign out' : 'Sign In'}</h1>
        <form>
          <h5 className='email'>E-mail</h5>
          <input
            type='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5 className='password'>Password</h5>
          <input
            type='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='login-btn' onClick={handleSignIn}>
            Sign in
          </button>
          <p className='randomText'>
            By continuing, you agree to Amazon's Fake Clone Conditions of Use and Privacy Notice.
          </p>
          <button className='register-btn' onClick={handleRegister}>
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;