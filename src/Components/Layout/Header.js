import React from "react";
import classes from './Header.module.css'
import image from '../../assests/meals.jpg'
import HeaderCartButton from "./HeaderCartButton";
const Header=(props)=>{
    return <div>
        <header className={classes.header}>
            <h2> ReactMeals</h2>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={image} alt="images"></img>
        </div>
    </div>
}
export default Header;