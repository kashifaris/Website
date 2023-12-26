import { Router } from "express";
import { sample_restaurant } from "../datamodified.js";

const router = Router(); 

router.get('/:name', (req,res) => {
    const { name } = req.params ;
    const restaurant =sample_restaurant.filter(restaurant =>
        restaurant.RestaurantName.toLowerCase() === name.toLowerCase());
    res.send(restaurant)
})

export default router;