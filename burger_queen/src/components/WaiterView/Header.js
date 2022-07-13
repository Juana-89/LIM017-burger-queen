import React from 'react';
import '../../stylesheets/WaiterView/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const logo = require('../../img/font1.png')

function Header()  {
    return (
    <div id="div_btn_header">
     <img className='img-logo' src={logo}/>
     <h3 className='h3-title'>TOMA DE PEDIDOS</h3>
    <button id="btn_logout" className='btn btn-danger'><i className="icon-off"></i>Cerrar sesión</button>
    </div>
    )
};
export default Header;