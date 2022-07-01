import React, { useState } from 'react';
import '../../src/stylesheets/ButtonLogOut.css';

export function ButtonLogOut()  {
    return (
    <div id="div_btn_logout">
    <button id="btn_logout" className='btn btn-danger'><i className="icon-off"></i>Cerrar sesión</button>
    </div>
    )
}