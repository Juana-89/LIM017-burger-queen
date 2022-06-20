import React from 'react';

export function Welcome() {
    return (
      <div className='container-welcome'>

        {<img className='image-title'
        src={require('../img/font1.png')}
        alt='Rico burger'/>}

        { <img className='image-burger'
        src={require('../img/burger_load.png')}
        alt='Rico burger'/>}

        <div className='lds-ellipsis loader'>
        <div></div><div></div><div></div><div></div>
        </div>
      </div>
    )}

    setInterval(function(){document.querySelector('.container-welcome').style.display = "none"},5000)
