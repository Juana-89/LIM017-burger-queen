import React from 'react'
export const Product = ({product})=>{
    const { id, item, price } = product;
    return (
        <blockquote className='card'>
            <div className='cart-body'>
                <p>{item}</p>
                <p>{price}</p>
            </div>
            <div className='card-actions'>
                <button className='add-to-car'>Pedir</button>
            </div>
        </blockquote>
    )
}