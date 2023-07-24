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
       <div className='checkoutProduct-rating'>
       {Array(rating)
      .fill()
      .map((_ , i ) =>(
     <p>
        <img className='star-icon' src={StarIcon} alt='star-icon'/>
     </p>
      ))}
       </div>

     <button className='remove-btn'> Remove from Card </button>
    </div>
  )
}


<div className="checkoutProduct">
<img className="checkoutProduct-image" src={image} />
<div className="checkoutProduct-info">
  <p className="checkoutProduct-title">{title}</p>
  <p className="checkoutProduct-price">
    <small>$</small>
    <strong>{price}</strong>
  </p>
  <div className="checkoutProduct-rating">
    {Array(rating)
      .fill()
      .map((_, i) => (
        <p>
          <img src={starIcon} />
        </p>
      ))}
  </div>
  {!hiddenButton && (
    <button onClick={removeFromBasket}>Remove from Basket</button>
  )}
</div>
</div>

export default CheckoutProduct