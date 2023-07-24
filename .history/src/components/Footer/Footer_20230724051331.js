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
       <div className='footer-links-container'>
        <Link>
          <h5 sty>Amazon Music</h5 sty>
          <h6>Stream millions of songs</h6>
        </Link>
        <Link className=''>
          <h5 sty>Amazon Advertising</h5 sty>
          <h6>Find, attract, and engage customers</h6>
        </Link>
        <Link className=''>
          <h5 sty>6pm</h5 sty>
          <h6>Score deals on fashion brands</h6>
        </Link>
        <Link className=''>
          <h5 sty>AbeBooks</h5 sty>
          <h6>Books, art & collectibles</h6>
        </Link>
        <Link className=''>
          <h5 sty>ACX</h5 sty>
          <h6>AudioBook Publishing Made Easy</h6>
        </Link>

        <Link className=''>
          <h5 sty>Sell on Amazon</h5 sty>
          <h6>Start a Selling Account</h6>
        </Link>
        <Link className=''>
          <h5 sty>Amazon Business</h5 sty>
          <h6>Everything For Your Business</h6>
        </Link>
        <br></br>
        <Link className=''>
          <h5 sty>AmazonGlobal </h5 sty>
          <h6>Ship Orders Internationally</h6>
        </Link>
        <Link className=''>
          <h5 sty>Home Services	</h5 sty>
          <h6>Experienced Pros Happiness Guarantee</h6>
        </Link>
        <Link className=''>
          <h5 sty>Amazon Ignite</h5 sty>
          <h6>Sell your original Digital Educational Resources</h6>
        </Link>
        <Link className=''>
          <h5 sty>Amazon Web Services</h5 sty>
          <h6>Scalable Cloud Computing Services</h6>
        </Link>
        <Link className=''>
          <h5 sty>Audible</h5 sty>
          <h6>Listen to Books & Original Audio Performances</h6>
        </Link>

        <Link className=''>
          <h5 sty>	Book Depository</h5 sty>
          <h6>Books With Free Delivery Worldwide</h6>
        </Link>
        <Link className=''>
          <h5 sty>Box Office Mojo</h5 sty>
          <h6>Find Movie Box Office Data</h6>
        </Link>
        <br></br>
        <Link className=''>
          <h5 sty>ComiXology</h5 sty>
          <h6>Thousands of Digital Comics</h6>
        </Link>
        <Link className=''>
          <h5 sty>	DPReview</h5 sty>
          <h6>Digital Photography</h6>
        </Link>
        <Link className=''>
          <h5 sty>Fabric</h5 sty>
          <h6>Sewing, Quilting & Knitting</h6>
        </Link>
        <Link className=''>
          <h5 sty>Goodreads</h5 sty>
          <h6>Book reviews & recommendations</h6>
        </Link>
        <Link className=''>
          <h5 sty>IMDb</h5 sty>
          <h6>Movies, TV & Celebrities</h6>
        </Link>

        <Link className=''>
          <h5 sty>IMDbPro</h5 sty>
          <h6>Get Info Entertainment Professionals Need</h6>
        </Link>
        <Link className=''>
          <h5 sty>	Kindle Direct </h5 sty>
          <h6>Publishing Indie Digital & Print Publishing Made Easy</h6>
        </Link>
        <br></br>
        <Link className=''>
          <h5 sty>Prime Video</h5 sty>
          <h6>Direct Video Distribution Made Easy  </h6>
        </Link>
        <Link className=''>
          <h5 sty>Shopbop</h5 sty>
          <h6>Designer Fashion Brands  </h6>
        </Link>
        <Link className=''>
          <h5 sty>Woot!</h5 sty>
          <h6>Deals and Shenanigans  </h6>
        </Link>
        <Link className=''>
          <h5 sty>Zappos</h5 sty>
          <h6> Shoes & Clothing</h6>
        </Link>
        <Link className=''>
          <h5 sty>	Ring</h5 sty>
          <h6>Smart Home Security Systems </h6>
        </Link>
        <Link className=''>
          <h5 sty>	eero WiFi</h5 sty>
          <h6>Stream 4K Video in Every Room  </h6>
        </Link>
        <Link className=''>
          <h5 sty>	Blink</h5 sty>
          <h6>Smart Security for Every Home</h6>
        </Link>
    <br></br>
        <Link className=''>
          <h5 sty>	Neighbors App</h5 sty>
          <h6>Real-Time Crim & Safety Alerts</h6>
        </Link>
        <Link className=''>
          <h5 sty>	Amazon Subscription </h5 sty>
          <h6>Boxes Top subscription boxes – right to your door  </h6>
        </Link>
        <Link className=''>
          <h5 sty>PillPack</h5 sty>
          <h6>Pharmacy Simplified</h6>
        </Link>
       </div>
        </div>
    </>

  )
}

export default Footer