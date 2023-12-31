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
const LazyLoading = React.lazy(() => import ("../Footer/Footer.js")) ;

const Home = () => {
  return (
    <>
    <div className='home'>
      <dvi className="home-container">
        <img src={HomeImg} alt='home-img' style={{width : "100%"}}/>
        <div className='home-row'>
          {/* Rendering the first product */}
          <Product
            id={shortid.generate()}
            image={imageOne}
            title="Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset: Retractable Noise Cancelling Mic - USB DAC -  For PC, PS4, PS5, Nintendo Switch, Xbox One, Xbox Series X & S, Mobile – Black"
            price={100}
            rating={5}
          />
          {/* Rendering the second product */}
          <Product
            id={shortid.generate()}
            image={imageTwo}
            title="Lenovo - 2021 - IdeaPad 3 - Gaming Laptop - AMD Ryzen 5 5600H - 8GB RAM - 256GB Storage - NVIDIA GeForce GTX 1650-15.6 FHD Display - Windows 11 Home"
            price={500}
            rating={5}
          />
        </div>
        <div className='home-row'>
          {/* Rendering the third product */}
          <Product
            id={shortid.generate()}
            image={imageThree}
            price={300.50}
            title="Fujitsu ScanSnap iX1600 Wireless or USB High-Speed Cloud Enabled Document, Photo & Receipt Scanner with Large Touchscreen and Auto Document Feeder for Mac or PC, White"
            rating={5}
          />
          {/* Rendering the fourth product */}
          <Product
            id={shortid.generate()}
            image={imageFour}
            price={200.32}
            title="Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB"
            rating={4}
          />
          {/* Rendering the fifth product */}
          <Product
            id={shortid.generate()}
            image={imageFive}
            price={250.76}
            title="MeLE PCG02 Fanless Mini PC Stick Windows 11 Pro J4125 8GB/128GB Portable Mini Desktop Computer Stick Business & Home Video Support HDMI 4K 60Hz, BT4.2, 2.4G/5.8G Dual Band Wi-Fi, USB, Ethernet..."
            rating={5}
          />
        </div>
        <div className='home-row'>
          {/* Rendering the sixth product */}
          <Product
            id={shortid.generate()}
            image={imageFive}
            price={250.76}
            title="MeLE PCG02 Fanless Mini PC Stick Windows 11 Pro J4125 8GB/128GB Portable Mini Desktop Computer Stick Business & Home Video Support HDMI 4K 60Hz, BT4.2,2.4G/5.8G Dual Band Wi-Fi, USB, Ethernet..."
            rating={5}
          />
          {/* Rendering the seventh product */}
          <Product
            id={shortid.generate()}
            image={imageFour}
            price={200.32}
            title="Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB"
            rating={4}
          />
          {/* Rendering the eighth product */}
          <Product
            id={shortid.generate()}
            image={imageThree}
            price={300.50}
            title="Fujitsu ScanSnap iX1600 Wireless or USB High-Speed Cloud Enabled Document, Photo & Receipt Scanner with Large Touchscreen and Auto Document Feeder for Mac or PC, White"
            rating={5}
          />
        </div>
        <div className='home-row'>
          {/* Rendering the ninth product */}
          <Product
            id={shortid.generate()}
            image={imageSix}
            title="SAMSUNG Galaxy S22 Ultra Cell Phone, Factory Unlocked Android Smartphone, 128GB, 8K Camera & Video, Brightest Display Screen, S Pen, Long Battery Life, Fast 4nm Processor, US Version, Phantom Black"
            price={100}
            rating={5}
          />
        </div>
        <React.Suspense>
        <LazyLoading/>
        </React.Suspense>
      </dvi>
    </div>
    </>
  )
}

export default Home