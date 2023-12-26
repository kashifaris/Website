import React, { useEffect, useRef, useState } from "react"
import classes from './tags.module.css'
import { Link  } from "react-router-dom"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function TagsComponent({tags,name}){

    return (
        <div className={classes.container}>
            <div className={classes.tags}>
{
    tags.map(tag =>
        <Link to={'/'+name+'/Menu/'+tag.name} key={tag.name} className={classes.link} >
            <div className={classes.card}>
                <div className={classes.image}>
                    <img src={'/foods/'+tag.image} alt="image" width="100% " height="100%" />
                </div>
                <div className={classes.content}>
                    {tag.name}
                </div>
            </div>
         </Link>
            )
        }
        </div>  
      </div>
    )
}
