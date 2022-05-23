const mongoose = require("mongoose");


mongoose.connect('mongodb://' + process.env.DB_HOST + '/' + process.env.DB_NAME, { useNewUrlParser: true, useUnifiedTopology: true });


const schema = new mongoose.Schema({
    name: String,
    username: String,
    address: {
        street:String,
        city:String,
        zipcode:String,
        suite:String
    },
    website: String,
    email:String,
    phone:String,
    company:{
        name:String,
        
    }
})
module.exports = mongoose.model('User', schema)