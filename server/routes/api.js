const express = require('express')
const router = express.Router()
const User = require('../models/user')

const mongoose = require('mongoose')
const db = "mongodb://pushpak:pushpak1@ds123971.mlab.com:23971/eventsdb-alpha"

mongoose.connect(db, err => {
    if(err)
     console.log(err)
    else
     console.log('Successfully connected to db:users')
})

router.get('/',(req, res) => {
      res.send('Hi from Pushpak!!!!!');
})

//This is our registration API
router.post('/register', function(req, res){
    let userData = req.body
    let user = new User(userData)

    user.save((err, newUserData) => {
        if(err){
            console.error("Error in registering user : "+err)
        }
        else{
                res.status(200).json(newUserData)
        }
    })
})

//no need to add slash at starting as router automatically adds it in url
/*router.get('api2',(req, res) => {
    res.send('Hi from Pushpak 8757856866!!!!!');
})*/

module.exports = router