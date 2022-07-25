import React from "react";
import {Link} from "react-router-dom";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../../firebase/config.js";
import TableHeader  from './TableHeader';
import Swal from "sweetalert2";
import styles from './PlatesSelect.module.css';

const PlatesSelect = (props) => {
  const { cartItems, addItem, removeItem, newCustomer, newTable, removeItemsSelected } = props;
  const userCollectionRef = collection(db, "orders");

  const totalPrice = cartItems.reduce((acc, cb) => acc + cb.price * cb.quantity, 0);

  // Botón 'Enviar' para derivar pedido a cocina
  const createOrder = async () => {
    console.log("creado");
    try {
    await addDoc(userCollectionRef, {
      Customer: newCustomer,
      Table: newTable,
      Order: cartItems,
      status: 'Pendiente',
      created: Timestamp.fromDate(new Date()),
    });
    console.log();
    Swal.fire({
      position: 'bottom-end',
      title: '<b>Orden enviada</b>',
      icon: 'success',
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton:false,
      allowOutsideClick: false,
      toast: true,
    })
  }
catch (error) { throw new Error (error)}
} ;

  return (
    <>
      <div className={styles.divSelectItemByCustomer}>
      <table id={styles.tableSelectItem} className="table table-striped">
      <TableHeader />
      <tbody>
        {cartItems.map((item) => (

        <tr key={item.id}>
        <th>{item.name}</th>
        <th>
        <div className={styles.divAddSubs}>
        <button className={styles.btnAdd} onClick={() => addItem(item)}><i className="icon-plus-sign"></i></button>
        <span className={styles.spanQuantity}>{item.quantity}</span>
        <button className={styles.btnSubs} onClick={() => removeItem(item)}><i className="icon-minus"></i></button>
        </div>
        </th>
        <th>{item.quantity * item.price}.00</th>
        <th><button className={styles.btnRemoveElements} onClick={() => removeItemsSelected(item)}><i className="icon-trash"></i></button></th>
        </tr>
        ))}
      </tbody>
      </table>
      </div>

      <div className={styles.divTableFoot}>
      <div className={styles.divTitleTotal}></div>
      <h5 className={styles.total}>Total S/</h5>
      <div className={styles.inpTotal}>{totalPrice.toFixed(2)}</div>
      </div>
      
      <div className={styles.btnsOrders}>
              {/* <Link to="/" className='back'>Return</Link>
        <Link to="/orders" className="ordersBtn">
          Orders
        </Link> */}
      <Link to='/orders'><button id={styles.btnEye} className="btn"><i className="icon-eye-open"></i> Ver estado de pedidos</button></Link> 
      <button id={styles.btnSend} className="btn" onClick={createOrder}><i className="icon-ok-sign"></i> Enviar pedido a cocina</button>
      </div>
     
      </>
  );
};

export default PlatesSelect;