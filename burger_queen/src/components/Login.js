import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Login() {
  return (
    <div className='container-login'>
    <form>
    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Correo electrónico</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo electrónico"/>
    </div>

    <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña" />
    </div>

    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
    )}
