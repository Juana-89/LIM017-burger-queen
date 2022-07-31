import React from 'react';
import styles from './TableHeader.module.css';

function TableHeader () {
    return(
    <thead data-testid='thHeader'>
    <tr id={styles.trHeaderTable}>
    <th className={styles.thItem}>Item</th>
    <th className="quantity">Cantidad</th>
    <th className="price">Precio</th>
    <th className="num"></th>
    </tr>
    </thead>
    )
};
export default TableHeader;