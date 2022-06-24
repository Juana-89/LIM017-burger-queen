import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import menu from '../menu.json'

export function Breakfast() {
  return (
    <div className="Show">
      ...Menues...
      <br /><br />
      {
        menu.map( product => {
          return (
            <div className='box'>
              { product.breakfast.nombre }
              { product.breakfast.id }
              { product.breakfast.precio }
              <img src ={ product.breakfast.img} />
            
            </div>
          )
        })
      }
    </div>
  )
}

