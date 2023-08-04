import React from 'react';
import './Checkout.css';
import checkoutAds from '../../images/checkoutAd.jpg';
import { useAuth } from '../../context/GlobalContext';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import SubTotal from '../SubTotal/SubTotal';

const Checkout = ({ id, title, price, rating, image }) => {
    // Using the useAuth hook to get user and basket from the global context
    const { user, basket } = useAuth();

    return (
        <div className='checkout'>
            <div className='checkout-leftSide'>
                {/* Displaying an advertisement */}
                <img className='checkout-ads' src={checkoutAds} alt='checkout-ads' />
                <div className='checkout-details'>
                    {/* Displaying user's email */}
                    <h3 className='userEmail'>Hello, {user ? user.email : "Guest"}</h3>
                    {/* Title for the shopping basket */}
                    <h2 className='checkout-title'>Your shopping Basket</h2>
                    {basket.length > 0 ? (
                        // Mapping through items in the basket and rendering CheckoutProduct component
                        basket.map((item) => (
                            <CheckoutProduct
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                            />
                        ))
                    ) : (
                        // Displaying a message when the basket is empty
                        <div className='no-product-container' style={{ display: "flex", justifyContent: "center", margin: ".5rem 0 0 18rem" }}>
                            <h2 className='no-content-basket'> Your Basket is Empty </h2>
                        </div>
                    )}
                </div>
            </div>
            <div className='checkout-rightSide'>
                {/* Rendering the SubTotal component */}
                <SubTotal />
            </div>
        </div>
    );
}

export default Checkout;
