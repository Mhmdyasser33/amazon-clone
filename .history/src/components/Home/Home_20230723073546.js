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
import imageSeven from '../../images/products/71kr3WAj1FL._AC_UY218_.jpg'
import imageEight from '../../images/products/71wkMXIQ5HL._AC_UL400_.jpg'
import imageNine  from '../../images/products/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg'
const Home = () => {
  return (
    <div className='homr'>
      <dvi className="home-container">
     <img src={HomeImg} alt='home-img'/>
     <div className='home-row'>
     <Product
     id={shortid.generate()}
     image={imageOne}
     title="Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset: Retractable Noise Cancelling Mic - USB DAC -  For PC, PS4, PS5, Nintendo Switch, Xbox One, Xbox Series X & S, Mobile – Black"
     price={65}
     rating={5}/>
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