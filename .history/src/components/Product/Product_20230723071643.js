import React from 'react'
import StarIcon from '../../images/icons/star.png'
import productOne from '../../images/products/1.png'
import {UseAuth} from '../../context/GlobalContext'

import './Product.css'
const Product = () => {
  const handleAddToCard = () =>{
   const {card , dispatch} = UseAuth() ;
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