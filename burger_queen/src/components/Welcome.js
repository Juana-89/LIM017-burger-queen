import * as React from "react";
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

export function Welcome() {
  const navigate = useNavigate()
  setTimeout(function() { navigate('/login')},5000)
  const { user } = useAuth()
  console.log(user)

  return (

      <div className='container-welcome'>

        {<img className='image-title'
        src={require('../img/font1.png')}
        alt='Rico burger'/>}

        { <img className='image-burger'
        src={require('../img/burger_load.png')}
        alt='Rico burger'/>}

        <div className='lds-ellipsis loader '>
        <div></div><div></div><div></div><div></div>
        </div>
      </div>
    )}
