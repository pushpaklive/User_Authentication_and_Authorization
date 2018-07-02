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

//Phase 2 starts-making login api
router.post('/login', (req, res) => {
    let userData = req.body;
    const user = new User(userData);

    User.findOne({email : user.email}, (err, user) => {
        if(err){
            console.error("error in login : caused by : ",err)
        }
        else{
            if(!user){
                res.status(401).json("Invalid email")
            }else if(user.password !== userData.password){
                res.status(401).json("Invalid Password!")
            }
            else{
                res.status(200).json(user)
            }
        }
    })
})

//Api for regular events - Phase 3 -11 
router.get('/events', (req, res) => {
    //Hard coding data - not taking it from mongodb collection
    let events = [
        { 
            "_id":"1",
            "name":"Pushpak-alpha-user",
            "description":"Test Desc 1",
            "date":"04-08-1993"
        },
        { 
            "_id":"2",
            "name":"Pushpak-2",
            "description":"Test Desc 2",
            "date":"08-08-1993"
        },
        { 
            "_id":"3",
            "name":"Pushpak-3",
            "description":"Test Desc 3",
            "date":"21-08-1998"
        },
        { 
            "_id":"4",
            "name":"Pushpak-4",
            "description":"Test Desc 4",
            "date":"21-08-1996"
        }
    ]
    res.json(events);
})

//Api for special events - Phase 3 -11 
router.get('/special', (req, res) => {
    //Hard coding data - not taking it from mongodb collection
    let events = [
        { 
            "_id":"1",
            "name":"Pushpak-alpha-user-A",
            "description":"Test Desc 1",
            "date":"04-08-1993"
        },
        { 
            "_id":"2",
            "name":"Pushpak-2-B",
            "description":"Test Desc 2",
            "date":"08-08-1993"
        },
        { 
            "_id":"3",
            "name":"Pushpak-3-C",
            "description":"Test Desc 3",
            "date":"21-08-1998"
        },
        { 
            "_id":"4",
            "name":"Pushpak-4-D",
            "description":"Test Desc 4",
            "date":"21-08-1996"
        }
    ]
    res.json(events);
})
//no need to add slash at starting as router automatically adds it in url
/*router.get('api2',(req, res) => {
    res.send('Hi from Pushpak 8757856866!!!!!');
})*/

module.exports = router