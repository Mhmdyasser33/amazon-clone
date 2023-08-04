import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuth } from '../../context/GlobalContext';
import { db } from '../../firebase';
import Order from '../../components/Order/Order';
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      // Create a reference to the user's orders collection
      const collRef = collection(db, "users", user?.uid, "orders");

      // Create a query to order the orders collection by "created" field in descending order
      const orderedRef = query(collRef, orderBy("created", "desc"));

      // Subscribe to the orderedRef query and listen for snapshot changes
      // Update the orders state with the retrieved order data
      const unsubscribe = onSnapshot(orderedRef, (querySnapshot) => {
        setOrders(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });

      // Clean up the listener when the component unmounts or user changes
      return () => unsubscribe();
    } else {
      // If there is no user, reset the orders state
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders-order">
        {orders?.map((order) => (
          <Order order={order} key={order.id} />
        ))}
      </div>
    </div>
  );
};

export default Orders;