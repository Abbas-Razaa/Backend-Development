// express.js is framework
// framework - which will have some workflow
// library - no workflow you have got tools just use it.

const express = require('express')
const app = express();

app.get('/', function(req,res){
    res.send('Hello from server')
})

app.use(function(req,res,next){
    console.log('middleware')
    next();
})


app.use(function(req,res,next){
    console.log('middleware again')
    next();
})

app.get('/about', function(req,res){
    res.send('Hello from profile')
})

app.get('/profile', function(req,res,next){
    return next(new Error('something went wrong')); //prints on console
})

app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status((500).send('something broken!')) // goes on frontend
})

app.listen(3000);