import React, { useReducer } from 'react';
import { orderInitialState, orderReducer} from './orderReducer'
import { TYPES } from './orderAction';
import TableRowSelect from './TableRowSelected';
import Inputs from './Inputs';
import Header from './Header';
import Plates from './Plates';
import TableHeader from './TableHeader';
import TableFooter from './TableFooter';
import { addOrder } from '../../firebase/index.js';
import '../../stylesheets/WaiterView/WaiterMainView.css';
import 'bootstrap/dist/css/bootstrap.min.css';



export const WaiterMainView = () => {
    const [state,dispatch] = useReducer(orderReducer, orderInitialState);
    const {products, order} = state;
    const addToOrder = (id) => {
    dispatch({type:TYPES.ADD_TO_ORDER, payload:id})
    };

    const delFromOrder = (id, all = false) => {
    console.log(id, all)
    if(all){
    dispatch({type: TYPES.REMOVE_ALL_FROM_ORDER, payload:id})
    }else{
    dispatch({type: TYPES.REMOVE_ONE_FROM_ORDER, payload:id})
    }
    }
    const clearOrder = () => {
    dispatch({type: TYPES.CLEAR_ORDER})
    }

    const sumatoria = () => {
        dispatch({type: TYPES.ADITION_TOTAL_ORDER})
    }

    const enviarOrden = () => {
        console.log(order, "aaaaaaaaaaaaaa")
        addOrder(order)
        
    }
    return (
    <div>
    <Header/>

    <Inputs/>
    <div className='container-plates'> 
    {products.map((product) => (
    <Plates key={product.id} data={product} addToOrder={addToOrder} />))}
    </div>

    <div className='div_select_item_by_customer'>
    <table id="table_select_item" className="table table-striped">
    <TableHeader/>
    {order.map((item, index) => (
    <TableRowSelect key={index} data={item} delFromOrder={delFromOrder}/>))}

    </table>
    </div>
    <TableFooter/>

    <div className="btns_deleted_and_send_order">
    <button id="btn_trash" onClick={clearOrder} className='btn'><i className="icon-trash"></i> Eliminar</button>
    <button id="btn_send" className='btn' onClick={enviarOrden}><i className="icon-ok-sign"></i>Enviar</button>
   
    </div>

    </div>
    )
};