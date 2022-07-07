import React, { useState } from 'react';

function Cart() {
    const [item, setItem ] = useState([]);
    
    return(
        <section className='py-4 container'>
        <div className='row justify-content-center'>
        <div className='col-12'>
            <table className='table table-light table-hover m-0'>
            <tbody>
            {items.map((item, index) => {
                return(
                    <tr key = {index}>
                    <td>
                        <img src={item.img} style={{height: '6rem'}} />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>Quantity ({item.quantity})</td>
                    <td>
                        <button className="btn btn-info ms-2" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                        <button className="btn btn-info ms-2" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                        <button className="btn btn-info ms-2" onClick={() => removeItem(item.id)}>Remove Item</button>
                    </td>
                </tr>
                )
            })}
            </tbody>
            </table>
        </div>
        <div className="col-auto ms-auto">
        <h2>Total Price: ${cartTotal}</h2>
        </div>
        <div className="col-auto">
        <button
        className="btn btn-danger m-2" onClick = {() => emptyCart()}
        >Clear Cart</button>
        <button
        className="btn btn-primary m-2" onClick = {() => emptyCart()}
        >Buy Now</button>
        </div>
        </div>
        </section>
    );
};