import React, { useState } from 'react';
import { useAuth } from '../../context/authContext'
import { useNavigate } from 'react-router-dom';
import Carrousel from './Carrousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Login.module.css';

export function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  // Exportando login
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  // Actualizar estado
  const handleChange = ({ target: { name, value } }) =>
  setUser({...user, [name]: value});

  const handleSubmit = async(e) => {
    const emailWaiter = 'waiter@burguer-queen.com';
    const emailKitchen = 'cook_boss@burguer-queen.com';
    
    e.preventDefault();
    try{
      if(user.email === emailWaiter){
      await login(user.email, user.password);
      navigate('/waiter')
      }else if(user.email === emailKitchen){
          await login(user.email, user.password);
          navigate('/kitchen')
      }
      } catch (error) {
      setError(error.message);
    }
 };

 return (
  <div className={styles.containerLogin}>
  <Carrousel/>
  <div id={styles.formLogin}>
  <form id={styles.formInputs}>
  <img id={styles.formImgLogo} src={require('../../img/font2.png')} alt="Logo" />
  <div id={styles.title} className='p-3 mb-2 fw-bold text-white'><h4 className={styles.hTitle}>Ingreso de personal autorizado</h4></div>
  <label htmlFor='email' className={styles.formLabel}>Correo electrónico</label>
  <input type='email' name='email' className='form-control' id={styles.email} placeholder='juatha88@gmail.com' onChange={handleChange}/>
  <label htmlFor='password' className={styles.formLabel}>Contraseña</label>
  <input type='password' name='password' className='form-control' id={styles.password} placeholder='burgerqueen' onChange={handleChange} />
  <button type='submit' className='btn' id={styles.btnSubmit} onClick={handleSubmit} data-testid={'btnSubmit'}>Ingresar</button>
  <div id={styles.alertError}>{error && <p>{error}</p>}</div>
  </form>
  </div>
  </div>
)
}
