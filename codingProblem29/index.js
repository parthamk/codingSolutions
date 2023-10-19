const express = require('express');
const fs = require('fs');
const app = express();

app.get('/blog/:id', (req, res)=>{
   fs.readFile('blog.html', 'utf8', (err, data)=>{
    if(err){
        res.sendStatus(404);
    }else{
        let result = data.replace('<title>','<title>'+ req.params.id+ ' - ');
        res.send(result);
    }
   });
});

app.listen(5000, ()=>{
    console.log('Server is running at port 5000');
})
