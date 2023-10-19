const express = require('express');
const app = express();

app.get('/greet', (req, res)=>{
    res.send(`<h1>Hello there, Welcome!</h1>`);
});

app.get('/message', (req, res)=>{
    res.send('I am learning Backend');
});

app.get('/intro', (req, res)=>{
    res.send('Hi, I am learning full-stack web development at Internshala');
});

app.get('/greet/:name', (req, res)=>{
    const { name } = req.params;
    res.send(`<h1>Hello ${name}, Welcome!</h1>`);
});

app.listen(5000, ()=>{
    console.log('Server is running on port 5000');
})
