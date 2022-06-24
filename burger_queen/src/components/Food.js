import React from 'react';

export function Food() {
    return (
        <div className='container-options'>
            <div className='btn-options'>
            <button className='btn-food'><img src={'https://i.ibb.co/NNxN7kw/bebida-cafe-sandwich.png'} className='img-btn'/> 
            <p className='p-food'>DESAYUNO</p>
            </button>

            <button className='btn-food'><img src={'https://i.ibb.co/N13Y4H0/French-fries-hamburger.jpg'} className='img-btn'/> 
            <p className='p-food'>ALMUERZO Y CENA</p>
            </button>
            </div>
        </div>
    )
}
