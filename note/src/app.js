//  iss file ka kam

// server create karna

// server ko config karna (middleware n stuff)

const express = require("express");

const app = express(); //server ki creation yaha hui hai

app.use(express.json());

const notes = [

    //{
    //       title: "test title 1",
    //      description: "test description 1"
    //}
];
//creating endpoint
    // post method
    app.post("/notes" , (req,res)=>{
        notes.push(req.body);
        res.send("note created")
        // console.log(notes);
    })

    //get method
    app.get("/notes",(req,res)=>{
        res.send(notes)
    });

    //delete method
    //params
    app.delete("/notes/:index",(req,res)=>{
        delete notes[req.params.index]
        res.send("note deleted")
    })

    //patch medthod

    app.patch("/notes/:index",(req,res)=>{

        notes[req.params.index].description = req.body.description;

        res.send("note updated")

    })


    // exporting this app.jsc
module.exports = app; // export kardiya

