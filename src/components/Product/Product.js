import React from 'react';
import StarIcon from '../../images/icons/star.png';
import { useAuth } from '../../context/GlobalContext';
import * as actions from '../../context/Action';

import './Product.css';

const Product = ({ id, title, rating, price, image }) => {
  const { dispatch } = useAuth();

  const handleAddToCart = () => {
    // Dispatch an action to add the product to the cart
    dispatch({
      type: actions.ADD_TO_CARD,
      item: {
        id: id,
        title: title,
        rating: rating,
        image: image,
        price: price,
      },
    });
  };

  return (
    <div className='product'>
      <div className='product-info'>
        <p className='product-title'>{title}</p>
        <p className='product-price'>
          <small className='dollar-sign'>$</small>
          <strong className='price-value'>{price}</strong>
        </p>
      </div>
      <div className='product-rating'>
        {/* Render the star icons based on the rating */}
        {Array(rating)
          .fill()
          .map((_, index) => (
            <p key={index}>
              <img src={StarIcon} alt='star-icon' />
            </p>
          ))}
      </div>
      <img src={image} alt='product-img' />
      <button className='add-btn' onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;