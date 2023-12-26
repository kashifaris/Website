import { Router } from "express";
import { sample_foods, sample_adds, sample_tags } from "../data.js";

const router = Router(); 

router.get('/foods', (req,res) => {
    res.send(sample_foods)
});
router.get('/tags', (req,res) => {
    res.send(sample_tags)
});
router.get('/adds', (req, res) => {
    res.send(sample_adds)
})
router.get('/bestsellers', (req, res) => {
    const result = sample_foods.filter(item => item.bestSeller === true) ;
    res.send(result)
})
router.get('/search/:searchTerm', (req, res) => {
    const { searchTerm } = req.params ;
    const result = sample_foods.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    res.send(result)
})
router.get('/foods/:foodid', (req, res) => {
    const { foodid } = req.params ;
    const result = sample_foods.find(item => item.id === foodid);
    res.send(result)
})
router.get('/tag/:tag', (req, res) => {
    const { tag } = req.params ;
    const result = sample_foods.filter(item => item.category === tag)
    res.send(result)
})

export default router;