import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Food( { text, click, showView } ) {
    const navigate = useNavigate('/login')
    // return (
    //     <div className='container-options'>
    //         <div className='btn-options'>
    //         <button className='btn-food' onClick={function(){navigate('/breakfast')}}><img src={'https://i.ibb.co/NNxN7kw/bebida-cafe-sandwich.png'} className='img-btn'/> 
    //         <p className='p-food'>DESAYUNO</p>
    //         </button>

    //         <button className='btn-food' onClick={function(){navigate('/lunch')}}><img src={'https://i.ibb.co/N13Y4H0/French-fries-hamburger.jpg'} className='img-btn'/> 
    //         <p className='p-food'>ALMUERZO Y CENA</p>
    //         </button>
    //         </div>
    //     </div>
    // )
    return (
        <div className='container-options'>
       <div className='btn-options'>
       <button
       className={click? 'btn-desayuno' : 'btn-lunch'}
       onClick={ showView }>
        {text}
             </button>
             </div>
             </div>
    )
    }