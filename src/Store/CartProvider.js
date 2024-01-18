import React,{useState} from "react";
import CartContext from "./cart-context";
const CartProvider=(props)=>{
    const [cartItems, setCartItems] = useState([]);
    
    const addItemToCartHandler=(item)=>{
        const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);

        if (existingItemIndex !== -1) {
          // If the item already exists, update its quantity
          const updatedCartItems = [...cartItems];
          updatedCartItems[existingItemIndex].quantity += 1;
          setCartItems(updatedCartItems);
        } else {
          // If the item doesn't exist, add it to the cart with quantity 1
          setCartItems([...cartItems, { ...item, quantity: item.quantity }]);
        }
    
    }
    const removeItemToCartHandler=(id)=>{
        const existingItemIndex = cartItems.findIndex((item) => item.id === id);

        if (existingItemIndex !== -1) {
          const updatedCartItems = [...cartItems];
          if (updatedCartItems[existingItemIndex].quantity === 1) {
            // If the item's quantity is 1, remove it from the cart
            updatedCartItems.splice(existingItemIndex, 1);
          } else {
            // If the item's quantity is greater than 1, decrease the quantity by 1
            updatedCartItems[existingItemIndex].quantity -= 1;
          }
          setCartItems(updatedCartItems);
        }

    }
    const cartContext={
        items:cartItems,
        totalAmount: 0,
        addItem:addItemToCartHandler,
        removeItem:removeItemToCartHandler,
        message:'click me'
    }
  return <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>
}
export default CartProvider