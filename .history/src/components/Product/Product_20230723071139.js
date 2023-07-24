import React from 'react'
import StarIcon from '../../images/icons/star.png'
import productOne from '../../images/products/1.png'
import productTwo from '../../images/products/2.png'
import productThree from '../../images/products/3.png'
import productFour from '../../images/products/4.png'
import productFive from '../../images/products/5.png'
import productSix from '../../images/products/6.png'

import './Product.css'
const Product = () => {
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
     <button className='add-btn' onClick={}> Add to Card </button>
    </div>
  )
}

export default Product