import React from "react";
import classes from './cart.module.css'
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { Link } from "react-router-dom";
import Price from "../../components/Price/Price";
import { MdDeleteOutline } from "react-icons/md";
import Title from "../../components/Title/Title";

export function Cart (){
    const { name } = useParams();
    const {cart, removeFromCart, changeQuantity} = useCart();

    return(
        <div className={classes.container}>
            <div className={classes.box}>
            <Title title={'Your Cart'} />

            <div className={classes.content}>
                {cart && cart.items.length >0 &&
                    <div className={classes.list}>
                    {
                        cart.items.map(item =>
                        <div key={item.food.id} className={classes.innercontainer}>
        
                            <Link to={'/'+name+'/Foods/'+item.food.id} className={classes.imagebox}>
                                <img src={'/foods/'+item.food.image}
                                alt={item.food.name} className={classes.image} />
                             </Link>
        
                            <div className={classes.data}>
                                <div className={classes.anothercontainer}>
                                    <div className={classes.itemname}>
                                        {item.food.name}
                                    </div>
                                    <div className={classes.remove} >
                                        <MdDeleteOutline onClick={() => removeFromCart(item.food.id)} />
                                    </div>
                                </div>
                                <div className={classes.anothercontainer}>
                                    <div className={classes.itemprice}>
                                        <Price price={item.price} />
                                    </div>
                                    
                                    <div className={classes.ctrlbuttons}>
                                        <button onClick={() => {
                                            item.quantity>1 ? changeQuantity(item, Number(item.quantity)-1)
                                            : removeFromCart(item.food.id) }}>-</button>

                                        <div className={classes.itemquantity}>
                                        {item.quantity}</div>
                                        
                                        <button onClick={() => changeQuantity(item, Number(item.quantity)+1)}>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    }
                    </div>
                }
                <div className={classes.checkoutbox}>
                <div className={classes.checkout}>
                    <div className={classes.innermostcontainer}>
                            <div className={classes.name}>Total Items ({cart.totalCount}) </div>

                            <div className={classes.value}><Price price={cart.totalPrice} /></div>
                    </div>
                    {/* TODO */}
                    <div className={classes.innermostcontainer}>
                            <div className={classes.name}>Tax & Charges</div>

                            <div className={classes.value}><Price price={cart.totalPrice} /></div>
                    </div>
                    <div className={classes.innermostcontainer}>
                            <div className={classes.totalname}>Total Price</div>

                            <div className={classes.totalvalue}><Price price={cart.totalPrice} /></div>
                    </div>

                </div>
                </div>

            </div>
            </div>
            <div className={classes.footer}>
                <Link to='/Checkout'>
                        <button className={classes.checkoutbutton}>
                            Proceed to Checkout 
                        </button>
                </Link>
            <Footer name={name}/>
            </div>
        </div>
    )
}   


