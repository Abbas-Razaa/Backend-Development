const express = require('express');
const app = express();
const userModel = require('./model/user');const userModel = require('./model/post');

app.get('/', function(req,res){
    res.send("hey")
})


app.get('/create', async function(req,res){
    let user = await userModel.create({
        username: 'abbas',
        age: '22',
        email: 'abbas@gmail.com'
    })
    res.send(user);
})

app.get('/post/create', async function(req,res){
    let post = await postModel.create({
        postdata: "hello",
        user: "users Id will Add here"
    })
    let user = await userModel.findOne({_id: "User ID will add here"});
    user.posts.push(post._id);
    await user.save();
    res.send({post, user});
})

app.listen(3000);