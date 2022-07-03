import React, { useState } from 'react';
import '../../stylesheets/WaiterView/ButtonsAddLess.css';

const ButtonsAddLess = ({data, addToCart, delFromCart}) => {
    let {id,name,price, quantity} = data;
    
    const [counterState, setCounterState] = useState(0);

    const handleIncrement = () => {
        setCounterState(counterState + 1);
    } 

    const handleDecrement = () => {
        setCounterState(counterState - 1);
        if (counterState === 0) {
            // alert('queda en 0')
            setCounterState(0)
        }
    } 

    return(
        <div className="div_add_subs">
        <button className='btn_add' onClick={handleIncrement}><i className="icon-plus-sign"></i></button>
        <span className="span_quantity">{counterState}</span>
        <button className='btn_subs' onClick = {handleDecrement}><i className="icon-minus"></i></button>
        </div>
)
}

export default ButtonsAddLess;