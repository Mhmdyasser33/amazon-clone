import React from 'react'
import HomeImg from '../../images/home.jpg'
import Product from '../Product/Product'
import shortid from 'shortid'
import
const Home = () => {
  return (
    <div className='homr'>
      <dvi className="home-container">
     <img src={HomeImg} alt='home-img'/>
     <div className='home-row'>
     <Product
     id={shortid.generate()}/>
     <Product/>
     </div>
     <div className='home-row'>
     <Product/>
     <Product/>
     <Product/>
     </div>
     <div className='home-row'>
     <Product/>
     <Product/>
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