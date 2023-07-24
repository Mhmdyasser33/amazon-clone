import React from 'react'
import HomeImg from '../../images/home.jpg'
import Product from '../Product/Product'
import './Home.css'
import shortid from 'shortid'
const Home = () => {
  return (
    <div className='home'>
        <div className='home-container'>
            <img src={HomeImg} alt='home-img' width="100%"/>
          <div className='home-row'>
              <Product id = {shortid.generate()} ,  img = img ,  />
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
        </div>
    </div>
  )
}

export default Home