import React from 'react';
import { TableFooter } from './TableFooter';
import { Inputs } from './Inputs';
import { TableRowSelect } from './TableRowSelect';
import '../../stylesheets/WaiterView/TableMain.css';

export function TableMain({ props }) {
    return(
<div className='div_select_item_by_customer'>
<Inputs/>
<table id="table_select_item" className="table table-striped">
    <thead>
    <tr>
    <th className="th_item">Item</th>
    <th className="th_quantity">Cantidad</th>
    <th className="th_price">Precio</th>
    <th className="num"></th>
    </tr>
    </thead>
    <tbody>
        {props.productSelect.map((order, index) => (
            <TableRowSelect
             key={index}
                            index={index}
                            producto={order.name}
                            cantidad={order.cantidad}
                            precio={order.total}
                            onTap={props.onTap}
                            renderInput={props.renderInput}
                            setCommentOnProduct={props.setCommentOnProduct}
                            deleteProduct={() => props.deleteProduct(index)}
             />
        ))}
    </tbody>
</table>
<TableFooter
addition={props.addition}
/>
</div>
    )
}