import React from 'react';
import './CheckoutProduct.css';
import StarIcon from '../../images/icons/star.png';
import { useAuth } from '../../context/GlobalContext';
import * as actions from '../../context/Action';

const CheckoutProduct = ({ id, title, price, image, rating, hiddenBtn }) => {
    // Using the useAuth hook to get the dispatch function from the global context
    const { dispatch } = useAuth();

    const handleRemoveProduct = () => {
        // Dispatching an action to remove the product from the basket
        dispatch({
            type: actions.REMOVE_FROM_CARD, // Assuming it's a typo and should be "REMOVE_FROM_CART"
            id: id,
        });
    };

    return (
        <div className='checkout-product'>
            {image ? (
                <img className='checkoutProduct-image' src={image} alt='checkoutProductImage' />
            ) : (
                <div className='no-image-founded'>
                    <p> No Image Available </p>
                </div>
            )}
            <div className='checkoutProduct-info'>
                <p className='checkoutProduct-title'>{title}</p>
                <div className='checkoutProduct-price'>
                    <small className='dollar-sign'>$</small>
                    <strong className='price-value'>{price}</strong>
                </div>
                <div className='checkoutProduct-rating'>
                    {/* Displaying star icons based on the rating */}
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i}>
                                <img className='star-icon' src={StarIcon} alt='star-icon' />
                            </p>
                        ))}
                </div>
                {/* Conditionally rendering the remove button */}
                {!hiddenBtn && (
                    <button className='remove-btn' onClick={handleRemoveProduct}>
                        Remove from Basket
                    </button>
                )}
            </div>
        </div>
    );
};

export default CheckoutProduct;
