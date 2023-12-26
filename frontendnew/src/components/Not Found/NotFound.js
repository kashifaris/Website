import React from "react";
import classes from './notfound.module.css'
import { NavLink } from "react-router-dom";

const NotFound = ({name}) => {
    return (
        <div className={classes.newmainContainer}>
            <img src='./notfound.svg'></img>
            <div className={classes.notfound}>Sorry, Not Found</div>
            <div className={classes.hint}>Hint: Change filter</div>
            <NavLink to={'/'+name+'/Menu/All'}>
            <button className={classes.button}onClick={() => {}}>Back To Menu</button>
            </NavLink>
        </div>
    )
}
export default NotFound;