import React from 'react'
import './Checkout.css'
import checkoutAds from '../../images/checkoutAd.jpg'
import { useAuth } from '../../context/GlobalContext'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import SubTotal from '../SubTotal/SubTotal'
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
                <CheckoutProduct
                key =  {item.id}
                id =  {item.id}
                title ={item.title}
                price = {item.price}
                rating = {item.rating}
                image =  {item.image}
                />
                    ))
            ) :
            (
              <div className='no-product-container' style={{display :"flex" , justifyContent : "center" , margin : ".5rem 0 0 18rem"}}>
               <h2 className='no-content-card'> Your Card is Empty </h2>
              </div>
            )
            }
              </div>

        </div>
        <div className='checkout-rightSide'>
          <SubTotal/>
        </div>

    </div>
  )
}

export default Checkout