import React from "react";
import classes from './MealsItem.module.css'
import MealItemForm from "./MealItemForm";
const MealsItem=(props)=>{
    const price=`$${props.price.toFixed(2)}`;
    return <li className={classes.meal}>  
        <div>
            <h2>{props.name}</h2>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            
            <MealItemForm id={props.id} item={props}/>
        </div>
    </li>
}
export default MealsItem