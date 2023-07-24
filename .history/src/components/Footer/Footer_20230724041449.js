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
  <Link to="#"><p style={{color: "#dddddd" , textDecoration : "underline" ,fontSize:"14px"}} className="career-link">Careers</p></Link>
  <Link to="#"><p style={{color: "#dddddd" , textDecoration : "underline" ,fontSize:"14px"}} className="blog-link">Blog</p></Link>
  <Link to="#"><p style={{color: "#dddddd" , textDecoration : "underline" ,fontSize:"14px"}} className="about-link">About Amazon</p></Link>
  <Link to="#"><p style={{color: "#dddddd" , textDecoration : "underline" ,fontSize:"14px"}} className="investor-link">Investor Relations</p></Link>
  <Link to="#"><p style={{color: "#dddddd" , textDecoration : "underline" ,fontSize:"14px"}} className="devices-link">Amazon Devices</p></Link>
  <Link to="#"><p style={{color: "#dddddd" , textDecoration : "underline" ,fontSize:"14px"}} className="science-link">Amazon Science</p></Link>
         </div>
         <div className="make-money-with-us-container">
  <h3>Make Money with Us</h3>
  <Link to="#"><p style={{color: "#dddddd" , textDecoration : "underline" , fontSize : "14px"}} className="sell-products-link">Sell products on Amazon</p></Link>
  <Link to="#"><p style={{color: "#dddddd" , textDecoration : "underline" , fontSize : "14px"}} className="sell-amazon-business-link">Sell on Amazon Business</p></Link>
  <Link to="#"><p style={{color: "#dddddd" , textDecoration : "underline" , fontSize : "14px"}} className="sell-apps-link">Sell apps on Amazon</p></Link>
  <Link to="#"><p style={{color: "#dddddd" , textDecoration : "underline" , fontSize : "14px"}} className="affiliate-link">Become an Affiliate</p></Link>
  <Link to="#"><p style={{color: "#dddddd" , textDecoration : "underline" , fontSize : "14px"}} className="advertise-link">Advertise Your Products</p></Link>
  <Link to="#"><p style={{color: "#dddddd" , textDecoration : "underline" , fontSize : "14px"}} className="self-publish-link">Self-Publish with Us</p></Link>
  <Link to="#"><p style={{color: "#dddddd" , textDecoration : "underline" , fontSize : "14px"}} className="amazon-hub-link">Host an Amazon Hub</p></Link>
  <Link to="#"><p style={{color: "#dddddd" , textDecoration : "underline" , fontSize : "14px"}} className="more-make-money-link">See More Make Money with Us</p></Link>
       </div>

       <div className="payment-container">
  <h3>Amazon Payment Products</h3>
  <Link to="#"><p style={{color: "#dddddd" , textDecoration : "underline" , fontSize: "14px"}} className="business-card-link">Amazon Business Card</p></Link>
  <Link to="#"><p style={{color: "#dddddd" , textDecoration : "underline" , fontSize: "14px"}} className="shop-points-link">Shop with Points</p></Link>
  <Link to="#"><p style={{color: "#dddddd" , textDecoration : "underline" , fontSize: "14px"}} className="reload-balance-link">Reload Your Balance</p></Link>
  <Link to="#"><p style={{color: "#dddddd" , textDecoration : "underline" , fontSize: "14px"}} className="currency-converter-link">Amazon Currency Converter</p></Link>
     </div>
        <div className="amazon-help-you-container">
  <h3>Let Us Help You</h3>
  <Link><p style={{color: "#dddddd", textDecoration : "underline" , fontSize : "14px"}} className="covid-help-link">Amazon and COVID-19</p></Link>
  <Link><p style={{color: "#dddddd", textDecoration : "underline" , fontSize : "14px"}} className="account-link">Your Account</p></Link>
  <Link><p style={{color: "#dddddd", textDecoration : "underline" , fontSize : "14px"}} className="orders-link">Your Orders</p></Link>
  <Link><p style={{color: "#dddddd", textDecoration : "underline" , fontSize : "14px"}} className="shipping-rates-link">Shipping Rates & Policies</p></Link>
  <Link><p style={{color: "#dddddd", textDecoration : "underline" , fontSize : "14px"}} className="returns-link">Returns & Replacements</p></Link>
  <Link><p style={{color: "#dddddd", textDecoration : "underline" , fontSize : "14px"}} className="content-devices-link">Manage Your Content and Devices</p></Link>
  <Link><p style={{color: "#dddddd", textDecoration : "underline" , fontSize : "14px"}} className="assistant-link">Amazon Assistant</p></Link>
  <Link><p style={{color: "#dddddd", textDecoration : "underline" , fontSize : "14px"}} className="help-link">Help</p></Link>
        </div>
       </div>
         <hr></hr>
         <div className='footer-info'>
          <div className='info'>
          <Link to="#">
            <img className='earth-icon' src={earthIcon} alt='earth-icon'/>
           <span className='selected-language' style={{color:"#cccccc"}}> English </span>
          </Link>
          </div>
         <div className='info'>
          <Link to="#">
           <span className='dollar-sign' style={{color:"#cccccc"}}> $ </span>
            <span className='currency' style={{color:"#cccccc"}}> USD- U.S. Dollar</span>
          </Link>
         </div>
         <div className='info'>
          <Link to="#">
          <img className='united-states-image' src={unitedStatesIcon} alt='united-states-icon'/>
          <span className='country-name' style={{color:"#cccccc"}}> United States </span>
          </Link>
         </div>
       </div>
       <div>
        <Link className=''>
          <h5>Amazon Music</h5>
          <h6>Stream millions of songs</h6>
        </Link>
        <Link className=''>
          <h5>Amazon Advertising</h5>
          <h6>Find, attract, and engage customers</h6>
        </Link>
        <Link className=''>
          <h5>6pm</h5>
          <h6>Score deals on fashion brands</h6>
        </Link>
        <Link className=''>
          <h5>AbeBooks</h5>
          <h6>Books, art & collectibles</h6>
        </Link>
        <Link className=''>
          <h5>ACX</h5>
          <h6>AudioBook Publishing Made Easy</h6>
        </Link>
        <Link className=''>
          <h5>Amazon Music</h5>
          <h6>Stream millions of songs</h6>
        </Link>
        <Link className=''>
          <h5>Amazon Music</h5>
          <h6>Stream millions of songs</h6>
        </Link>
        <br>
        </br>
        <Link className=''>
          <h5>Sell on Amazon</h5>
          <h6>Start a Selling Account</h6>
        </Link>
        <Link className=''>
          <h5>Amazon Business</h5>
          <h6>Everything For Your Business</h6>
        </Link>
        <Link className=''>
          <h5>AmazonGlobal </h5>
          <h6>Ship Orders Internationally</h6>
        </Link>
        <Link className=''>
          <h5>Home Services	</h5>
          <h6>Experienced Pros Happiness Guarantee</h6>
        </Link>
        <Link className=''>
          <h5>Amazon Ignite</h5>
          <h6>Sell your original Digital Educational Resources</h6>
        </Link>
        <Link className=''>
          <h5>Amazon Web Services</h5>
          <h6>Scalable Cloud
