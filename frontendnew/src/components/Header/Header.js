import React, { useState, useReducer } from 'react';
import classes from './header.module.css'
import { BiMap } from 'react-icons/bi';
import eimage from './tomato.webp'
import Insta from '../Header/insta'
import Facebook from '../Header/facebook'
import Report from '../Header/report'
import { MdOutlineExpandMore, MdOutlineExpandLess } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import './Header.css'

const Header= ({restaurant}) => {

    const [open, setOPen] = useState(false);
    let navigate = useNavigate();

    const toggle = () => {
        setOPen(!open);
    }

    return (
        <div className={classes.a}>
            <div className={classes.aa}>
                <div className={classes.aaa} onClick={() => window.open(restaurant.RestaurantAddressLink, "_blank")}> 
                    <BiMap className={classes.map} style={{color: 'red', fontSize: '30px'}}/>
                </div>
                <div className={classes.aab}>
                    <div className={classes.a_name}>{restaurant.RestaurantName}</div>
                    <div className={classes.a_address}>{restaurant.RestaurantAddress}</div>
                </div>
                <div className={classes.aac}>
                    {
                    open 
                    ? <MdOutlineExpandLess className={classes.icon} onClick={toggle} />
                    : <MdOutlineExpandMore className={classes.icon} onClick={toggle} />
                    }
                </div>
            </div>
            {
                open && (
                    <>
                    <div className={classes.a_description}>{restaurant.RestaurantDes}</div>
                    <div className="e">
                    <div className="e_left">
                        {/* Socials */}
                        <div className="e_heading">Socials ❤️</div>
                        <div className="e_socials">
                            <div className="e_insta, e_contact" onClick={() => window.open('https://maps.app.goo.gl/fu4y8rtseDZWDZA39', "_blank")}> 
                                <Insta />
                            </div>
                            <div className="e_facebook, e_contact" onClick={() => window.open('https://maps.app.goo.gl/fu4y8rtseDZWDZA39', "_blank")}> 
                                <Facebook />
                            </div>
                        </div>
        
                        {/* contact Us */}
                        <div className="e_heading">Contact Us 📞</div>
                        <div className="e_contact">343498389439034</div>
        
                        {/* report problems */}
                        <div className="e_reportProblems">
                            <div> Report Problems 👮</div>
                            <div className="e_facebook, e_contact" onClick={() => window.open('https://maps.app.goo.gl/fu4y8rtseDZWDZA39', "_blank")}> 
                                <Report />
                            </div>
                        </div>
        
                    </div>
                    <div className="e_right">
        
                        {/* Visit main Site */}
                        <div className='e_poweredby'>Powered By :</div>
                        <div className="e_mainSite" onClick={() => {navigate('/')}}>
                            <img className='e_image' alt="" src={eimage} width="70%" height="70%"></img>
                        </div>
        
                    </div>
                    
                </div>
                </>
                )
            }
        </div>
    );
}
export default Header