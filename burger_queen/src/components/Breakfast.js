import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../data/menu.json';

export function Breakfast() {
  return (
    <div className='container-breakfast'>
    <div id="div_btn_logout">
     <button id="btn_logout" className='btn btn-danger'><i className="icon-off"></i>Cerrar sesión</button>
     </div>
     
      <div id="div_name_customer" className='d-grid gap-3'>
      {/* <h1 className='h1_title'>DESAYUNO</h1> */}
      <h4 className='h4_customer'>Cliente:</h4>
      <input type='text' id="input_customer" className='form-control input_name_customer' required placeholder='Ingresa nombre'></input>
      <h4 className='h4_customer'>Mesa:</h4>
      <input type='number' id="input_table" className='form-control input_name_customer' required placeholder='Ingresa # mesa'></input>
      </div>

      <div className="show_menues">
      {
        Menu && Menu.filter((category =>  category.categoria === "breakfast")).map(product => {
          return (
            <div className="container_products" key={product.id}>
            <button className='btn_breakfast'><img className="img_product" src ={ product.img} /><br/>{ product.nombre } <br/> $ { product.precio }  </button>
            
            <div className="div_add_subs">
            <button className='btn_add'><i className="icon-plus-sign"></i></button>
            <span className="span_quantity">00</span>
            <button className='btn_subs'><i className="icon-minus"></i></button>
            </div>
            </div>
          )
        })

      }

    </div>
   

    <div className='div_select_item_by_customer'>
    <table id="table_select_item" class="table table-striped">
        <thead>
        <tr>
        <th className="th_item">Item</th>
        <th className="th_quantity">Cantidad</th>
        <th className="th_price">Precio</th>
        <th className="num"></th>
        </tr>
        </thead>
        <tbody></tbody>
    </table>
    </div>
    
    <div className='div_table_foot'>
    <div className='div_title_total'>
    <h5 className='h5_total'>Total $</h5>
    <div className='inp_total'>0.00</div>
    </div>
    </div>
    </div>
  )
}