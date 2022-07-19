import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import { collection, updateDoc, doc, orderBy, onSnapshot, query } from 'firebase/firestore';
import Header from '../Header/Header'
import styles from './Kitchen.module.css';

export default function Kitchen() {

  const [orders, setOrders] = useState([]);

  const updateOrder = async (id, status) => {
    const orderDoc = doc(db, 'orders', id);
    const newFields = { status: 'Listo' };
    await updateDoc(orderDoc, newFields);
    console.log(newFields);
  };

  useEffect(() => {
    const ordersCollectionRef = collection(db, 'orders');
    const q = query(ordersCollectionRef, orderBy('created', 'desc'));

    const getOrders = onSnapshot(q, (snapshot) =>
      setOrders(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    ); 
    return getOrders;
  }, []) 

  console.log(orders);
  return (
    <section className={styles.sectionContainerKitchen}>
        {/* <h1 className="menuKitchen">Kitchen</h1> */}
      <Header />
      <div id={styles.divContainerOrder} className='card-body'>
      {orders.length !== 0 && orders.map((order) => {
      return (
      <div id={styles.divOrderKitchen} className='card-body'>
      <p><b>Cliente: {order.Customer}</b></p>
      {order.Order.map((element) => {
         return (
          <ul>{' '}
          <li >{element.quantity} {element.name}</li>
          </ul>);
          })}
          <div className={styles.divState}><p className={styles.pElement}><b>Estado: {order.status}</b></p></div>
          <div className={styles.divButtons}>
          <button type='button' id={styles.btnReadyOrder} className='btn btn-warning' onClick={() => {updateOrder(order.id, order.status)}}>
          <b>Listo para servir</b>
          </button>
          </div>
      </div>
      )
      })}
      </div>
    </section>
  );
}