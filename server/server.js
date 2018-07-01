var express = require('express')
var bodyParser = require('body-parser')
const api = require('./routes/api')

const port = 3000

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

app.get('/', function(req, res){
    res.send('Hello from server.js file: Here I have set the web server! :)');
})

app.use('/api',api)

app.listen(port, function(){
    console.log('Web Server started on port : ',port)
})