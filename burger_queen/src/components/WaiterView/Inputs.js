import React from 'react';
import '../../stylesheets/WaiterView/Inputs.css';

function Inputs(props)  {
  const { handleChangeName, newName } = props;
    return (
        <div id="div_name_customer" className='d-grid gap-3'>
        <h4 className='h4_customer'>Cliente:</h4>
        <input type='text' id="input_customer" onChange={(e)=>{handleChangeName(e.target.value)}} value={newName} className='form-control input_name_customer' required placeholder='Ingresa nombre'></input>
        <h4 className='h4_customer'>Mesa:</h4>
        <input type='number' id="input_table" className='form-control input_name_customer' required placeholder='0'></input>
        </div>
      )
}
export default Inputs;