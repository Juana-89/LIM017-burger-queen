import { createContext, useEffect, useState } from "react";
/* Creamos el context, se le puede pasar un valor inicial */
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  /* Creamos un estado para el carrito */
  const [cartItems, setCartItems] = useState(() => {
  try {
    const productosEnLocalStorage = localStorage.getItem("cartProducts");
    return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) :[]
  } catch (error) {
    return []
  }
});

useEffect(() => {
  localStorage.setItem("cartProducts", JSON.stringify(cartItems))
  console.log(cartItems);
}, [cartItems]);

  const addItemToCart = (product) => {
   const inCart = cartItems.find(
    (productInCart) => productInCart.id === product.id
    );
  
  if(inCart) {
    setCartItems(
      cartItems.map((productInCart) => {
        if (productInCart.id === product.id) {
          return { ...inCart, amount: inCart.amount + 1 }
        } else return productInCart;
       })
    )
       } else {
          setCartItems([...cartItems, { ...product, amount:1}])
        }
  }
  const deleteItemToCart = (product) => {
    const inCart = cartItems.find(
      (productInCart) => productInCart.id === product.id
      );

  if(inCart.amount === 1) {
    setCartItems(
      cartItems.filter((productInCart) => productInCart.id !== product.id) 
    );
  }else {
    setCartItems(
      cartItems.map((productInCart) => {
        if (productInCart.id === product.id) {
          return {...inCart, amount: inCart.amount - 1}
          } else return productInCart
        })
    )
  }
};

  return (
    /* Envolvemos el children con el provider y le pasamos un objeto con las propiedades que necesitamos por value */
    <CartContext.Provider
      value={{ cartItems, addItemToCart, deleteItemToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContext;
