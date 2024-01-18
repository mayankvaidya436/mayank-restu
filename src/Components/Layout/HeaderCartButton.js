import React,{useContext} from "react";
import classes from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/cart-context"; 
const HeaderCartButton=(props)=>{
  const cartctx=useContext(CartContext)
  let quantity=0
  cartctx.items.forEach(item=>{
    quantity+= Number(item.quantity)
  })
    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon/>
        </span>
        <span>Your cart</span>
        
        <span className={classes.badge}>{quantity}</span>
    </button>
}
export default HeaderCartButton;