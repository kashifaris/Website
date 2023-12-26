import axios from "axios";

export const getAllMenu = async () => {
    const { data } = await axios.get('/api/menu/foods');
    return data ;
};

export const getByName = async searchTerm => {
    const { data } = await axios.get('/api/menu/search/' + searchTerm);
    return data;
}
export const getByTag = async foodid => {
    const { data } = await axios.get('/api/menu/foods/' + foodid);
    return data;
}

export const getAllTags = async () => {
    const { data } = await axios.get('/api/menu/tags')
    return data ;
}

export const getAllByTag = async tag => {
    if (tag === 'All') return getAllMenu() ;
    const { data } = await axios.get('/api/menu/foods/' + tag);
    return data;
}
export const getBestSellers = async () => {
    const { data } = await axios.get('/api/menu/bestsellers');
    return data ;
}
export const getAdds = async () => {
    const { data } = await axios.get('/api/menu/adds');
    return data ;
}