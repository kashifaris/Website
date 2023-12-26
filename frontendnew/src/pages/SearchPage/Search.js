import React, {useEffect, useReducer, useState} from "react";
import classes from './search.module.css';
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import SearchComponent from "../../components/Search/SearchComponent";
import { getBestSellers, getByName } from "../../services/MenuService";
import Add from "../../components/Add/Add";
import { getAdds } from "../../services/MenuService";
import Thumbnails from "../../components/Thumbnails/Thumbnails";
import BestSeller from "../../components/BestSeller/BestSeller";
import { getRestaurant } from "../../services/RestaurantService";
import Header from "../../components/Header/Header";

const initialState = {
    Adds: [],
    foods: [],
    Restaurant: [{}]

}

const reducer = (state,action) => {
    switch (action.type) {
        case 'FOODS_LOADED':
            return {...state, foods: action.payload}
        case 'RESTAURANT_LOADED':
            return {...state, Restaurant: action.payload}
        case 'ADDS_LOADED':
            return {...state, Adds: action.payload }
        default:
            return state;
    }
}

export const Search = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {foods, Adds, Restaurant} = state ;
    const { name, searchTerm } = useParams();
    const [bestSell, change] = useState(true);
    
    useEffect( () => {
        let loadFoods ;
        if(searchTerm) {
            change(false);
            loadFoods = getByName(searchTerm).then(foods => dispatch({type:'FOODS_LOADED', payload: foods}));
        }
        else {
            change(true);
            loadFoods = getBestSellers().then(foods => dispatch({type:'FOODS_LOADED', payload: foods}));
        }
        getRestaurant( name ).then(Restaurant => dispatch({type:'RESTAURANT_LOADED', payload: Restaurant}));
        getAdds().then(Adds => dispatch({type:'ADDS_LOADED', payload: Adds}))
    }, [searchTerm]);

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <Header restaurant={Restaurant[0]} />
                <SearchComponent />
                {
                    bestSell 
                    ? <BestSeller bestseller={foods} name={name} />
                    : <Thumbnails tag='Result' foods={foods} name={name} />
                }
                <Add adds={Adds}/>
            </div>
            <Footer name={name}/>
        </div>
    )
}