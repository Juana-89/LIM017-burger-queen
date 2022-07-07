import React from 'react';
import '../../stylesheets/WaiterView/Inputs.css';

function InfoInputsCustomer({customer, setCustomer, table, setTable})  {
    return (
        <div id="div_name_customer" className='d-grid gap-3'>
        <h4 className='h4_customer'>Cliente:</h4>
        <input type='text' id="input_customer" className='form-control input_name_customer' value={customer} onChange= {(event) => { setCustomer(event.target.value)}} required placeholder='Ingresa nombre'></input>
        <h4 className='h4_customer'>Mesa:</h4>
        <input type='number' id="input_table" className='form-control input_name_customer' value={table} onChange= {(event) => { setTable(event.target.value)}} required placeholder='0'></input>
        </div>
      )
}
export default InfoInputsCustomer;