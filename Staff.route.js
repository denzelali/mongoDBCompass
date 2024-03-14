const express = require('express');
const router = express.Router();
const Staff =  require("../Model/Staff.model");

//get all staff
router.get('/', async (req, res, next) => {
    try{
        const result = await Staff.find({},{__v:0});
        res.send(result);
    }catch (error){
        res.send(error.message);
    }
})

//get specific id
router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    try{
        const result = await Staff.findById(id);
        res.send(result);
    }catch (error){
        res.send(error.message);
    }
});

//patch by id
router.patch('/:id', async (req, res, next) => {
    try{
        const id = req.params.id;
        const update = req.body
        const result = await Staff.findByIdAndUpdate(id, update);
        res.send(result);
    } catch (error) {
        res.send(error);
    }
});

//post
router.post ('/', async (req, res, next) => {
    try{
        const staff = new Staff(req.body);
        const result = await staff.save();
        res.send(result);
    } catch(err){
        res.send(err.message);
    }
});

//delete
router.delete('/:id', async (req, res, next) => {
    const id = req.params.id;
    try{
        const result = await Staff.findByIdAndDelete(id) 
        res.send(result);
    }
            catch(error) {
                res.send(error.message);
                }
});

module.exports = router;