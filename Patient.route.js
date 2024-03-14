const express = require('express');
const router = express.Router();
const Patient =  require("../Model/Patient.model");

router.post ('/', async (req, res, next) => {
    try{
        const dept= new Patient(req.body);
        const result = await Patient.save();
        res.send(result);
    } catch(err){
        res.send(err.message);
    }
});

module.exports = router;