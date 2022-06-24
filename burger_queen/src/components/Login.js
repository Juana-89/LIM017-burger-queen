import React, { useState } from 'react';
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

console.log(bootstrap);

const image1 = require('../img/burger1.jpg');
const image2 = require('../img/burger2.jpg');
const image3 = require('../img/burger3.jpg');

export function Login() {
  const [show, setShow] = useState(true)
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
    setError('');
    try{
      await login(user.email, user.password);
      navigate('/Food');
    } catch (error) {
      setError(alert("Correo electrónico o contraseña incorrecta"));
    }
 };


 return (
//  <>{error && <p>{error}</p>}



 <div className="container-login">

    <div id="carouselBurger" className="carousel carousel-dark slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselBurger" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselBurger" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselBurger" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>

    <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="1000">
    <img src={image1} className="d-block w-100" alt="Hamburguesa clásica" />
    </div>

    <div className="carousel-item" data-bs-interval="2000">
    <img src={image2} className="d-block w-100" alt="Hamburguesa doble" />
    </div>

    <div className="carousel-item" data-bs-interval="3000">
    <img src={image3} className="d-block w-100" alt="Hamburguesa triple" />
    </div>
    </div>

    <button className="carousel-control-prev" type="button" data-bs-target="#carouselBurger" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
    </button>

    <button className="carousel-control-next" type="button" data-bs-target="#carouselBurger" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
    </button>
</div>





 <div className="row">
    <div className="col">
    <div className="shadow-lg p-3 mb-5 mt-4 bg-body rounded">
    <div className="p-3 mb-2 bg-primary bg-gradient fw-bold text-white">Login</div>

    <form className="row g-3 needs-validation" onSubmit={handleSubmit}>
    
    <div className="form-login">
    <label htmlFor="email" className="form-label">Correo electrónico</label>
    <input type="email" name="email" className="form-control" id="email" placeholder="Correo electrónico" onChange={handleChange}/>
    <div className="valid-feedback">Campo ingresado</div>
    <div className="invalid-feedback">Debes completar este campo</div>
    </div>

    <label htmlFor="password" className="form-label">Contraseña</label>
    <input type="password" name="password" className="form-control" id="password" placeholder="Contraseña" onChange={handleChange} />
    <div className="valid-feedback">Campo ingresado</div>
    <div className="invalid-feedback">Debes completar este campo</div>

    <button type="submit" className="btn btn-warning" id="btn-submit" onClick={() => setShow(true)}>Ingresar</button>
    <div className= "alert alert-danger d-flex align-items-center" role="alert">
    {error && <p>{error}</p>}</div>

    </form>
    </div>

    </div>
    </div>
  </div>




    )}


    (function () {

      // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
      let forms = document.querySelectorAll('.needs-validation')
      //Recorremos los forms y evitamos en envío sin validacion
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }else{
              alert('FORM VALIDADO')
            }
            form.classList.add('was-validated')
          }, false)
        })
    })()
