import React from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../../firebase/config.js";
import TableHeader  from './TableHeader';
import Swal from "sweetalert2";
import './PlatesSelect.css';

const PlatesSelect = (props) => {
  const { cartItems, addItem, removeItem, newCustomer, newTable} = props;
  const userCollectionRef = collection(db, "orders");

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
  const totalPrice = itemsPrice;
 
  const createOrder = async () => {
    console.log("creado");
    await addDoc(userCollectionRef, {
      Customer: newCustomer,
      Table: newTable,
      Order: cartItems,
      status: "Pending",
      created: Timestamp.fromDate(new Date()),
    });
    console.log();
    Swal.fire({
      position: 'bottom-end',
      title: 'Orden enviada',
      icon: 'success',
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton:false,
      toast: true,
    })
  };

  return (
    <>
      <div className='div_select_item_by_customer'>
      <table id="table_select_item" className="table table-striped">
      <TableHeader />
      <tbody>

        {cartItems.map((item) => (
          <tr key={item.id}>
          <th>{item.name}</th>
          <th>
        <div className="div_add_subs">
        <button className="btn_add" onClick={() => addItem(item)}><i className="icon-plus-sign"></i></button>
        <span className="span_quantity">{item.quantity}</span>
        <button className='btn_subs' onClick={() => removeItem(item)}><i className="icon-minus"></i></button>
        </div>
        </th>
        <th>$ {item.price}.00</th>
        </tr>
        ))}
        
        </tbody>
        </table>
     
      </div>

          <div className="div_table_foot">
          <div className="div_title_total"></div>
          <h5 className="h5_total">Total $</h5>
          <div className="inp_total"> $ {totalPrice.toFixed(2)}</div>
          </div>
  
      
      <div className="btns_deleted_and_send_order">
      <button id="btn_trash" className="btn"><i className="icon-trash"></i> Eliminar</button>
      <button id="btn_send" className="btn" onClick={createOrder}><i className="icon-ok-sign"></i> Enviar</button>
   
     
    </div>

     
      </>
  );
};

export default PlatesSelect;