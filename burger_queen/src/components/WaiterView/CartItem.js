const CartItem = ({data,delFromCart}) => {
    let {id,name,price, quantity} = data;
    return (
        <div style={{border:"thin solid white", padding: "2px", color: "white"}}>
            <h3>{name}</h3>
            <h5>${price} x {quantity} = {price*quantity}</h5>
            <button onClick={() => delFromCart(id)}>ELIMINAR UNO</button>
            <button onClick={() => delFromCart(id, true)}>ELIMINAR Todo</button>
            </div>
    )
}
export default CartItem;