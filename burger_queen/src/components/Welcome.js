import React from 'react';

export function Welcome() {
    return (
      <div className='Container-welcome'>

        { <img className='image-burger'
        src={require('../img/burger_load.png')}
        alt='Rico burger'/>
/*
        <div className='name-company'>
          <p className='title'>Burger queen</p>
        </div> */}
        <div className='Lds-ellipsis loader'>
        <div></div><div></div><div></div><div></div>
        </div>
      </div>
    )
}
