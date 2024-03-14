const express = require('express');
const router = express.Router();
const Doctor =  require("../Model/Doctor.model");

router.post ('/', async (req, res, next) => {
    try{
        const dept= new Doctor(req.body);
        const result = await Doctor.save();
        res.send(result);
    } catch(err){
        res.send(err.message);
    }
});

module.exports = router;