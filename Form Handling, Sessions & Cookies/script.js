// session manages login information, otherwise we have to login everytime we do stuff e.g like,comment etc.

// when we login server gives us string, and then what we want to do we give data with string so that server will do our task.

// cookie - data saved in browser mainly used in authentication

// session - connection between server and user person

// express.js is framework
// framework - which will have some workflow
// library - no workflow you have got tools just use it.

const express = require('express')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

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