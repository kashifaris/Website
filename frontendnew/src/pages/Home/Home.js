import React, { useEffect, useReducer } from "react";
import { getRestaurant } from "../../services/RestaurantService";
import { useParams } from "react-router-dom";
import classes from './home.module.css'
import NotFound from "../../mainpages/NotFoundPage/NotFound";
import Footer from "../Footer/Footer";
import Header from "../../components/Header/Header";
import { getAdds, getAllTags, getBestSellers } from "../../services/MenuService";
import TagsHome from "../../components/TagsHome/TagsHome";
import BestSeller from "../../components/BestSeller/BestSeller";
import Add from "../../components/Add/Add";
import SearchComponent from "../../components/Search/SearchComponent";

const initialState = {
    TagsAll: [],
    Restaurant: [{}],
    Popular: [],
    Adds: [],
};

// using to initialize foods after checking it

const reducer = (state, action) => {
    switch (action.type) {
        case 'RESTAURANT_LOADED':
            return {...state, Restaurant: action.payload}
        case 'TAGS_LOADED':
            return {...state, TagsAll: action.payload }
        case 'BESTSELLER_LOADED':
            return {...state, Popular: action.payload }
        case 'ADDS_LOADED':
            return {...state, Adds: action.payload }
        default:
            return state;
    }
}

export const Home = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { Restaurant, TagsAll, Popular, Adds } = state;
    const { name } = useParams();
    
    useEffect(() => {
        getAllTags().then(TagsAll => dispatch({type: 'TAGS_LOADED', payload: TagsAll}));

        getBestSellers().then(Popular => dispatch({type:'BESTSELLER_LOADED', payload: Popular}))

        getRestaurant( name ).then(Restaurant => dispatch({type:'RESTAURANT_LOADED', payload: Restaurant}))

        getAdds().then(Adds => dispatch({type:'ADDS_LOADED', payload: Adds}))

    },[name]
    )

    return(
        Restaurant.length > 0 ?
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.header}>   
                    <Header restaurant={Restaurant[0]}  />
                    <SearchComponent />
                </div>
                <div className={classes.innerContent}>
                    <TagsHome name={name} tags={TagsAll} />
                    <Add adds={Adds} />
                    <BestSeller bestseller={Popular} name={name} />
                    <Add adds={Adds} />
                    {/* <FooterComp /> */}
                </div>
            </div>
            <Footer name={name} />
        </div>
        : <NotFound />
    )
}