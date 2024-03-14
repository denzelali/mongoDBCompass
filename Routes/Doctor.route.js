const express = require('express');
const router = express.Router();
const Doctor =  require("../Model/Doctor.model");

//get all staff
router.get('/', async (req, res, next) => {
    try{
        const result = await Doctor.find({},{__v:0});
        res.send(result);
    }catch (error){
        res.send(error.message);
    }
})

//get specific id
router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    try{
        const result = await Doctor.findById(id);
        res.send(result);
    }catch (error){
        res.send(error.message);
    }
});

//patch by id
router.patch('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const update = req.body;
        const result = await Doctor.findByIdAndUpdate(id, update);
        res.send(result);
    } catch (error) {
        res.status(500).send(error.message); // Corrected line
    }
});

//post
router.post ('/', async (req, res, next) => {
    try{
        const doctor = new Doctor(req.body);
        const result = await doctor.save();
        res.send(result);
    } catch(error){
        res.send(error.message);
    }
});

//delete
router.delete('/:id', async (req, res, next) => {
    const id = req.params.id;
    try{
        const result = await Doctor.findByIdAndDelete(id) 
        res.send(result);
    }
            catch(error) {
                res.send(error.message);
                }
});

module.exports = router;