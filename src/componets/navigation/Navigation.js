import React from "react";
import classes from './Navigation.module.css';
const Navigation =()=>{
    return(
        <div className={classes.containersection}>
        <div>
            <h2>Workiee</h2>
        </div>
        <div className={classes.iconcenter}>
            <span>
                <h1>Call Us +256 754342016</h1>
                <p>from 8:00 to 21:00 (Mon- sun) Free By Uganda</p>
            </span>
            <div>
                <a href="#">
                    <span>0</span>
                    <span></span>
                    <span>Compare</span>
                </a>
            </div>
            <div>
                <a href="#">
                    <span>0</span>
                    <span></span>
                    <span>WishList</span>
                </a>
            </div>
            <div>
                <a href="#">
                    <span>0</span>
                    <span></span>
                    <span>My Cart</span>
                </a>
            </div>
        </div>
    </div>
    )
}
export default Navigation;