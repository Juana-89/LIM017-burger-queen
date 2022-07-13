import React from 'react';
import '../../stylesheets/WaiterView/Plates.css';
import '../../stylesheets/WaiterView/ButtonsAddLess.css';

const Plates = ({data, addToOrder}) => {
  console.log('hi');
    let { id,name,img, price } = data;
    return (
        <div className="show_menues">
        <div className="container_products">
        <button className='btn_plates'><img className="img_product" src ={ img} /><br/>{ name }<br/> $ { price }</button>
        <button className='btn_add' onClick={() => addToOrder(id)}><i id= 'ico-plus' className="icon-plus-sign"></i></button>
        </div>
        </div>
    )
};

export default Plates;