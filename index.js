
require('dotenv').config();
const express = require('express')





app.get('/users',  (req, res) => {
   const users = [
       {
           id: 1,
           name: 'Fernan'
       },
       {
        id: 2,
        name: 'Marta'
    },
   ] 
    res.json(users);
});
app.post('/users',  (req, res) => {
    console.log(`POST with body: ${req.body}`);
    console.log(req);
    const user = req.body;
    user.id = 86546;

    const result = {
        message: 'User created',
        user
    }
    res.status(201).json(result);
});
app.put('/users/:id',  (req, res) => {
    const { id } = req.params;
    const user = req.body;

    user.id = id;
    const result = {
        message: 'User updated',
        user
    }
    res.json(result);
});
app.patch('/users',  (req, res) => {
    const result = {
        message: 'User created with patch'
    }
    res.json(result);
});
app.delete('/users/:id',  (req, res) => {
    const { id } = req.params;
    const result = {
        message: `User with id: ${id} deleted`
    }
    res.json(result);
});

