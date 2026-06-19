const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Task ApI running');
});

app.get('/tasks',(req,res)=>{
    res.send("get all task")
})

app.listen(3000, ( )=>{
    console.log("server runnign on port 3000")
})