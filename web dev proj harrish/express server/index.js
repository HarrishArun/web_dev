import express from "express";
const app=express();
const port=3000;
app.get("/",(req,res)=>{

    res.send("Hello");
});
app.get("/contact",(req,res)=>{
  
    res.send("Hello");
});
app.get("/harrish",(req,res)=>{
  
    res.send("Harrish");
});
app.listen(port,()=>{
    console.log("server running on 3000");
});
