const express = require('express')
const app = express();

const userModel = require('./usermodel')

app.get('/', (req,res) => {
    res.send('hey');
})

app.get('/create', async (req,res) => {
    let createduser = await userModel.create({
        name: "Abbas",
        username: "abbas",
        email: "abbas@gmail.com",
    })
    res.send(createduser);
})

app.get('/read', async (req,res) => {
    let users = await userModel.find({username: "abbas"}); //findone ->object, find -> array
    res.send(users);
})

app.get('/update', async (req,res) => {
    let updateuser = await userModel.findOneAndUpdate({username: "abbas"}, {name: 'abbas raza'}, {new: true})
    res.send(updateduser);
})


app.get('/delete', async (req,res) => {
    let users = await userModel.findOneAndDelete({username: "abbas"});
    res.send(users);
})

app.listen(3000);