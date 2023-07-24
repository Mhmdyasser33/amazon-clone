import React from 'react'
import './Checkout.css'
import checkoutAds from '../../images/checkoutAd.jpg'
import { useAuth } from '../../context/GlobalContext'
const Checkout = ({id , title, price , rating, image}) => {
    const {user , card} = useAuth() ;
  return (
    <div className='checkout'>
        <div className='checkout-leftSide'>
            <img className='checkout-ads' src={checkoutAds} alt='checkout-ads'/>
              <div className='checkout-details'>
            <h3 className='userEmail'>Hello , {user ? user.email : "Guest"}</h3>
            <h2 className='checkout-title'>Your shopping Card</h2>
            {card.length > 0 ? (
                    card.map((item) =>(
                <checkoutProduct
                id = {id}
                title = {title}
                price = {price}
                rating = {rating}
                image = {image}
                />
                    ))
            ) :
            (
                <h2 style={{textAlign : "center "}} className='no-content-card'> Your Card is Empty </h2>
            )
            }
              </div>

        </div>
    </div>
  )
}

export default Checkout