import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import taskRoute from "./routes/task.js";

import cors from "cors";

const app = express();
dotenv.config();

app.use(cors({ origin: 'http://localhost:3000' }));

const connect = async () => {
try { 
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB")
} catch(error) {
   throw error;
}
}
mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected.")
})
mongoose.connection.on("connected", () => {
    console.log("MongoDB connected.")
})

//Middle wares -> app.use()
app.use(express.json());
app.use("/api/tasks", taskRoute);


//error handeling middle-ware
app.use((err, req, res, next) => {
    const errStatus = err.status || 500;
    const errMessage = err.message || "Something went wrong!";
    return res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMessage,
        stack: err.stack
    });
});

const port = process.env.PORT || 8800

app.listen(port, ()=> {
    connect();
    console.log("Connected to Backend on " + port + "!");
})