import React from 'react';
import '../../stylesheets/WaiterView/Inputs.css';

function Inputs()  {
    return (
        <div id="div_name_customer" className='d-grid gap-3'>
        <h4 className='h4_customer'>Cliente:</h4>
        <input type='text' id="input_customer" className='form-control input_name_customer' required placeholder='Ingresa nombre'></input>
        <h4 className='h4_customer'>Mesa:</h4>
        <input type='number' id="input_table" className='form-control input_name_customer' required placeholder='0'></input>
        </div>
      )
}
export default Inputs;