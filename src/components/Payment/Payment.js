import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/GlobalContext';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { Link, useNavigate } from 'react-router-dom';
import { calcProductTotal } from '../../context/MainReducer';
import CurrencyFormat from 'react-currency-format';
import './Payment.css';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import * as actions from '../../context/Action';
import axios from '../axios';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const Payment = () => {
  const { user, dispatch, basket } = useAuth();
  const navigate = useNavigate();
  const [clientSecret, setClientSecret] = useState();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // Fetch client secret from the server to handle payment
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${calcProductTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    // Confirm card payment with Stripe
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (payload.paymentIntent) {
      // If payment is successful, update user's order history
      const ref = doc(db, 'users', user?.uid, 'orders', payload.paymentIntent.id);
      await setDoc(ref, {
        basket: basket,
        amount: payload.paymentIntent.amount,
        created: payload.paymentIntent.created,
      });

      setSucceeded(true);
      setError(null);
      setProcessing(false);
      dispatch({
        type: actions.EMPTY_CARD,
      });
      navigate('/orders', { replace: true });
    }
  };

  const handleChange = (e) => {
    // Update UI based on CardElement input changes
    setDisabled(e.empty);
    setError(e.error ? e.error.message : null);
  };

  return (
    <div className='payment'>
      <div className='payment-container'>
        <h1>
          Checkout (<Link to='/checkout'>{basket.length} items</Link>)
        </h1>

        {/* Section for delivery address */}
        <div className='payment-section'>
          <div className='payment-title'>
            <h3 className='delivery-address'>Delivery Address</h3>
          </div>
          <div className='user-details'>
            <p className='user-email'>{user ? user.email : 'Guest'}</p>
            <p className='payment-address'>Qena, Farshut, Egypt</p>
          </div>
        </div>

        {/* Section to review items and delivery */}
        <div className='payment-section'>
          <div className='payment-title'>
            <h3>Review items and delivery</h3>
          </div>
          <div className='payment-items'>
            {basket.length === 0 ? (
              <div style={{ textAlign: 'center' }}>
                <strong style={{ fontSize: '20px', fontWeight: 'bold' }}>
                  No items found for delivery
                </strong>
              </div>
            ) : (
              basket.map((item) => (
                <CheckoutProduct
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))
            )}
          </div>
        </div>

        {/* Section for payment method */}
        <div className='payment-section'>
          <h3>Payment Method</h3>
          <div className='payment-details'>
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className='payment-price-container'>
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={calcProductTotal(basket)}
                  prefix={'$'}
                  displayType='text'
                  thousandSeparator={true}
                />
                <button type='submit' disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing...</p> : 'Buy Now'}</span>
                </button>
              </div>
              {error && <p>{error}</p>}
           </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;