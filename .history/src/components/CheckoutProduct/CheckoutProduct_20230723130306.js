import React from 'react'
import './CheckoutProduct.css'
import StarIcon from '../../images/icons/star.png'
const CheckoutProduct = ({id , title , price , image , rating}) => {
  return (
    <div className='checkout-product'>
      <img className='product-image' src={image} alt='product-img' />
       <p className='checkoutProduct-title'>{title}</p>
       <div className='checkoutProduct-price'>
       <small className='dollar-sign'>$</س>
       <p className='price-value'>{price}</p>
       </div>
      {Array(rating)
      .fill()
      .map((_ , i ) =>(
     <p>
        <img className='star-icon' src={StarIcon} alt='star-icon'/>
     </p>
      ))}
     <button className='remove-btn'> Remove from Card </button>
    </div>
  )
}

export default CheckoutProduct