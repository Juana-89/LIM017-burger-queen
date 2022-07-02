import { useReducer } from 'react';
import CartItem from './CartItem';
import ProductItem from './ProductItem';
import { shoppingInitialState, shoppingReducer} from './shoppingReducer'
import { TYPES } from './shoppingAction';

export const ShoppingCart = () => {
    const [state,dispatch] = useReducer(shoppingReducer, shoppingInitialState);
    const {products, cart} = state;
    const addToCart = (id) => {
        //console.log(id)
        dispatch({type:TYPES.ADD_TO_CART, payload:id})
    };
    const delFromCart = (id, all = false) => {
        console.log(id, all)
        if(all){
            dispatch({type: TYPES.REMOVE_ALL_FROM_CART, payload:id})
        }else{
            dispatch({type: TYPES.REMOVE_ONE_FROM_CART, payload:id})
        }
    }
    const clearCart = () => {
        dispatch({type: TYPES.CLEAR_CART})
    }

    return (
        <div>
            <h2>CARRITO DE COMPRAS</h2>
            <h3>PRODUCTOS</h3>
            <article className="box">
            {products.map((product) => (
            <ProductItem key={product.id} data={product} addToCart={addToCart} />
            ))}
            </article>
            <h3>carrito</h3>
            <article className="box">
            <button onClick={clearCart}>LIMPIAR CARRITO</button>
            {cart.map((item, index) => (
            <CartItem key={index} data={item} delFromCart={delFromCart}/>
            ))}
            </article>
        </div>
    )
}