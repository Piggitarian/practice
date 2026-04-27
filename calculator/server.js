const app = require("./src/app");
const express = require("express");
const path = require("path");
app.use(express.json());

app.get("/",(req,res)=>{
    res.sendFile(path.join( __dirname ,"/index.html"));
});
//creating a post request
app.post("/add",(req,res)=>{
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    const sum = a + b ;

    res.json({
        ans: sum
     });
});
app.post("/sub",(req,res)=>{
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    const sub = a - b ;

    res.json({
        ans: sub
     });
});
app.post("/multiply",(req,res)=>{
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    const multiply = a * b ;

    res.json({
        ans: multiply
     });
});
app.post("/divide",(req,res)=>{
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    const divide = a / b ;

    res.json({
        ans: divide
     });
});

// here we are creating a get request
// // app.get("/add/:a/:b",(req,res)=>{
// //     const a = parseInt(req.params.a);
// //     const b = parseInt(req.params.b);
// //     const sum = a +b ;

// //     res.json({
// //         ans: sum
// //      });
// // });
// // app.get("/sub/:a/:b",(req,res)=>{
// //     const a = parseInt(req.params.a);
// //     const b = parseInt(req.params.b);
// //     const sub = a - b ;

// //     res.json({
// //         ans: sub
// //      });
// // });
// // app.get("/multiply/:a/:b",(req,res)=>{
// //     const a = parseInt(req.params.a);
// //     const b = parseInt(req.params.b);
// //     const multiply = a * b ;

// //     res.json({
// //         ans: multiply
// //      });
// // });
// // app.get("/divide/:a/:b",(req,res)=>{
// //     const a = parseInt(req.params.a);
// //     const b = parseInt(req.params.b);
// //     const divide = a/b ;

// //     res.json({
// //         ans: divide
// //      });
// // });
// all the get requests 

app.listen(3000,()=>{
    console.log("works fine");
});
