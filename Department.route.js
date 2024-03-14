const express = require('express');
const router = express.Router();
const Department =  require("../Model/Department.model");

router.post ('/', async (req, res, next) => {
    try{
        const dept= new Department(req.body);
        const result = await Department.save();
        res.send(result);
    } catch(err){
        res.send(err.message);
    }
});

module.exports = router;
