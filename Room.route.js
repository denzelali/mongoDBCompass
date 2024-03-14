const express = require('express');
const router = express.Router();
const Room =  require("../Model/Room.model");

router.post ('/', async (req, res, next) => {
    try{
        const dept= new Room(req.body);
        const result = await Room.save();
        res.send(result);
    } catch(err){
        res.send(err.message);
    }
});

module.exports = router;