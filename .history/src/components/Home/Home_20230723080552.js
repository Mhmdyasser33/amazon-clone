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
     title="Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset: Retractable Noise Cancelling Mic - USB DAC -  For PC, PS4, PS5..."
     price={100}
     rating={5}/>
     <Product
     image={imageTwo}
     title="Lenovo - 2021 - IdeaPad 3 - Gaming Laptop - AMD Ryzen 5 5600H - 8GB RAM - 256GB Storage - NVIDIA GeForce GTX 1650-15.6 FHD Display - Windows 11 Home"
     price={500}
     rating={5}/>
     </div>
     <div className='home-row'>
     <Product
     image={imageThree}
     price={300}
     title="Fujitsu ScanSnap iX1600 Wireless or USB High-Speed Cloud Enabled Document, Photo & Receipt Scanner..."
    rating={5}/>
     <Product
     image={imageFour}
     price={200}
     title="Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB"
     rating={4}/>
     <Product
     image={imageFive}
     price={250}
     title="MeLE PCG02 Fanless Mini PC Stick Windows 11 Pro J4125 8GB/128GB Portable Mini Desktop Computer Stick Business & Home Video Support HDMI 4K 60Hz, BT4.2, 2.4G/5.8G Dual."
     rating={5}/>
     </div>
     <div className='home-row'>
     <Product
     image={imageNine}
    title="Smart Watch Fitness Tracker with Heart Rate Blood Oxygen Blood Pressure Sleep Monitor 100 Sports Modes Step.."
     price={140}
     rating={5}/>
     <Product
     image={imageSeven}
     title="Redragon S101 Gaming Keyboard, M601 Mouse, RGB Backlit Gaming Keyboard, Programmable Backlit Gaming Mouse.."
     price={80}
     rating={5}/>
     <Product
      image={imageEight}
      title="Under Armour Boys' Elite Short Sleeve T-Shirt"
      price={50}
      rating={5}
      />
     </div>
     <div className='home-row'>
     <Product
    image={imageSix}
     title="SAMSUNG Galaxy S22 Ultra Cell Phone, Factory Unlocked Android Smartphone, 128GB, 8K Camera & Video, Brightest Display Screen, S Pen, Long Battery Life, Fast 4nm Processor, US Version, Phantom Black"
     price={100}
     rating={5}/>
     </div>
      </dvi>
    </div>
  )
}

export default Home