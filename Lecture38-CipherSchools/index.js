const express = require("express");
require("./Mongoose");
const Task = require("./models/Task");
const app = express();

const port = 8090;

app.get("/",(req ,res)=>{
    res.send("HomePage");
});

app.get("/add",(req,res)=>{
    let {a:firstNumber, b:secondNumber} = req.query;
    let sum = parseInt(firstNumber) + parseInt(secondNumber);
    res.send({sum});
});


app.post("/add-task",async(req,res)=>{
    const task = new Task({title:"Test Task",description:"Test Task desc"});
    await task.save();
    return res.status(201).send({message:"Saved"});
})

app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
});