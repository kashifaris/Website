import classes from './thumbnails.module.css'
import Price from "../Price/Price";
import { AiFillStar } from 'react-icons/ai'
import { FaClock } from 'react-icons/fa'
import { Link } from "react-router-dom";
import NotFound from '../Not Found/NotFound';
import { useCart } from '../../hooks/useCart';



const Thumbnails = ({foods, name, tag}) => {

    const{addToCart} = useCart();   

    return (
        foods.length > 0 ?
        <div className={classes.mainContainer}>
        <div className={classes.title}>{tag}</div>
        <div className= {classes.list}>
            {
                    foods.map(food =>(
                                <Link to= {'/'+name+'/Foods/'+food.id} key={food.id} className={classes.container}>
                                        <div className={classes.imageBox}>
                                            {/* renders image */}
                                            <div className={classes.imageBox}>
                                                <img className={classes.image} src={'/foods/'+food.image} alt={food.name} />
                                            </div>

                                        </div>
                                        <div className={classes.content}>
                                            <div className={classes.name}>{food.name}</div>
                                            <div className={classes.des}>{food.description}</div>
                                            <div className={classes.more}> 
                                                    <div className={classes.rating}>
                                                        <div><AiFillStar /> {food.rating}</div>
                                                    </div>
                                                    <div className={classes.cookTime}>
                                                        <div><FaClock /> {food.cookTime}</div>
                                                    </div>
                                            </div>
                                            <div className={classes.new}>
                                                <div className={classes.priceContainer}>
                                                    <span className={classes.startingat}>Starting at just </span>
                                                    <Price price={food.options[0].price} />
                                                    </div>
                                                    
                                                <button className={classes.Order}>
                                                Order
                                                </button>
                                            </div>

                                        </div>
                                </Link>
                ))
            }
        </div>
        </div>
        : <NotFound name={name}/>
    )
}
export default Thumbnails;