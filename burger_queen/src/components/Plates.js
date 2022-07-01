import React, { useState, Fragment } from 'react';
import { ButtonsAddLess } from './ButtonsAddLess';
import { ButtonLogOut } from './ButtonLogOut';
import { Inputs } from './Inputs';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/stylesheets/Plates.css';
import Menu from '../data/menu.json';


export function Plates() {
  return (
    <div className='container-plates'>  
    <ButtonLogOut />
    <Inputs />
   
    <div className="show_menues">
      {Menu.map(product => {
          return (
            <div className="container_products" key={product.id}>
            <button className='btn_plates'><img className="img_product" src ={ product.img} /><br/>{ product.nombre } <br/> $ { product.precio }  </button>
            <ButtonsAddLess/>
            </div>
          )})}
          </div>
    <div className='div_select_item_by_customer'>
    <table id="table_select_item" className="table table-striped">
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

    <div className="btns_deleted_and_send_order">
    <button id="btn_trash" className='btn'><i className="icon-trash"></i> Eliminar</button>
    <button id="btn_send" className='btn'><i className="icon-ok-sign"></i> Enviar</button>
    </div>
    
    </div>

  )
}