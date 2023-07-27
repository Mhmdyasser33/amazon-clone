          import React, { useEffect, useState } from 'react'
          import { useAuth } from '../../context/GlobalContext'
          import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
          import { Link, useNavigate } from 'react-router-dom';
          import { calcProductTotal } from '../../context/MainReducer';
          import CurrencyFormat from 'react-currency-format';
          import './Payment.css'
          import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
          import axios from '../axios'
          const Payment = () => {
               const [sessionID, setSessionID] = useState();
               const [error, setError] = useState(null);
               const [success, setSuccess] = useState(false);
               const [disabled, setDisabled] = useState(true);
               const [processing, setProcessing] = useState(false);
               const stripe = useStripe();
               const elements = useElements();
               const { card, user } = useAuth();
               const navigate = useNavigate();

               useEffect(() => {
                 const getClientSecret = async () => {
                   const response = await axios({
                     method: "post",
                     url: `/payments/create?total=${calcProductTotal(card) * 100}`,
                   });
                   // store session get from server(back-end)
                   setSessionID(response.data.clientSecret);
                   return response;
                 };
                 getClientSecret();
               }, [card]);
          const handleSubmit = async (e) =>{
               e.preventDefault() ;
               setProcessing(true) ;
               const payload = await stripe.confirmCardPayment(sessionID , {
                    payment_method : {
                    card : elements.getElement(CardElement)
               }
               }).then((response) =>{
               setSuccess(true) ;
               setError(null)
               setProcessing(false)
               navigate("/orders" , {replace : true}) ;

               })
          }
          const handleChange = (e) =>{
          setDisabled(e.empty()) ; // make disabled empty
          setError(error ? error.message : "") ;
          }
          return (
          <div className='payment'>
               <div className='payment-container'>
                    <h1>
                    Checkout (<Link to="/checkout">{card.length} items</Link> )
                    </h1>
                    {/* payment delivery code */}
                    <div className='payment-section'>
                    <div className='payment-title'>
                         <h3 className='delivery-address'>Delivery Address </h3>
                    </div>
                    <div className='user-details'>
                    <p className='user-email'> {user ? user.email : "Guest"} </p>
                    <p className='payment-address'> Qena , Egypt</p>
                    </div>
                    </div>
                    {/* Review items and delivery code  */}
                    <div className='payment-section'>
                    <div className='payment-title'>
                         <h3>Review items and delivery  </h3>
                    </div>
                    <div className='payment-items'>
                         {card.map((item) =>(
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
                         <h3>Payment Method </h3>
                         <div className='payment-details'>
                         <form onSubmit={handleSubmit}>
                    <CardElement onChange={handleChange}/>
                    <div className='payment-price-container'>
          <CurrencyFormat renderText={(value) => <h3>Order Total : {value}</h3> }
               decimalScale={2}
               value={calcProductTotal(card)}
               prefix={`$`}
               displayType='text'
               thousandSeparator= {true}
          />
                    <button type='submit' disabled={success || disabled || processing}>
                         <span>Buy Now </span>
                    </button>
                    </div>
                    {error && <p>{error}</p>}
                         </form>
                         </div>
                    </div>
               </div>
          </div>
          )
          }

          export default Payment