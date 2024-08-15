const cookieParser = require('cookie-parser');
const express = require('express')
const app = express();
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

// setting and reading cookie
// app.use(cookieParser());

// app.get('/', function(req,res){
//     res.cookie('name', 'harshita');
//     res.send('done');
// })

// app.get('/read', function(req,res){
//     console.log(req.cookies);
//     res.send('read page');
// })

// bcrypt.js
// Encryption
// app.get('/', function(req,res){
//     bcrypt.genSalt(10, function(err,salt){
//         bcrypt.hash('Your password', salt, function(err,hash){
//             console.log(hash);
//         });
//     });
// })

// Compare
// app.get('/', function(req,res){
//     bcrypt.compare('Your password', '$2b$10$vDFjyEUK7GumeyOBahGQouQlm/u/9Y.6eCxDzY5HZHi2LWuccN9Ii', function(err,result){
//         console.log(result);
//     })
// })

// JWT
app.use(cookieParser());
app.get('/', function(req,res){
    let token = jwt.sign({email: 'abbas@example.com'}, 'secret');
    res.cookie('token', token);
    res.send('done')
})

app.get("/read", function(req,res){
    console.log(req.cookies.token);
})

app.get('/read', function(req,res){
    let data = jwt.verify(req.cookies.token, 'secret');
    console.log(data);
})


app.listen(3000);