// express.js is framework
// framework - which will have some workflow
// library - no workflow you have got tools just use it.

const express = require('express')
const app = express();

app.get('/', function(req,res){
    res.send('Hello from server')
})

app.get('/profile', function(req,res){
    res.send('Hello from profile')
})

app.listen(3000);