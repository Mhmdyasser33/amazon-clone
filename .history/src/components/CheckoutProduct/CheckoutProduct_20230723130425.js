import React from 'react'
import './CheckoutProduct.css'
import StarIcon from '../../images/icons/star.png'
const CheckoutProduct = ({id , title , price , image , rating}) => {
  return (
    <div className='checkout-product'>
      <img className='product-image' src={image} alt='product-img' />
       <p className='checkoutProduct-title'>{title}</p>
       <div className='checkoutProduct-price'>
       <small className='dollar-sign'>$</small>
       <strong className='price-value'>{price}</strong>
       </div>
       <div>

       </div>

     <button className='remove-btn'> Remove from Card </button>
    </div>
  )
}

export default CheckoutProduct