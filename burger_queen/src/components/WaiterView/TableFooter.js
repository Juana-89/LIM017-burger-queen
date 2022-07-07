import React from 'react';
import '../../stylesheets/WaiterView/TableFooter.css';
 
function TableFooter() {
    return (
    <div className='div_table_foot'>
    <div className='div_title_total'>
    <h5 className='h5_total'>Total $</h5>
    <div className='inp_total'>0.00</div>
    </div>
    </div>
    )
};

export default TableFooter;