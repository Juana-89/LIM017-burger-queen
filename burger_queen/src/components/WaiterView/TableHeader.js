import React from 'react';
import '../../stylesheets/WaiterView/WaiterMainView.css';

function TableHeader () {
    return(
    <thead>
    <tr id="tr_header_table">
    <th className="th_item">Item</th>
    <th className="th_quantity">Cantidad</th>
    <th className="th_price">Precio</th>
    <th className="num"></th>
    </tr>
    </thead>
    )
};
export default TableHeader;