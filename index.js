
require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/', function (req, res){
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
app.post('/', function (req, res){
    res.end('Hola mundo')
});
app.put('/', function (req, res){
    res.end('Hola mundo')
});
app.patch('/', function (req, res){
    res.end('Hola mundo')
});
app.delete('/', function (req, res){
    res.end('Hola mundo')
});

app.listen(port, () => {
    console.log(`############ App started. Port: ${port} ##########`);
});