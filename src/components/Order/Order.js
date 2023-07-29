// Order.js
import React from 'react';
import moment from 'moment';
import './Order.css';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import CurrencyFormat from 'react-currency-format';

const Order = ({ order }) => {
  return (
    <div className='order'>
      <h1 className='order-title'>Order</h1>
      <p className='time-format'>
        {moment.unix(order.data.created).format('MMM DO YYY h:mma')}
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id = {item.id}
          key={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
          rating={item.rating}
        />
      ))}
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
