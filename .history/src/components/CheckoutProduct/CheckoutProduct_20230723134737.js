import React from 'react'
import './CheckoutProduct.css'
import StarIcon from '../../images/icons/star.png'
import ''
const CheckoutProduct = ({id , title , price , image , rating}) => {
  return (
    <div className='checkout-product'>
      <img className='checkoutProduct-image' src={image} alt='product-img' />
      <div className='checkoutProduct-info'>
      <p className='checkoutProduct-title'>{title}</p>
       <div className='checkoutProduct-price'>
       <small className='dollar-sign'>$</small>
       <strong className='price-value'>{price}</strong>
       </div>
       <div className='checkoutProduct-rating'>
       {Array(rating)
      .fill()
      .map((_, i) =>(
     <p>
        <img className='star-icon' src={StarIcon} alt='star-icon'/>
     </p>
      ))}
       </div>
     <button className='remove-btn'> Remove from Card </button>

      </div>
    </div>
  )
}




export default CheckoutProduct