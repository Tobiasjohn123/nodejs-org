const fs = require('fs');

let tasks = JSON.parse(fs.readFileSync('tasks.json', 'utf8'));

const saveTasks = () => {
  fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 2));
};

const getAllTasks = (req, res) => {
    res.json(tasks);
}

const getOneTask = (req, res) => {
  const task = tasks.find(tas => tas.id === parseInt(req.params.id));
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }
  res.json(task);
};


const createTask = (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    description: req.body.description
  };
  tasks.push(newTask);
  saveTasks();
  res.json(newTask);
};

const updateTask = (req, res) => {
const task = tasks.find(tas => tas.id === parseInt(req.params.id));
    if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }
      task.title = req.body.title;
      task.description = req.body.description;
       saveTasks();
       res.json(task);
    }


const deleteTask = (req,res) =>{
        const task = tasks.find(tas => tas.id === parseInt(req.params.id));
    if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }
      tasks = tasks.filter(tas => tas.id !== parseInt(req.params.id));
       saveTasks(); 
      res.json({ message: 'Task deleted' });
}

module.exports = {
  getAllTasks,
  getOneTask,
  createTask,
  updateTask,
  deleteTask
};