import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import amazonLogo from '../../images/header-logo.png'
import earthIcon from '../../images/icons/globe.png'
import unitedStatesIcon from '../../images/icons/united-states.png'
const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='footer-container'>
      <Link to="/">
        <p className='scroll-top' style={{color: "#ffffff",background :"#37475a"}}>Back to top</p>
      </Link>
         </div>
       <div className='footer-link'>
         <div className="know-us-container">
  <h3>Get to Know Us</h3>
  <Link to="#"><p style={{color: "#dddddd" , textDecoration : "underline"}} className="career-link">Careers</p></Link>
  <Link to="#"><p style={{color: "#dddddd" , textDecoration : "underline"}} className="blog-link">Blog</p></Link>
  <Link to="#"><p style={{color: "#dddddd" , textDecoration : "underline"}} className="about-link">About Amazon</p></Link>
  <Link to="#"><p style={{color: "#dddddd" , textDecoration : "underline"}} className="investor-link">Investor Relations</p></Link>
  <Link to="#"><p style={{color: "#dddddd" , textDecoration : "underline"}} className="devices-link">Amazon Devices</p></Link>
  <Link to="#"><p style={{color: "#dddddd" , textDecoration : "underline"}} className="science-link">Amazon Science</p></Link>
         </div>
         <div className="make-money-with-us-container">
  <h3>Make Money with Us</h3>
  <Link to="#"><p style={{color: "#dddddd" , textDecoration : "underline"}} className="sell-products-link">Sell products on Amazon</p></Link>
  <Link to="#"><p style={{color: "#dddddd" , textDecoration : "underline"}} className="sell-amazon-business-link">Sell on Amazon Business</p></Link>
  <Link to="#"><p style={{color: "#dddddd" , textDecoration : "underline"}} className="sell-apps-link">Sell apps on Amazon</p></Link>
  <Link to="#"><p style={{color: "#dddddd" , textDecoration : "underline"}} className="affiliate-link">Become an Affiliate</p></Link>
  <Link to="#"><p style={{color: "#dddddd" , textDecoration : "underline"}} className="advertise-link">Advertise Your Products</p></Link>
  <Link to="#"><p style={{color: "#dddddd" , textDecoration : "underline"}} className="self-publish-link">Self-Publish with Us</p></Link>
  <Link to="#"><p style={{color: "#dddddd" , textDecoration : "underline"}} className="amazon-hub-link">Host an Amazon Hub</p></Link>
  <Link to="#"><p style={{color: "#dddddd" , textDecoration : "underline"}} className="more-make-money-link">See More Make Money with Us</p></Link>
       </div>

       <div className="payment-container">
  <h3>Amazon Payment Products</h3>
  <Link to="#"><p style={{color: "#dddddd" , textDecoration : "underline"}} className="business-card-link">Amazon Business Card</p></Link>
  <Link to="#"><p style={{color: "#dddddd" , textDecoration : "underline"}} className="shop-points-link">Shop with Points</p></Link>
  <Link to="#"><p style={{color: "#dddddd" , textDecoration : "underline"}} className="reload-balance-link">Reload Your Balance</p></Link>
  <Link to="#"><p style={{color: "#dddddd" , textDecoration : "underline"}} className="currency-converter-link">Amazon Currency Converter</p></Link>
     </div>
        <div className="amazon-help-you-container">
  <h3>Let Us Help You</h3>
  <Link><p style={{color: "#dddddd", textDecoration : "underline"}} className="covid-help-link">Amazon and COVID-19</p></Link>
  <Link><p style={{color: "#dddddd", textDecoration : "underline"}} className="account-link">Your Account</p></Link>
  <Link><p style={{color: "#dddddd", textDecoration : "underline"}} className="orders-link">Your Orders</p></Link>
  <Link><p style={{color: "#dddddd", textDecoration : "underline"}} className="shipping-rates-link">Shipping Rates & Policies</p></Link>
  <Link><p style={{color: "#dddddd", textDecoration : "underline"}} className="returns-link">Returns & Replacements</p></Link>
  <Link><p style={{color: "#dddddd", textDecoration : "underline"}} className="content-devices-link">Manage Your Content and Devices</p></Link>
  <Link><p style={{color: "#dddddd", textDecoration : "underline"}} className="assistant-link">Amazon Assistant</p></Link>
  <Link><p style={{color: "#dddddd", textDecoration : "underline"}} className="help-link">Help</p></Link>
        </div>
       </div>
         <hr></hr>
       <div className='footer-info'>
          <img  className="amazon-logo" src={amazonLogo} alt='amazon-logo' />
          <div>
          <Link to="#">
            <img className='earth-icon' src={earthIcon} alt='earth-icon'/>
           <span className='selected-language'> English </span>
          </Link>
         <div>
          <Link to="#">
           <small className='dollar-sign'> $ </small>
            <span className='currency'> USD- U.S. Dollar</span>
          </Link>
         </div>
         <div>
          <Link to="#">
          <img className='united-states-image' src={unitedStatesIcon} alt='united-states-icon'/>
          <span className='country-name'> United States </span>
          </Link>
         </div>
       </div>
        </div>
    </>

  )
}

export default Footer