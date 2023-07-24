import React from 'react'
import './CheckoutProduct.css'
const CheckoutProduct = ({id , title , price , image , rating}) => {
  return (
    <div className='checkout-product'>
      <img src={image} alt='product-img'/>
       <p>{tit}</p>
    </div>
  )
}

export default CheckoutProduct