Computing Services</h6>
        </Link>
        <Link className=''>
          <h5>Amazon Music</h5>
          <h6>Stream millions of songs</h6>
        </Link>
        <br>
        </br>
        <Link className=''>
          <h5>Amazon Music</h5>
          <h6>Stream millions of songs</h6>
        </Link>
        <Link className=''>
          <h5>Amazon Music</h5>
          <h6>Stream millions of songs</h6>
        </Link>
        <Link className=''>
          <h5>Amazon Music</h5>
          <h6>Stream millions of songs</h6>
        </Link>
        <Link className=''>
          <h5>Amazon Music</h5>
          <h6>Stream millions of songs</h6>
        </Link>
        <Link className=''>
          <h5>Amazon Music</h5>
          <h6>Stream millions of songs</h6>
        </Link>
        <Link className=''>
          <h5>Amazon Music</h5>
          <h6>Stream millions of songs</h6>
        </Link>
        <Link className=''>
          <h5>Amazon Music</h5>
          <h6>Stream millions of songs</h6>
        </Link>
        <br>
        </br>
        <Link className=''>
          <h5>Amazon Music</h5>
          <h6>Stream millions of songs</h6>
        </Link>
        <Link className=''>
          <h5>Amazon Music</h5>
          <h6>Stream millions of songs</h6>
        </Link>
        <Link className=''>
          <h5>Amazon Music</h5>
          <h6>Stream millions of songs</h6>
        </Link>
       </div>
        </div>
    </>

  )
}

export default Footer