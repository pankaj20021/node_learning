const express = require('express');
const router = express.Router();
// const Person = require('./../models/person');
const person = require('./../models/person')


router.post('/', async(req, res)=>{
    try {
     const data = req.body;
     const newPerson = new person(data);
 
     const responce =  await newPerson.save();
     console.log("data saved");
     res.status(200).json(responce);
 
    } catch (error) {
     console.log(error);
     res.status(500).json({error: " internal server Error"});
     
    }
 })



router.get('/', async(req, res)=>{
    try {
        const data = await person.find();
        console.log("data show or fetched");
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:" internal server error"})
    }

})




router.get('/:workType', async(req,res)=>{
    try {
        const workType = req.params.workType;
        if(workType == 'cheif'||workType == 'manager'|| workType =='waiter' ){
            const responce = await person.find({work: workType });
            console.log('responce fetched  to the server');
            res.status(200).json(responce);

        }else {
           res.status(404).json({error: 'invalid work-type'})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error:" internal server error"})
        
    }
})

module.exports = router;