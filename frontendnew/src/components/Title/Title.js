import React from "react";
import classes from './title.module.css'

const Title = ({title}) => {
    return (
        <div className={classes.title}>{title}</div>
    )
}
export default Title ;