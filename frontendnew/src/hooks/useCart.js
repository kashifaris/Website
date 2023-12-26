import React, { createContext, useContext, useEffect, useState } from "react";
import { sample_foods } from "../components/data";

const CartContext = createContext(null)

export default function CartProvider({children}) {

    const [cartItems, setCartItems] = useState(sample_foods.slice(1,4).map(food => ({food, quantity:1, price: food.options[0].price}) ));
    const [totalPrice, setTotalPrice] = useState(50);
    const [totalCount, setTotalCount] = useState(3);

    useEffect(() => {

        const totalPrice = sum(cartItems.map(item => item.price));
        const totalCount = sum(cartItems.map(item => item.quantity));
        setTotalPrice(totalPrice);
        setTotalCount(totalCount);

    },[cartItems]);

    const removeFromCart = (foodId) => {
        const filteredCartItem = cartItems.filter(item => item.food.id !== foodId);
        setCartItems(filteredCartItem);
    }
    const sum = items => {
        return items.reduce((prevValue, curValue) => prevValue + curValue, 0);
    }
    const addToCart = food => {
        const cartItem = cartItems.find(item => item.food.id === food.id);
        if(cartItem){
            changeQuantity(cartItem,cartItem.quantity + 1);
        }
        else{
            setCartItems([...cartItems, {food,quantity:1, price: food.price}]);
        }
    }
    
    const changeQuantity = (cartItem, newQuantity) => {
        const { food } = cartItem;

        const changedCartItem = {
            ...cartItem, quantity: newQuantity, price: newQuantity*cartItem.price/cartItem.quantity,
        }

        setCartItems(
            cartItems.map(item => (item.food.id === food.id ? changedCartItem : item))
        );
    }

    // provide values/states to children

    return <CartContext.Provider value={{cart: {items: cartItems, totalPrice, totalCount}, removeFromCart,changeQuantity, }}>
        {children}
    </CartContext.Provider>
}

// used to get value from children

export const useCart = () => useContext(CartContext);