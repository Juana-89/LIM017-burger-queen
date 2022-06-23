import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function useBreakfast() {
// Tiene que empezar con la palabra use
	const [breakfast, setBreakfast] = useState([])

	useEffect(() => {
		fetch("../../public/data/menu.json")
		.then(response => response.json())
		.then(data => {
			setBreakfast(data)
		})
	}, [])

	return breakfast
}


export function Breakfast() {
  const breakfast = useBreakfast()
  return(

<div className='container-breakfast'>
<div className='d-grid gap-3 div_info_customer'>
<h1 className='h1_title'>DESAYUNO</h1>
<h2 className='h2_customer'>Cliente:</h2>
<input type='text' className='form-control border-success input_name_customer'></input>
<h2 className='h2_customer'>Mesa:</h2>
<input type='number' className='form-control border-success input_name_customer'></input>
</div>

<div className='div_buttons'>
<table className='table-prueba'>
<tbody>
{breakfast.map(item => (
<tr key={item.id}>
  <td>{item.nombre}</td>
  <td>{item.precio}</td>
</tr>
))}
</tbody>
</table>
{/* <button className='btn_cafe btn-primary btn-lg rounded-pill'>CAFÉ AMERICANO S/5.00</button>
<button className='btn_cafe btn-primary btn-lg rounded-pill'>CAFÉ CON LECHE S/7.00</button>
<button className='btn_cafe btn-primary btn-lg rounded-pill'>SANDWICH DE JAMÓN S/10.00</button>
<button className='btn_cafe btn-primary btn-lg rounded-pill'>JUGO DE FRUTAS S/7.00</button> */}


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
