import React from 'react'
import './CheckoutProduct.css'
const CheckoutProduct = ({id , title , price , image , rating}) => {
  return (
    <div className='checkout-product'>
      <img src={image} alt='product-img'/>
       <p>{title}</p>
       <div>
       <p>$</p>
       <p></p>
       </div>
    </div>
  )
}

export default CheckoutProduct