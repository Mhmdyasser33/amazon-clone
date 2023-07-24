import React from 'react'
import './Checkout.css'
import checkoutAds from '../../images/checkoutAd.jpg'
const Checkout = () => {
  return (
    <div className='checkout'>
        <div className='checkout-leftSide'>
            <img src={checkoutAds} alt='checkout-ads'/>
               <p></p>
        </div>
    </div>
  )
}

export default Checkout