import React from 'react';
import styles from './Inputs.module.css';

function Inputs(props)  {
  const { handleChangeName, newName, handleChangeTable, newTable } = props;
  
    return (
        <div id={styles.divNameCustomer} className='d-grid gap-3'>
        <h4 className={styles.titleCustomer}>Cliente:</h4>
        <input type='text' id={styles.inputCustomer} onChange={(e)=>{handleChangeName(e.target.value)}} value={newName} className='form-control' required placeholder='Ingresa nombre'></input>
        <h4 className={styles.titleCustomer}>Mesa:</h4>
        <select type='number' id={styles.inputTable} onChange={(e)=>{handleChangeTable(e.target.value)}} value={newTable} className='form-control' required placeholder='0'>
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