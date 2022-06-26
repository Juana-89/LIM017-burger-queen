import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../data/menu.json';

export function Launch() {
  return (
    <div className='container-launch'>
    <div id="div_btn_logout1">
    <button id="btn_logout1" className='btn btn-danger'><i className="icon-off1"></i>Cerrar sesión</button>
    </div>

     <div id="div_name_customer1" className='d-grid gap-3'>
     <h4 className='h4_customer1'>Cliente:</h4>
      <input type='text' id="input_customer1" className='form-control input_name_customer' required placeholder='Ingresa nombre'></input>
      <h4 className='h4_customer1'>Mesa:</h4>
      <input type='number' id="input_table1" className='form-control input_name_customer' required placeholder='Ingresa # mesa'></input>
      </div>

      <div className="show_menues1">
      {Menu && Menu.filter((category =>  category.categoria === "dishes" || category.categoria === "drinks")).map(product => {
          return (
            <div className="container_products1" key={product.id}>
            <button className='btn_launch'><img className="img_product1" src ={ product.img} /><br />{ product.nombre } <br /> { product.precio } <br /></button>
            
            <div className="div_add_subs1">
            <button className='btn_add1'><i className="icon-plus-sign"></i></button>
            <span className="span_quantity1">00</span>
            <button className='btn_subs1'><i className="icon-minus"></i></button>
            </div>
            </div>
          )
        })

      }

    </div>

  <div className='div_select_item_by_customer1'>
    <table id="table_select_item1" class="table table-striped">
        <thead>
        <tr>
        <th className="th_item1">Item</th>
        <th className="th_quantity1">Cantidad</th>
        <th className="th_price1">Precio</th>
        <th className="num"></th>
        </tr>
        </thead>
        <tbody></tbody>
    </table>
    </div>
    
    <div className='div_table_foot1'>
    <div className='div_title_total1'>
    <h5 className='h5_total1'>Total $</h5>
    <div className='inp_total1'>0.00</div>
    </div>
    </div>
    </div>
  )
}