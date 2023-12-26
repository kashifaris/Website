import axios from "axios";

export const getRestaurant = async (name) => {
    const { data } = await axios.get('/api/restaurant/'+ name)
    return data;
}