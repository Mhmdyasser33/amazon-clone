import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='footer-container'>
      <Link to="/">
        <p className='scroll-top' style={{color: "#ffffff"}}>Back to top</p>
      </Link>
         </div>
       <div className='footer-links'>
         <div className="know-us-container">
  <h3>Get to Know Us</h3>
  <Link><p style={{color: "#dddddd"}} className="career-link">Careers</p></Link>
  <Link><p style={{color: "#dddddd"}} className="blog-link">Blog</p></Link>
  <Link><p style={{color: "#dddddd"}} className="about-link">About Amazon</p></Link>
  <Link><p style={{color: "#dddddd"}} className="investor-link">Investor Relations</p></Link>
  <Link><p style={{color: "#dddddd"}} className="devices-link">Amazon Devices</p></Link>
  <Link><p style={{color: "#dddddd"}} className="science-link">Amazon Science</p></Link>
         </div>
         <div className="make-money-with-us-container">
  <h3>Make Money with Us</h3>
  <Link><p style={{color: "#dddddd"}} className="sell-products-link">Sell products on Amazon</p></Link>
  <Link><p style={{color: "#dddddd"}} className="sell-amazon-business-link">Sell on Amazon Business</p></Link>
  <Link><p style={{color: "#dddddd"}} className="sell-apps-link">Sell apps on Amazon</p></Link>
  <Link><p style={{color: "#dddddd"}} className="affiliate-link">Become an Affiliate</p></Link>
  <Link><p style={{color: "#dddddd"}} className="advertise-link">Advertise Your Products</p></Link>
  <Link><p style={{color: "#dddddd"}} className="self-publish-link">Self-Publish with Us</p></Link>
  <Link><p style={{color: "#dddddd"}} className="amazon-hub-link">Host an Amazon Hub</p></Link>
  <Link><p style={{color: "#dddddd"}} className="more-make-money-link">See More Make Money with Us</p></Link>
       </div>

       <div className="payment-container">
  <h3>Amazon Payment Products</h3>
  <Link><p style={{color: "#dddddd"}} className="business-card-link">Amazon Business Card</p></Link>
  <Link><p style={{color: "#dddddd"}} className="shop-points-link">Shop with Points</p></Link>
  <Link><p style={{color: "#dddddd"}} className="reload-balance-link">Reload Your Balance</p></Link>
  <Link><p style={{color: "#dddddd"}} className="currency-converter-link">Amazon Currency Converter</p></Link>
     </div>
        <div className="amazon-help-you-container">
  <h3>Let Us Help You</h3>
  <Link><p style={{color: "#dddddd", lineHeight}} className="covid-help-link">Amazon and COVID-19</p></Link>
  <Link><p style={{color: "#dddddd", lineHeight}} className="account-link">Your Account</p></Link>
  <Link><p style={{color: "#dddddd", lineHeight}} className="orders-link">Your Orders</p></Link>
  <Link><p style={{color: "#dddddd", lineHeight}} className="shipping-rates-link">Shipping Rates & Policies</p></Link>
  <Link><p style={{color: "#dddddd", lineHeight}} className="returns-link">Returns & Replacements</p></Link>
  <Link><p style={{color: "#dddddd", lineHeight}} className="content-devices-link">Manage Your Content and Devices</p></Link>
  <Link><p style={{color: "#dddddd", lineHeight}} className="assistant-link">Amazon Assistant</p></Link>
  <Link><p style={{color: "#dddddd", lineHeight}} className="help-link">Help</p></Link>
        </div>
       </div>
        </div>

    </>

  )
}

export default Footer