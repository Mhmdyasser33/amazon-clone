import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='footer-container '>
      <Link to="/">
        <p className='scroll-top' style={{color: "#ffffff"}}>Back to top</p>
      </Link>
         </div>
         <div className="know-us-container">
  <h3>Get to Know Us</h3>
  <Link><p className="career-link">Careers</p></Link>
  <Link><p className="blog-link">Blog</p></Link>
  <Link><p className="about-link">About Amazon</p></Link>
  <Link><p className="investor-link">Investor Relations</p></Link>
  <Link><p className="devices-link">Amazon Devices</p></Link>
  <Link><p className="science-link">Amazon Science</p></Link>
         </div>

         <div className="make-money-with-us-container">
  <h3>Make Money with Us</h3>
  <Link><p className="sell-products-link">Sell products on Amazon</p></Link>
  <Link><p className="sell-amazon-business-link">Sell on Amazon Business</p></Link>
  <Link><p className="sell-apps-link">Sell apps on Amazon</p></Link>
  <Link><p className="affiliate-link">Become an Affiliate</p></Link>
  <Link><p className="advertise-link">Advertise Your Products</p></Link>
  <Link><p className="self-publish-link">Self-Publish with Us</p></Link>
  <Link><p className="amazon-hub-link">Host an Amazon Hub</p></Link>
  <Link><p className="more-make-money-link">See More Make Money with Us</p></Link>
</div>

    <div className='payment-container'>
        <h3> Amazon Payment Products </h3>
  <Link>
  <p> Amazon Business Card </p>
  </Link>
  <Link>
  <p> Shop with Points </p>
  </Link>
  <Link>
  <p>Reload Your Balance</p>
  </Link>
  <Link>
  <p>Amazon Currency Converter </p>
  </Link>
    </div>
        </div>
        <div className='amazon-help-you-container'>
        <h3> Let Us Help You </h3>
  <Link>
  <p> Amazon and COVID-19</p>
  </Link>
  <Link>
  <p> Your Account </p>
  </Link>
  <Link>
  <p>Your Orders</p>
  </Link>
  <Link>
  <p>Shipping Rates & Policies </p>
  </Link>
  <Link>
  <p> Returns & Replacements</p>
  </Link>
  <Link>
  <p>Manage Your Content and Devices </p>
  </Link>
  <Link>
  <p>Amazon Assistant </p>
  </Link>
  <Link>
  <p>Help </p>
  </Link>
    </div>
    </>

  )
}

export default Footer