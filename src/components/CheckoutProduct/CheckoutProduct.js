import React from 'react'
import './CheckoutProduct.css'
import StarIcon from '../../images/icons/star.png'
import { useAuth } from '../../context/GlobalContext'
import * as actions from '../../context/Action'
const CheckoutProduct = ({id , title , price , image , rating}) => {
  const {basket , dispatch} = useAuth() ;
  const handleRemoveProduct = () =>{
   dispatch({
    type : actions.REMOVE_FROM_CARD ,
    id ,
   })
  }
  return (
    <div className='checkout-product'>
      {image ? (
        <img className='checkoutProduct-image' src={image} alt='checkoutProductImage' />
      ) : (
    <div className='no-image-founded'>
       <p>No Image Available</p>
    </div>
      )}
      <div className='checkoutProduct-info'>
      <p className='checkoutProduct-title'>{title}</p>
       <div className='checkoutProduct-price'>
       <small className='dollar-sign'>$</small>
       <strong className='price-value'>{price}</strong>
       </div>
       <div className='checkoutProduct-rating'>
       {Array(rating)
      .fill()
      .map((_,i) =>(
     <p>
        <img className='star-icon' src={StarIcon} alt='star-icon'/>
     </p>
      ))}
       </div>
     <button className='remove-btn' onClick={handleRemoveProduct}> Remove from Card </button>

      </div>
    </div>
  )
}




export default CheckoutProduct