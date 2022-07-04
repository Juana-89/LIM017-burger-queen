import { createContext, useEffect, useState} from 'react';
/* Creamos el context, se le puede pasar un valor inicial */
const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState (() => {
        try {
            const productsInLocalStorage = localStorage.getItem('cartProducts')
            return productsInLocalStorage ? JSON.parse(productsInLocalStorage) : [];
        } catch (error) {
            return []
        }
    })
useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(cartItems));

}, [cartItems]);

const addItemToCart = (product) => {
    const inCart = cartItems.find(
        (productInCart) => productInCart.id === product.id
        );

if(inCart){
    setCartItems(
        cartItems.map((productInCart) => {
            if(productInCart.id === product.id) {
                return { ...inCart, amount: inCart.amount + 1 };
            }else return productInCart;
        })
        );
}else {
    setCartItems([...cartItems, { ...product, amount: 1}]);
}

const deleteItemToCart = (product) => {
    const inCart = cartItems.find(
        (productInCart) => productInCart.id === product.id
        );
if(inCart.amount === 1) {
    setCartItems(
        cartItems.filter((productInCart) => productInCart.id !== product.id)
    )
    }else{ 
        setCartItems((productInCart) => {
        if(productInCart.id === product.id) {
            return {...inCart, amount: inCart.amount-1}
        }else return productInCart;
    });
}

}
};
return (
    <CartContext.Provider value={{cartItems, addItemToCart,deleteItemToCart}}>
    {children} 
    </CartContext.Provider>
)
};
export default CartContext;