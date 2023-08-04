import React from 'react';
import moment from 'moment';
import './Order.css';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import CurrencyFormat from 'react-currency-format';

const Order = ({ order }) => {
  return (
    <div className='order'>
      <h1 className='order-title'>Order</h1>

      {/* Display the order creation time */}
      <p className='time-format'>
        {moment.unix(order.data.created).format('MMM Do YYYY, h:mma')}
      </p>

      {/* Map through each item in the order's basket and display it */}
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          key={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
          rating={item.rating}
          hiddenBtn
        />
      ))}

      {/* Display the order total using CurrencyFormat */}
      <CurrencyFormat
        renderText={(value) => <h3>Order Total: {value}</h3>}
        decimalScale={2}
        value={order.data.amount * 100}
        prefix={'$'}
        displayType='text'
        thousandSeparator={true}
      />
    </div>
  );
};

export default Order;