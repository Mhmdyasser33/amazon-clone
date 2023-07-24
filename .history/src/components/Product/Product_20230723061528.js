import React from 'react'
import StarIcon from '../../images/icons/star.png'
import
const Product = () => {
  return (
    <div className='product'>
     <div className='product-info'>
       <p>title</p>
       <p>
        <small>$</small>
        <strong>100</strong>
       </p>
       <p className='moon'>
           <img src={StarIcon} alt='star-icon'/>
       </p>
     </div>
     <img src='' alt='product-img'/>
    </div>
  )
}

export default Product