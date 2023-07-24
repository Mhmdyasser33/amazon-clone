import React from 'react'
import StarIcon from '../../images/'
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
           <img src='' alt='star'/>
       </p>
     </div>
    </div>
  )
}

export default Product