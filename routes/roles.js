var express = require('express');
var router = express.Router();
const roles =  require('../models').rol;


router.get("/",function(req,res){
    roles.findAll().then(data=>{
        res.send(data);
      });
});

module.exports = router;
