import React from 'react';
import '../../stylesheets/WaiterView/ButtonsAddLess.css';

const TableRowSelect = ({data,delFromOrder}) => {
    let {id,name,price, quantity} = data;
    const subtotal = price*quantity;
    return (
    <tbody>
    <tr>
    <th>{name}</th>
    <th>{quantity}</th>
    <th>${subtotal}</th>
    <th><button className='btn_subs' onClick={() => delFromOrder(id)}><i className="icon-minus"></i></button>
    <button className='btn_all_elements' onClick={() => delFromOrder(id, true)}><i className="icon-trash"></i></button>
    </th>
    </tr>
    </tbody>
    )
}
export default TableRowSelect;