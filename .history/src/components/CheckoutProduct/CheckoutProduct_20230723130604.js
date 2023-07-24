import React from 'react'
import './CheckoutProduct.css'
import StarIcon from '../../images/icons/star.png'
const CheckoutProduct = ({id , title , price , image , rating}) => {
  return (
    <div className='checkout-product'>
      <img className='product-image' src={image} alt='product-img' />
      <div className='chec'>

      </div>
    </div>
  )
}




export default CheckoutProduct