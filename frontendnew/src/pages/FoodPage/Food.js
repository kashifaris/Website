import React, { useEffect, useState, useReducer} from "react";
import classes from './food.module.css';
import Footer from "../Footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { getByTag } from "../../services/MenuService";
import Item from "../../components/Items/Item";
import { MdOutlineArrowBack } from "react-icons/md";
import Header from "../../components/Header/Header";
import { getRestaurant } from "../../services/RestaurantService";
const initialState = {
    Restaurant: [{}],
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'RESTAURANT_LOADED':
            return {...state, Restaurant: action.payload}
        default:
            return state;
        }
    }

const Food = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { Restaurant } = state;
    const [Food, setFood] = useState({ options:[]});
    const { name, foodid } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getRestaurant( name ).then(Restaurant => dispatch({type:'RESTAURANT_LOADED', payload: Restaurant}));

        getByTag(foodid).then(setFood);
    },[foodid, name]
    );

    return (

            <div className={classes.container}>
                <Header restaurant={Restaurant[0]}  />
                <div className={classes.goback} onClick={() => navigate(-1)} >
                        <MdOutlineArrowBack />
                        <span> Back</span>
                    </div>
                <div className={classes.content}>

                    <Item data={Food} />
                </div>
                <Footer name={name} />
            </div>

    )
}
export default Food ;