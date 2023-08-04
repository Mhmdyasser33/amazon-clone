import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/GlobalContext';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { Link, useNavigate } from 'react-router-dom';
import { calcProductTotal } from '../../context/MainReducer';
import CurrencyFormat from 'react-currency-format';
import {doc , setDoc} from 'firebase/firestore'
import {db}from '../../firebase'
import './Payment.css';
import { CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import * as actions from '../../context/Action'
import axios from '../axios'
const Payment = () => {
  const {user,dispatch ,basket} = useAuth();
  const navigate = useNavigate();
  const [clientSecret, setClientSecret] = useState();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const stripe = useStripe() ;
  const elements = useElements();
  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${calcProductTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
      return response;
    };
    getClientSecret();
  }, [basket]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        const ref = doc(db, "users", user?.uid, "orders", paymentIntent.id);
        setDoc(ref, {
          basket : basket ,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch({
          type: actions.EMPTY_CARD,
        });
        navigate("/orders", { replace: true });
      });
  };
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(error ? error.message : "");
  };
  return (
    <div className='payment'>
      <div className='payment-container'>
        <h1>
          Checkout (<Link to="/checkout">{basket.length} items</Link>)
        </h1>
        {/* payment delivery code */}
        <div className='payment-section'>
          <div className='payment-title'>
            <h3 className='delivery-address'>Delivery Address </h3>
          </div>
          <div className='user-details'>
            <p className='user-email'>{user ? user.email : 'Guest'}</p>
            <p className='payment-address'>Qena,Farshut, Egypt</p>
          </div>
        </div>
        {/* Review items and delivery code  */}
        <div className='payment-section'>
          <div className='payment-title'>
            <h3>Review items and delivery</h3>
          </div>
          <div className='payment-items'>
            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/* payment method */}
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
                  <span>{processing ? <p>Processing... </p> : "Buy Now"}</span>
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


export default Payment
