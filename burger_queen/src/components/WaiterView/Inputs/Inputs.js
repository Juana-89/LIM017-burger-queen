import React from 'react';
import './Inputs.css';

function Inputs(props)  {
  const { handleChangeName, newName, handleChangeTable, newTable } = props;
  
    return (
        <div id="div_name_customer" className='d-grid gap-3'>
        <h4 className='h4_customer'>Cliente:</h4>
        <input type='text' id="input_customer" onChange={(e)=>{handleChangeName(e.target.value)}} value={newName} className='form-control input_name_customer' required placeholder='Ingresa nombre'></input>
        <h4 className='h4_customer'>Mesa:</h4>
        <select type='number' id="input_table" onChange={(e)=>{handleChangeTable(e.target.value)}} value={newTable} className='form-control input_name_customer' required placeholder='0'>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
        </select>
        </div>
      )
}
export default Inputs;