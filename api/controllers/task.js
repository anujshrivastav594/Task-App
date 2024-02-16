import Task from "../models/Task.js";

// create Task

export const createTask = async (req, res, next) => {

    const newTask = new Task(req.body)
    try {
      const savedTask = await newTask.save();
      res.status(200).json(savedTask)
    }catch(err) {
      next(err);
    }
}
// update Task

export const updateTask = async (req, res, next) => {

    try {
      const updatedTask = await Task.findByIdAndUpdate(req.params.id, {$set: { status: req.body.status }}, {new: true})
      res.status(200).json(updatedTask)
    }catch(err) {
      next(err);
    }
  }
// delete Task

export const deleteTask = async (req, res, next) => {
   
      try {
        await Task.findByIdAndDelete(req.params.id)
        res.status(200).json("Task Deleted")
      }catch(err) {
     
      next(err);
      }
    }

// get Task

export const getTask = async (req, res, next) => {

    try {
      const Task = await Task.findById(req.params.id)
      res.status(200).json(Task)
    }catch(err) {
    next(err);
    }
  }
// get all Task

export const getAllTask = async (req, res, next) => {
    try {
      const Tasks = await Task.find();
       res.status(200).json(Tasks);
    }catch(err) {
    next(err);
    }
  }


// API endpoint for getting completed tasks
export const getCompletedTask = async (req, res, next) => {
  try {
    const completedTasks = await Task.find({ status: 'completed' });
    res.status(200).json(completedTasks);
  } catch (err) {
    next(err);
  }
};

// API endpoint for getting incomplete tasks
export const getIncompleteTask = async (req, res, next) => {
  try {
    const incompleteTasks = await Task.find({ status: 'incomplete' });
    res.status(200).json(incompleteTasks);
  } catch (err) {
    next(err);
  }
};
 
