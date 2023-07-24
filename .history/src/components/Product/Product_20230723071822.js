import React from 'react'
import StarIcon from '../../images/icons/star.png'
import productOne from '../../images/products/1.png'
import {UseAuth} from '../../context/GlobalContext'
import * as actions from '../../context/Action'

import './Product.css'
const Product = ({id , title , price , image}) => {
  const handleAddToCard = () =>{
   const {card , dispatch} = UseAuth() ;
   dispatch({
    type : actions.ADD_TO_CARD ,
    item : {
     id : id ,
     im
    }
   })
  }
  return (
    <div className='product'>
     <div className='product-info'>
       <p className='product-title'></p>
       <p className='product-price'>
        <small className='dollar-sign'>$</small>
        <strong className='price-value'>100</strong>
       </p>
     </div>
     <div className='product-rating'>
        <p>
           <img src={StarIcon} alt='star-icon'/>
        </p>
       </div>
     <img src={productOne} alt='product-img'/>
     <button className='add-btn' onClick={handleAddToCard }> Add to Card </button>
    </div>
  )
}

export default Product