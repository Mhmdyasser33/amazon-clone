import React from 'react'
import './Checkout.css'
import checkoutAds from '../../images/checkoutAd.jpg'
const Checkout = () => {
  return (
    <div className='checkout'>
        <div className='checkout-'>
            <img src={checkoutAds} alt='checkout-ads'/>
        </div>
    </div>
  )
}

export default Checkout