import React, { useState } from 'react';
import Header from "./Header/Header";
import Inputs  from './Inputs/Inputs';
import PlatesSelect from './Plates/PlatesSelect';
import menu from '../../data/menu.json';
import './WaiterMainView.css';

export const WaiterMainView = () => {

  const [newCustomer, setNewCustomer] = useState(''); 
  const [newTable, setNewTable] = useState(''); 
  const [cartItems, setCartItems] = useState([]);

      // Botón agregar
      const addItem = (item) => {
        const exist = cartItems.find((i) => i.id === item.id)
        if(exist) {
        setCartItems(cartItems.map((i) => i.id === item.id ? {...exist, quantity: exist.quantity + 1} : i))
        } else {
        setCartItems([...cartItems, {...item, quantity: 1}])
        }
      };

      // Botón restar
        const removeItem = (item) => {
        const exist = cartItems.find((i) => i.id === item.id)
        if(exist.quantity === 1) {
        setCartItems(cartItems.filter((i) => i.id !== item.id))
        } else {
        setCartItems(cartItems.map((i) => i.id === item.id ? {...exist, quantity: exist.quantity - 1} : i)
        )
        }
      };

      // Botón eliminar productos de una fila
      const removeItemsSelected = (item) => {
        const exist = cartItems.find((i) => i.id === item.id)
        if(exist.quantity) {setCartItems(cartItems.filter((i) => i.id !== item.id))} 
      };

      // Funcionalidad para el input nombre del cliente
      const handleChangeName = (value) => {
        setNewCustomer(value)
      };

      // Funcionalidad para el input número de la mesa
      const handleChangeTable = (value) => {
        setNewTable(value)
      };

  return (
       <>
       <Header />
       <Inputs handleChangeName={handleChangeName} newName={newCustomer} handleChangeTable={handleChangeTable} newTable={newTable}/>
       <div className="container-plates"> 
       {menu.lunch.map((item) => {
        return (
        <div className="show_menues">
        <div className="container_products">
        <button className="btn_plates" key={item.id} onClick={() => addItem(item)}>
        <img className="img_product" src ={ item.img} /><br/>{ item.name }<br/> S/ { item.price }
        </button> 
        </div>
        </div>
          )
       })}
       </div>
        
        {/* <Link to="/" className='back'>Return</Link>
        <Link to="/orders" className="ordersBtn">
          Orders
        </Link> */}
        
        <div className="div_plates_selected">
            <PlatesSelect
            addItem={addItem}
            removeItem={removeItem}
            cartItems={cartItems} 
            newCustomer={newCustomer}
            newTable={newTable}
            removeItemsSelected={removeItemsSelected}
            />
        </div>
    </>
  )
};