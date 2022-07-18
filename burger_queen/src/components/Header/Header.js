import React from 'react';
import styles from './Header.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const logo = require('../../img/font1.png')

function Header()  {
    return (
    <div id={styles.divBtnHeader}>
    <img className= {styles.imgLogo} src={logo}/>
    <h3 className={styles.title}>TOMA DE PEDIDOS</h3>
    <button id={styles.btnLogout} className='btn btn-danger'><i id={styles.icoOff} className='icon-off'></i> Cerrar sesión</button>
    </div>
    )
};
export default Header;