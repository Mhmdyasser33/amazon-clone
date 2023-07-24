import React from 'react'
import HomeImg from '../../images/home.jpg'
import Product from '../Product/Product'
import shortid from 'shortid'
import imageOne from '../../images/products/1.png'
import imageTwo from '../../images/products/2.png'
import imageThree from '../../images/products/3.png'
import imageFour from '../../images/products/4.png'
import imageFive from '../../images/products/5.png'
import imageSix from '../../images/products/6.png'
import imageSeven from '../../images/products/4.png'
import imageEight from '../../images/products/5.png'
import imageNine  from '../../images/products/6.png'
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