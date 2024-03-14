const express = require('express');
const router = express.Router();
const Hospital =  require("../Model/Hospital.model");

router.post ('/', async (req, res, next) => {
    try{
        const dept= new Hospital(req.body);
        const result = await Hospital.save();
        res.send(result);
    } catch(err){
        res.send(err.message);
    }
});

module.exports = router;