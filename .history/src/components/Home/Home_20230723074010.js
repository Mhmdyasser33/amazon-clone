import React from 'react'
import HomeImg from '../../images/home.jpg'
import Product from '../Product/Product'
import shortid from 'shortid'
import imageOne from '../../images/products/1.png'
import './Home.css'
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
     price={100}
     rating={5}/>
     <Product
     image={imageTwo}
     title="Lenovo - 2021 - IdeaPad 3 - Gaming Laptop - AMD Ryzen 5 5600H - 8GB RAM - 256GB Storage - NVIDIA GeForce GTX 1650-15.6 FHD Display - Windows 11 Home"
     />
     </div>
     <div className='home-row'>
     <Product
     image={imageThree}/>
     <Product
     image={imageFour}/>
     <Product
     image={imageFive}/>
     </div>
     <div className='home-row'>
     <Product
     image={imageNine}/>
     <Product
     image={imageSeven}/>
     <Product
      image={imageEight}/>
     </div>
     <div className='home-row'>
     <Product
    image={imageSix}/>
     </div>
      </dvi>
    </div>
  )
}

export default Home