import express from "express";
import { createTask, updateTask, deleteTask, getTask, getAllTask, getCompletedTask, getIncompleteTask } from "../controllers/task.js";


const router = express.Router();


//create
router.post("/", createTask);
//update
router.patch("/:id", updateTask);
//delete
router.delete("/:id",deleteTask);
//get all tasks
router.get("/", getAllTask);

//get completed tasks
router.get("/complete", getCompletedTask);

//get Incomplete tasks
router.get("/incomplete", getIncompleteTask);


export default router;