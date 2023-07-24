import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
      <Link to="/">
        <p>Back to top</p>
      </Link>
    <div className='footer-info'>

    </div>
        </div>
    </div>
  )
}

export default Footer