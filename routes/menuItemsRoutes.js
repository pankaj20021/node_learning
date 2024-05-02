const express = require('express');
const router = express.Router();
const menuItem  = require('./../models/menuItem')



router.post('/',async(req,res) =>{
    try {
        const data = req.body;
        const newMenu = new menuItem(data);
        const responce = await newMenu.save();
        console.log("menu data is saved");
        res.status(200).json(responce);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error:" internal server error"})
        
    }
})


// get method for menu -item 


router.get('/', async(req, res)=>{
    try {
        const data = await menuItem.find();
        console.log("fetched data Done");
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:" internal server error"})
    }

})

module.exports = router;