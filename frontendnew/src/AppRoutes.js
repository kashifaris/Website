import React from "react";
import { Route, Routes } from "react-router-dom";
import MainHome from "./mainpages/HomePage/MainHome";
import NotFound from "./mainpages/NotFoundPage/NotFound";
import Restaurant from "./mainpages/RestaurantPage/Restaurant";
import { Home } from "./pages/Home/Home";
import { Cart } from "./pages/CartPage/Cart";
import { Menu } from "./pages/MenuPage/Menu";
import Food from "./pages/FoodPage/Food";
import { Search } from "./pages/SearchPage/Search";

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<MainHome />} />
            <Route path="/home" element={<MainHome />} />
            <Route path="/restaurants" element={<Restaurant />} />
            <Route path="/restaurants/:search" element={<Restaurant />} />
            <Route path="/:name/*" element={<NotFound />} />
            <Route path="/:name/" element={<Home />} />
            <Route path="/:name/Cart" element={<Cart />} />
            <Route path="/:name/Menu/:tag" element={<Menu />} />
            <Route path="/:name/Foods/:foodid" element={<Food />} />
            <Route path="/:name/Search" element={<Search />} />
            <Route path="/:name/Search/:searchTerm" element={<Search />} />
        </Routes>
    )
}
export default AppRoutes