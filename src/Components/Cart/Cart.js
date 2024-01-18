import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import React,{useContext} from 'react'
import CartContext from '../../Store/cart-context'
import CartItem from './CartItem'
const Cart=(props)=>{
    const cartcntx=useContext(CartContext)
    
    const totalAmount = cartcntx.items.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
      const handleCartItemChange = (id, action) => {
        if (action === "add") {
          cartcntx.addItem(cartcntx.items.find((item) => item.id === id));
        } else if (action === "remove") {
          cartcntx.removeItem(id);
        }
      };

    const cartItems= <ul
     className={classes['cart-items']}>{
        cartcntx.items.map(item=>(<li key={item.id}>
            <CartItem
              price={item.price}
              name={item.name}
              quantity={item.quantity}
              onAdd={() => handleCartItemChange(item.id, "add")}
              onRemove={() => handleCartItemChange(item.id, "remove")}
            />
          </li>))}</ul>
    return <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>close</button>
            <button className={classes.button}>order</button>
        </div>
    </Modal>

}
export default Cart