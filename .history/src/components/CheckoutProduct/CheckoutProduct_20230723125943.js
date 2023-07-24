import React from 'react'
import './CheckoutProduct.css'
import StarIcon from '../../images/icons/star.png'
const CheckoutProduct = ({id , title , price , image , rating}) => {
  return (
    <div className='checkout-product'>
      <img src={image} alt='product-img'/>
       <p>{title}</p>
       <div>
       <p>$</p>
       <p>{price}</p>
       </div>
      {Array(rating)
      .fill()
      .map((_ , i ) =>(
     <p>
        <img src={StarIcon} alt='star-icon'/>
     </p>
      ))}
     <button>Remove from Card </button>
    </div>
  )
}

export default CheckoutProduct