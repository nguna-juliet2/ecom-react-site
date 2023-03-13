import React from "react";
import classes from './NavCartigories.module.css';
import image1 from '../Assets/img2.png'
import image2 from '../Assets/sideImage.png'
const NavCartigories =()=>{
    return(
        <div className={classes.maindiv}>
            <aside className={classes.categories}>
                <div className={classes.divTag}>
                    <h2>Categories</h2>
                </div>
                
                <ul>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Accessories</li>
                    <li>Shoes</li>
                    <li>New Arrivals</li>
                    <li>Clearence</li>
                    <li>Special Offers</li>
                    <li>Gift Cards</li>
                     
                </ul>
            </aside>

        <div>
            <input className={classes.search} type='text' placeholder="Search......"/>

            <div className={classes.imgContainer}>
                <div className={classes.fristImg}>
                    <div>
                        <h1>Summer 2022</h1>
                        <h1>NEW ARRIVALS</h1>
                        <button>Discover Now</button>
                    </div>
                    <img src={image1}></img>
                </div>
                <div className={classes.secDiv}>
                    <div className={classes.topMacth}>
                        <h2>TOP VIEW IN THE WEEK</h2>
                        <h1>TRENDING</h1>
                    </div>
                    <img src={image2}></img>
                </div>
            </div>
        </div>
        </div>
    )
}
export default NavCartigories;