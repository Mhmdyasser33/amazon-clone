import React from 'react'
import './Checkout.css'
import checkoutAds from '../../images/checkoutAd.jpg'
import { useAuth } from '../../context/GlobalContext'
const Checkout = () => {
    const {user} = useAuth() ;
  return (
    <div className='checkout'>
        <div className='checkout-leftSide'>
            <img src={checkoutAds} alt='checkout-ads'/>
              <div>
            <h3>Hello , {user ? user.email : "Guest"}</h3>
            <h2></h2>
              </div>

        </div>
    </div>
  )
}

export default Checkout