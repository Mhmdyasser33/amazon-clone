import React from 'react'
import './Checkout.css'
import checkoutAds from '../../images/checkoutAd.jpg'
import { useAuth } from '../../context/GlobalContext'
const Checkout = ({id , title, price , rating, image}) => {
    const {user , card} = useAuth() ;
  return (
    <div className='checkout'>
        <div className='checkout-leftSide'>
            <img src={checkoutAds} alt='checkout-ads'/>
              <div>
            <h3>Hello , {user ? user.email : "Guest"}</h3>
            <h2>Your shopping Card</h2>
           {card.length > 0 ? (
            card.map((item) =>(
               <checkoutProduct
               id = {id}
               image  = {image}
               title = {title}
               price = {price}

               />
            )
           )}
              </div>

        </div>
    </div>
  )
}

export default Checkout