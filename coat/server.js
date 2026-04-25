const express = require("express");
const app = require("./src/app");

app.use(express.json());

const notes = [];
//post
app.post("/notes",(req,res)=>{
    notes.push(req.body);
    res.send("note created");
    // console.log("note created");
});

//get
app.get("/notes",(req,res)=>{
    res.send(notes);
    // console.log(notes);
});

//delete
app.delete("/notes/:index",(req,res)=>{
    delete notes[req.params.index]
    res.send("notes deleted");
});

//patch
app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index].description = req.body.description;
    res.send("patched ")
});


//starting the server
app.listen(3000,()=>{
    console.log("hi");
});
