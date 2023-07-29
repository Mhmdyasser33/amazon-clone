import React from 'react'
import './SubTotal.css'
import CurrencyFormat from 'react-currency-format'
import {useAuth} from '../../context/GlobalContext'
import { calcProductTotal } from '../../context/MainReducer'
import { useNavigate } from 'react-router-dom'
const TotalPrice = () => {
const {basket} = useAuth() ;
const navigate = useNavigate() ;
  return (
    <div className='subtotal'>
    <CurrencyFormat renderText={(value) =>
    <>
     <p className='subtotal-container'>Subtotal ({basket.length} items ) : <strong className='subTotal-value'>{value}</strong></p>
     <small className='subtotal-gift'>
        <input type='checkbox'/>This order contains a gift
     </small>
    </>
    }
     decimalScale={2}
     value={calcProductTotal(basket)}
      prefix={`$`}
      displayType='text'
      thousandSeparator= {true}
    />
    <button className='checkout-btn' onClick={() => navigate("/payment")}>
      Processed to Checkout
    </button>
    </div>
  )
}

export default TotalPrice