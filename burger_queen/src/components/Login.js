import React, { useState } from 'react';
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/stylesheets/Login.css';
console.log(bootstrap);

const image1 = require('../img/burger1.jpg');
const image2 = require('../img/burger2.jpg');
const image3 = require('../img/burger3.jpg');

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // Exportando login
  const {login} = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  console.log(error)

  // Actualizar estado
  const handleChange = ({ target: { name, value } }) =>
  setUser({...user, [name]: value});

  const handleSubmit = async(e) => {
    e.preventDefault();
    //setError('');
    try{
      await login(user.email, user.password);
      navigate('/plates');
    } catch (error) {
      setError(error.message);
    }
 };


 return (
//  <>{error && <p>{error}</p>}

 <div className="container-login">
    <div id="carousel-images">
      <div id="carouselBurger" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselBurger" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselBurger" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselBurger" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="1000"><img src={image1} id="img1" className="d-block" alt="Hamburguesa clásica" /></div>
        <div className="carousel-item" data-bs-interval="2000"><img src={image2} id="img2" className="d-block" alt="Hamburguesa doble" /></div>
        <div className="carousel-item" data-bs-interval="3000"><img src={image3} id="img3" className="d-block" alt="Hamburguesa triple" /></div>
        </div>
        <div className="btns-carousel">
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselBurger" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselBurger" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
        </button>
        </div>
  </div>
</div>
<div id="form_login">
    <img id="form_img_logo" src={require('../img/font2.png')} />
    <div id="div_title" className="p-3 mb-2 fw-bold text-white"><h4 className="h4_title">Ingreso de personal autorizado</h4></div>
    <label htmlFor="email" className="form-label">Correo electrónico</label>
    <input type="email" name="email" className="form-control" id="email" placeholder="juatha88@gmail.com" onChange={handleChange}/>
    <div className="valid-feedback">Campo ingresado</div>
    <div className="invalid-feedback">Debes completar este campo</div>
    <label htmlFor="password" className="form-label">Contraseña</label>
    <input type="password" name="password" className="form-control" id="password" placeholder="mimamámemima" onChange={handleChange} />
    <div className="valid-feedback">Campo ingresado</div>
    <div className="invalid-feedback">Debes completar este campo</div>
    <button type="submit" className="btn" id="btn-submit" onClick={handleSubmit}>Ingresar</button>
    <div id="div_alert_error" className= "alert alert-danger d-flex align-items-center" role="alert">{error && <p>{error}</p>}</div>
</div>
</div>
)
}
