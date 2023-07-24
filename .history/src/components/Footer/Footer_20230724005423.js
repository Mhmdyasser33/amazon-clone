import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
      <Link to="/">
        <p>Back to top</p>
      </Link>
    <div className='know-us-container'>
        <h3>Get to Know Us </h3>
  <Link>
  <p> Careers </p>
  </Link>
  <Link>
  <p> Blog </p>
  </Link>
  <Link>
  <p>About Amazon</p>
  </Link>
  <Link>
  <p>Investor Relations </p>
  </Link>
  <Link>
  <p> Amazon Devices </p>
  </Link>
  <Link>
  <p>Amazon Science </p>
  </Link>
    </div>
    <div className='make-money-with-us-container'>
        <h3> Make Money with Us </h3>
  <Link>
  <p> Sell products on Amazon </p>
  </Link>
  <Link>
  <p> Sell on Amazon Business </p>
  </Link>
  <Link>
  <p>Sell apps on Amazon</p>
  </Link>
  <Link>
  <p>Become an Affiliate </p>
  </Link>
  <Link>
  <p> Advertise Your Products </p>
  </Link>
  <Link>
  <p>Self-Publish with Us </p>
  </Link>
  <Link>
  <p>Host an Amazon Hub </p>
  </Link>
  <Link>
  <p>See More Make Money with Us </p>
  </Link>
    </div>
        </div>
    </div>
  )
}

export default Footer