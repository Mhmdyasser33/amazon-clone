import React from 'react'
import { useAuth } from '../../context/GlobalContext'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import { Link, useNavigate } from 'react-router-dom';
import { calcProductTotal } from '../../context/MainReducer';
import CurrencyFormat from 'react-currency-format';
import './Payment.css'
const Payment = () => {
    const {card , user} = useAuth() ;
    const navigate = useNavigate() ;
  return (
    <div className='payment'>
        <div className='payment-container'>
            <h1>
           Checkout (<Link to="/checkout">{card.length} items</Link> )
            </h1>
            {/* payment delivery code */}
            <div className='payment-section'>
            <div className='payment-title'>
                 <h3 className='delivery-address'>Delivery Address </h3>
            </div>
            <div className='user-details'>
            <p className='user-email'> {user ? user.email : "Guest"} </p>
            <p className='payment-address'> Qena , Egypt</p>
            </div>
            </div>
            {/* Review items and delivery code  */}
            <div className='payment-section'>
            <div className='payment-title'>
                 <h3>Review items and delivery  </h3>
            </div>
            <div className='payment-items'>
               {card.map((item) =>(
                <CheckoutProduct
                key={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
                />
               ))}
            </div>
            </div>
             {/* payment method */}
            <div className='payment-section'>
                 <h3>Payment Method </h3>
                 <div className='payment-details'>
                 <form>
            <div className='payment-price-container'>
 <CurrencyFormat renderText={(value) => <h3>Order Total : {value}</h3> }
     decimalScale={2}
     value={calcProductTotal(card)}
      prefix={`$`}
      displayType='text'
      thousandSeparator= {true}
    />
          <button>
               <span>But Now </span>
          </button>
            </div>
                 </form>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Payment