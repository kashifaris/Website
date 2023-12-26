import React, { useEffect, useReducer, useState } from "react";
import classes from './menu.module.css'
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import { getAllTags } from "../../services/MenuService";
import TagsComponent from "../../components/Tags/TagsComponent";
import { getRestaurant } from "../../services/RestaurantService";
import Header from "../../components/Header/Header";
import { getAllByTag } from "../../services/MenuService";
import Thumbnails from "../../components/Thumbnails/Thumbnails";

const initialState = {
    TagsAll: [],
    MenuAll: [],
    Restaurant: [{}]
    
};

// using to initialize foods after checking it

const reducer = (state, action) => {
    switch (action.type) {
        case 'TAGS_LOADED':
            return {...state, TagsAll: action.payload }
        case 'RESTAURANT_LOADED':
            return {...state, Restaurant: action.payload}
        case 'MENU_LOADED':
            return {...state, MenuAll: action.payload}
        default:
            return state;
    }
}

export function Menu (){
    const [state, dispatch] = useReducer(reducer, initialState);
    const { TagsAll, Restaurant,MenuAll } = state;

    const { name, tag } = useParams();

    const [veg,setVeg] = useState(false);
    const [nonveg,setNonVeg] = useState(false);
    const [all,setAll] = useState(true);

    const filterfoods = MenuAll.filter(item => 
        all ? (item) : veg ? (item.veg === true) : nonveg ? (item.veg === false) : (item)
        );

        const Filter = () =>{
            return (
                <div className={classes.cat}>
                    {console.log(MenuAll)}
                    {
                        <>
                        <label key="All">
                            <input
                                value={true}
                                type="checkbox"
                                checked={all}
                                onChange={() => {
                                    setAll(true);
                                    setVeg(false);
                                    setNonVeg(false);
                                }}
                            />
                            <span>All</span>
                        </label>
                        <label key="Veg">
                            <input
                                value={true}
                                type="checkbox"
                                checked={veg}
                                onChange={() =>{
                                    setAll(false);
                                    setVeg(true);
                                    setNonVeg(false);
                                }
                            }
                            />
                            <span>Veg</span>
                        </label>
                        <label key="Non-Veg">
                            <input
                                value={true}
                                type="checkbox"
                                checked={nonveg}
                                onChange={() =>
                                    {
                                        setAll(false);
                                        setNonVeg(true);
                                        setVeg(false); 
                                    }
                            }
                            />
                            <span>NonVeg</span>
                        </label>
                        </>
                    }
                </div>
            );
        }
    
    useEffect(() => {
        getRestaurant( name ).then(Restaurant => dispatch({type:'RESTAURANT_LOADED', payload: Restaurant}));
        getAllTags().then(TagsAll => dispatch({type: 'TAGS_LOADED', payload: TagsAll}));
        getAllByTag(tag).then(MenuAll => dispatch({type:'MENU_LOADED', payload: MenuAll}))

    },[name, tag]
    )
    return (
        <div className={classes.maincontainer}>
            <div className={classes.content}>
                <Header restaurant={Restaurant[0]} />
                <div className={classes.header}>
                    <TagsComponent tags={TagsAll} name={name} />
                    <Filter name={name} tag={tag}  />
                </div>
                <Thumbnails foods={filterfoods} name={name} tag={tag}/> 
            </div>
            <Footer name={name}/>
        </div>
    )
}

