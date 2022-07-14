import SidebarLunch from './PriceLunch'
import Header from "./Header";
import Inputs  from './Inputs';
import { Link } from 'react-router-dom'
import menu from '../../data/menu.json';
import { useState } from 'react'
import '../../stylesheets/WaiterView/Plates.css';

export const Plates = () => {

  const [newName, setNewName] = useState(""); 
  const [numTable, setNumTable] = useState("");
  const [cartItems, setCartItems] = useState([]);
    const addItem = (item) => {
        const exist = cartItems.find((x) => x.id === item.id)
        if(exist) {
          setCartItems(cartItems.map((x) => x.id === item.id ? {...exist, qty: exist.qty + 1} : x)         );
        } else {
          setCartItems([...cartItems, {...item, qty: 1}])
        }
      };
      const removeItem = (item) => {
         const exist = cartItems.find((x) => x.id === item.id);
         if(exist.qty === 1) {
           setCartItems(cartItems.filter((x) => x.id !== item.id));
         } else {
          setCartItems(cartItems.map((x) => 
          x.id === item.id ? {...exist, qty: exist.qty - 1} : x
            )
          );
         }
      }

      const handleChangeName =(value)=>{
        setNewName(value);
      }
      
      const handleChangeTable =(value)=>{
        setNumTable(value);
      }
        
      
  return (
    <>
       <Header />
       <Inputs handleChangeName={handleChangeName} newName={newName}
       handleChangeTable={handleChangeTable} numTable={numTable}/>
       <div className='container-plates'> 
       
       {menu.lunch.map((item) => {
        return (
          <div className="show_menues">
          <div className="container_products">
          <button className='btn_plates' key={item.id} onClick={() => addItem(item)}>
          <img className="img_product" src ={ item.img} /><br/>{ item.name }<br/> $ { item.price }
          </button> 
          </div>
          </div>
          )
        })}
        
       
        </div>
        
        <div className='sideBar'>
            <SidebarLunch
            addItem={addItem}
            removeItem={removeItem}
            cartItems={cartItems} 
            newName={newName}
            numTable={numTable}/>
        </div>
  
    
    </>
  )
}