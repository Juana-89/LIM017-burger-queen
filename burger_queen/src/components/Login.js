import React, { useState } from 'react';
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Login() {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // Exportando login
  const {login} = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

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
      setError(error.message);
    }
 };


 return (
//  <>{error && <p>{error}</p>}


 <div className='container-login'>

    <form onSubmit={handleSubmit}>
    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Correo electrónico</label>
    <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Correo electrónico" onChange={handleChange}/>
    </div>

    <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
    <input type="password" name="password" className="form-control" id="password" placeholder="Contraseña" onChange={handleChange} />
    </div>

    <button type="submit" className="btn btn-primary">Submit</button>

    <div className= "alert alert-danger d-flex align-items-center" role="alert" >
    {error && <p>{error}</p>}
    </div>
    </form>
    </div>
    )}
