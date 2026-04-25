const express = require("express");
//importing app.js
const app = require("./src/app.js");

//using middleware
app.use(express.json());
//addition
app.get("/sum", (req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    const sum = a+b;
    res.send(sum);
})
//subtraction
app.get("/sub", (req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    const sum = a-b;
    res.send(sum);
})
//product
app.get("/pro", (req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    const sum = a*b;
    res.send(sum);
})
//divide
app.get("/div", (req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    const sum = a/b;
    res.send(sum);
})

//starting server
app.listen(3000, ()=>{
    console.log("everything works fine");
});