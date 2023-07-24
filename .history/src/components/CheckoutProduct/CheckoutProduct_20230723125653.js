import React from 'react'
import './CheckoutProduct.css'
const CheckoutProduct = ({id , title , price , image , rating}) => {
  return (
    <div className='checkout-product'>
      <img src={image} alt=''/>
    </div>
  )
}

export default CheckoutProduct