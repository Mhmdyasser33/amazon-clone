import React from 'react'
import HomeImg from '../../images/home.jpg'
import Product from '../Product/Product'
const Home = () => {
  return (
    <div className='homr'>
      <dvi className="home-container">
     <img src={HomeImg} alt='home-img'/>
     <div className='home-row'>
     <Product/>
     <Product/>
     </div>
     <div className='home-row'>
     <Product/>
     </div>
     <div className='home-row'>
     <Product/>
     </div>
     <div className='home-row'>
     <Product/>
     </div>
      </dvi>
    </div>
  )
}

export default Home