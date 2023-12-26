import React from "react";
import './footer.css'
import { AiOutlineHome,AiOutlineShoppingCart, AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai'
import { NavLink } from "react-router-dom";


export default function Footer({name}){



    return (
        <nav className="footercontainerthis">
            <NavLink
                to={'/'+name}
                className={({ isActive }) => (isActive ? 'footericonactive' : 'footericon')}
                end >
                <AiOutlineHome /> 
                <div className="text">Home</div>   
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? 'footericonactive' : 'footericon')}
                to={'/'+name+'/Menu/All'} >
                <AiOutlineMenu />
                <div className="text">Menu</div>
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? 'footericonactive' : 'footericon')}
                to={'/'+name+'/Search'} >
                <AiOutlineSearch />
                <div className="text">Search</div>
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? 'footericonactive' : 'footericon')}
                to={'/'+name+'/Cart'} >
                <AiOutlineShoppingCart />
                <div className="text">Cart</div>   
            </NavLink>
        </nav>

    )
}