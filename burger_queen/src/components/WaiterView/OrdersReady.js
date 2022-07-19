import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase/config.js";
import { collection, updateDoc, doc, orderBy, onSnapshot, query } from "firebase/firestore";
import Header from '../Header/Header';
import styles from './OrdersReady.module.css';

export default function OrdersReady() {
  const [orders, setOrders] = useState([]);
  

  const updateOrder = async (id, status) => {
    const orderDoc = doc(db, 'orders', id);
    const newFields = { status: 'Entregado' };
    await updateDoc(orderDoc, newFields);
    console.log(newFields);
  };

  useEffect(() => {
    const ordersCollectionRef = collection(db, 'orders');
    const q = query(ordersCollectionRef, orderBy('created', 'desc'));
  
  const getOrders = onSnapshot(q,(snapshot) =>
  setOrders(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  );
  return getOrders
  }, []);

  console.log(orders);
  return (
      <section className={styles.sectionContainerOrders}>
      <Header />
      <div id={styles.divContainerOrder} className="card-body">
      {orders.length !== 0 &&
       orders.map((order) => {
       return (
       <div id={styles.divOrderWaiter} className="card-body">
       <p><b>Cliente: {order.Customer}</b></p>
       {order.Order.map((element) => {
        return (
        <ul>{' '}
        <li>{element.quantity} {element.name}</li>
        </ul>
        )})}
        <p><b>Estado: {order.status}</b></p>
        <div className={styles.divButtons}>
        <button type='button'  className='btn btn-warning' onClick={() => {updateOrder(order.id, order.status)}}>
        <b>Entregado</b></button>
        </div>
        </div>
        );
        })}
      </div>
      <div className="back ready">    
      <Link to="/" className="returnbtn">
        Return
      </Link>
      </div>
      </section> 
  );
}