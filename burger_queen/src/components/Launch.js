import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../data/menu.json';

export function Launch() {
  return (
    <div className='container-launch'>
      <div className='d-grid gap-3 div_info_customer'>
      <h1 className='h1_title'>ALMUERZO Y CENA</h1>
      <h2 className='h2_customer'>Cliente:</h2>
      <input type='text' className='form-control border-success input_name_customer'></input>
      <h2 className='h2_customer'>Mesa:</h2>
      <input type='number' className='form-control border-success input_name_customer'></input>
      </div>

      <div className="show_menues">
      {
        Menu && Menu.filter((category =>  category.categoria === "dishes" || category.categoria === "drinks")).map(product => {
            {console.log(Menu+ "aaaaaaaaaaaa")}
          return (
            <div className="container_products" key={product.id}>
            <button className='btn_cafe btn-primary btn-l pill'>{ product.categoria } <br /> { product.precio } <br />{ product.nombre } <br /> <img className="img_product" src ={ product.img} /></button>
            </div>
          )
        })

      }

    </div>

    <button className='btn btn-danger btn_logout'>Cerrar sesión</button>

    <div className='div_select_item_by_client'>
    <div className='div_item'>Item</div>
      <div className='div_select_item'>Cafe</div>
    <div className='div_quantity'>Cantidad</div>
      <div className='div_select_quantity'>10.00</div>
    <div className='div_price'>PU</div>
      <div className='div_select_price'>10.00</div>


      <h3 className='h3_subtotal'>Subtotal</h3>
      <input type='number' className='inp_subtotal'></input>
      <h3 className='h3_igv'>IGV</h3>
    <input type='number' className='inp_igv'></input>
    <h3 className='h3_total'>Total</h3>
    <input type='number' className='inp_total'></input>

</div>


    </div>
  )
}