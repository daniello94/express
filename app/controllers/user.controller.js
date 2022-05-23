const User = require('../models/User');


function postUser(cb){
    User.find().lean().exec(function(err,users){
        if(err){
            cb(err)
        }else{
            cb(null,users)
        }
    })
}
function userGet(id, cb) {
    User.findById(id).exec(function(err, user) {
        if(err) {
            cb(err)
        } else {
            cb(null, user)
        }
    })
}

module.exports={
    list:postUser,
    usery:userGet
}