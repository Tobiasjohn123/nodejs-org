const express = require('express');
const app = express();
const fs = require('fs');
app.use(express.json());

let tasks = [];

app.get('/',(req,res)=>{
    res.send('Task api runnning');
});

app.get('/tasks',(req,res)=>{
    // res.send('task reading');
    res.json(tasks);
});

app.get('/tasks/:id', (req, res) => {
  const task = tasks.find(tas => tas.id === parseInt(req.params.id));
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }
  res.json(task);
});

 
 

app.post('/tasks',(req,res)=>{
    
   const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        description: req.body.description

      
    }
     tasks.push(newTask);
    res.json(newTask);
   
    
})
app.put('/tasks/:id',(req,res)=>{
const task = tasks.find(tas => tas.id === parseInt(req.params.id));
    if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }
      task.title = req.body.title;
      task.description = req.body.description;
      res.json(task);
})
app.delete('/tasks/:id',(req,res)=>{
    const task = tasks.find(tas => tas.id === parseInt(req.params.id));
    if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }
      tasks = tasks.filter(tas => tas.id !== parseInt(req.params.id));
      res.json({ message: 'Task deleted' });
})
app.listen(3000, ( )=>{
    console.log("server runnign on port 3000")
})