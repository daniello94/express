const express = require('express');
const router = express.Router();
const user = require('../controllers/user.controller');


router.get('/', function(req, res){
    
   user.list(function(err,users){
       if(err) res.send(err)
       res.render('user',{users})
       
   })
});


router.get('/:id', function(req, res){
   
    user.usery(req.params.id, function(err, user){
        if(err) res.send(err);

        res.render('user', user);
    })
});


module.exports=router;