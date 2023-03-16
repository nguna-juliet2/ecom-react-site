 import React from "react";
 import { Fragment } from "react";
 import {Link} from 'react-router-dom';
 import Navigation from "../navigation/Navigation";
 import NavCartigories from "../Cartigories/NavCartigories";
import classes from './Header.module.css';
 

const Header = (props)=>{
    return(
        <Fragment>
        <header className={classes.header}>
                    <div>
                         <nav className={classes.navList}>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/shop">Shop</Link>
                                </li>
                                <li>
                                    <Link to="/pages">Pages</Link>
                                </li>
                                <li>
                                    <Link to="/blogs">Blogs</Link>
                                </li>
                                <li>
                                    <Link to="/contact"> Potifilio</Link>
                                </li>
                            </ul>
                         </nav>
                     
                         
                    </div>
                    <div>
                        <nav className={classes.navList}>
                        <ul>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                        </ul>
                        </nav>
                        
                    </div>
    </header>
    <Navigation/>
    <NavCartigories/>
     
    </Fragment>
    )
}
export default Header;