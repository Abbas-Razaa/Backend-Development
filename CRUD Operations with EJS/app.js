const express = require('express');
const app = express();
const UserModel = require("./model/user");
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req,res){
    res.render('index');
})

app.get('/read', async function(req,res){
    let allusers = await UserModel.find();
    res.render('read', {users: allusers});
})

app.get('/edit/:userid', async function(req,res){
    let allusers = await UserModel.find({_id: req.params.userid});
    res.render('edit', {user});
})

app.post('/update/:userid', async function(req,res){
    let {image, name, email} = req.body;
    let allusers = await UserModel.findOneAndUpdate({_id: req.params.userid}, {image, name, email}, {new: true});
    res.redirect('/');
})

app.get('/delet/:id', async function(req,res){
    let allusers = await UserModel.findOneAndDelete({_id: req.params.id});
    res.redirect('/read');
})

app.get('/create', function(req,res){
    let {name, email, image} = req.body;

    let createdUser = UserModel.create({
        name,
        email,
        image
    })
    res.redirect("/read");
})

app.listen(3000);