import * as React from "react";
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import styles from './Welcome.module.css';

export function Welcome() {
  const navigate = useNavigate()
  const { user } = useAuth()
  console.log(user)
  return (
      <div className= {styles.containerWelcome}>
        <img className= {styles.imageTitle}
        src={require('../../img/font1.png')}
        alt='Rico burger'/>

        <img className={styles.imageBurger}
        src={require('../../img/burger_load.png')}
        alt='Rico burger'/>
        <div className={styles.loader}>
        <div></div><div></div><div></div><div></div>
        </div>
        {setTimeout(function() { navigate('/login')},5000)}
      </div>
    )}
