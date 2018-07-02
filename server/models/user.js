const mongoose = require('mongoose')

const Schema = mongoose.Schema

var userSchema = new Schema({
    email:String,
    password:String
})

module.exports = mongoose.model('user', userSchema, 'users')

//Here, in module.exports 3rd parameter is the name of collections of db. We have
//to keep the same properties and type binding in db