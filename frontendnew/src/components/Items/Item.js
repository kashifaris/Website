import './item.css'
import { useState} from "react"
import veg from './veg.png'
import nonveg from './nonVeg.png'
import { AiFillStar } from 'react-icons/ai'
import { FaClock } from 'react-icons/fa'
import Price from '../Price/Price'


const Counter = () =>{
    const [counter, setCounter] = useState(1);
   
    //increase counter
    const increase = () => {
      setCounter(count => count + 1);
    };
   
    //decrease counter
    const decrease = () => {
        if (counter > 0) {
            setCounter(count => count - 1);
        }
    };
   
   
    return (
      <div className="ib_counter">
        <div className="ib_title">Select Quantity</div>
        <div className="ib_btn__container">
            <button className="ib_control__btn" onClick={decrease}>-</button>
            <span className="ib_counter__output">{counter}</span>
            <button className="ib_control__btn" onClick={increase}>+</button>
        </div>
      </div>
    );
}


const Item = ({data}) => {

    const [selected, setSelected] = useState({});
  
    const handleChange = (e) => {
      setSelected(e.target.value);
    };

    return(
        <div className="container">
            <div className="imageBox">
                <img className="image" src={'/foods/'+data.image} alt={data.name} width="100%" height="100%" />
            </div>
            <div className="ib">
                <div className="ib_NameDes">
                    <div className="ib_name">
                    <img className="ib_image" alt='' src = {data.veg?veg:nonveg} height="15px" width="15px"></img>
                        {data.name}
                    </div>
                    <div className="ib_des">
                        {data.description}
                    </div>
                    <div className="more"> 
                        <div className="rating">
                            <div><AiFillStar /> {data.rating}</div>
                        </div>
                        <div className="cookTime">
                            <div><FaClock /> {data.cookTime} min.</div>
                        </div>
                    </div>
                    <Counter />
                    <div className="ic_select">
                        <select value={selected} onChange={handleChange} className="select">
                            <option value={0} key={'cx0'}>--Select--</option>
                            {
                                data.options.map(option =>
                                (
                                    <option value={option.price} key={'cx'+option.oid}>{option.type} &emsp; <Price price={option.price}/> </option>
                                )
                                )
                            }
                        </select>
                    </div>
                </div>
                <button className="Order">
                    Order
                </button>
            </div>
        </div>
    );
}
export default Item;