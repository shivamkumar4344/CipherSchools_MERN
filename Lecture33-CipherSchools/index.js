const express = require("express");

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

app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
});