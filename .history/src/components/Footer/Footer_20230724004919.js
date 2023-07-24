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
  <Link>
  <p> Careers </p>
  </Link>
  <Link>
  <p> Blog</p>
  </Link>
  <Link>
  </Link>
  <Link>
  </Link>
  <Link>
  </Link>
  <Link>
  </Link>
    </div>
        </div>
    </div>
  )
}

export default Footer