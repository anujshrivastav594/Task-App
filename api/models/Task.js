import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
 
  title: {
    type: String,
    required: true,
  },
  
  content: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    default: "incomplete",
  },

});

export default mongoose.model("Task", taskSchema)
