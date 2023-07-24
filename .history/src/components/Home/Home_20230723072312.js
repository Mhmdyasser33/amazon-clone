import React from 'react'
import HomeImg from '../../images/home.jpg'
import Product from '../Product/Product'
import './Home.css'
import shortid from 'shortid'
const Home = ({id , title ,rating , price , image}) => {
  return (
    <div className='home'>
        <div className='home-container'>
            <img src={HomeImg} alt='home-img' width="100%"/>
          <div className='home-row'>
              <Product
              id = {shortid.generate()}
              title = {title}
              price = {price}
              img =  {image}
              />
              <Product
               id = {shortid.generate()}
              title = {title}
              price = {price}
              img =  {image}/>
          </div>
          <div className='home-row'>
              <Product
               id = {shortid.generate()}
              title = {title}
              price = {price}
              img =  {image}/>
              <Product
               id = {shortid.generate()}
              title = {title}
              price = {price}
              img =  {image}/>
              <Product
               id = {shortid.generate()}
              title = {title}
              price = {price}
              img =  {image}/>
          </div>
          <div className='home-row'>
              <Product
              id = {shortid.generate()}
              title = {title}
              price = {price}
              img =  {img}/>
              <Product
               id = {shortid.generate()}
              title = {title}
              price = {price}
              img =  {img}/>
              <Product
               id = {shortid.generate()}
              title = {title}
              price = {price}
              img =  {img}/>/>
                id = {shortid.generate()}
              title = {title}
              price = {price}
              img =  {img}/>
              <Product
               id = {shortid.generate()}
              title = {title}
              price = {price}
              img =  {img}/>
              <Product
               id = {shortid.generate()}
              title = {title}
              price = {price}
              img =  {img}/><Product
                id = {shortid.generate()}
              title = {title}
              price = {price}
              img =  {img}/>
              <Product
               id = {shortid.generate()}
              title = {title}
              price = {price}
              img =  {img}/>
              <Product
               id = {shortid.generate()}
              title = {title}
              price = {price}
              img =  {image}/>
                id = {shortid.generate()}
              title = {title}
              price = {price}
              img =  {image}
              <Product
               id = {shortid.generate()}
              title = {title}
              price = {price}
              img =  {image}/>
              <Product
               id = {shortid.generate()}
              title = {title}
              price = {price}
              img =  {image}/><Product
                id = {shortid.generate()}
              title = {title}
              price = {price}
              img =  {image}/>
              <Product
               id = {shortid.generate()}
              title = {title}
              price = {price}
              img =  {image}/>
              <Product
               id = {shortid.generate()}
              title = {title}
              price = {price}
              img =  {image}/>
          </div>
          <div className='home-row'>
              <Product/>
          </div>
        </div>
    </div>
  )
}

export default Home