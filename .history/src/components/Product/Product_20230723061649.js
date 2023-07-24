import React from 'react'
import StarIcon from '../../images/icons/star.png'
import './Product.css'
const Product = () => {
  return (
    <div className='product'>
     <div className='product-info'>
       <p>title</p>
       <p>
        <small>$</small>
        <strong>100</strong>
       </p>
       <dic className='moon'>
           <img src={StarIcon} alt='star-icon'/>
       </dic>
     </div>
     <img src='' alt='product-img'/>
    </div>
  )
}

export default Product