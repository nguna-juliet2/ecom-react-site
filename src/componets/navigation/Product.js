import React from "react";
import classes from './Product.module.css';
const Products = (props)=>{
    return(
        <div  className={classes.card}>
            <img className={classes.productimage} src={props.image_url} alt={props.name}/>
            <h2>{props.name}</h2>
            <h2 className={classes.price}>{props.price}</h2>
            <p>
                <button>Add to Cart</button>
            </p>
        </div>
    )
}

export default Products;