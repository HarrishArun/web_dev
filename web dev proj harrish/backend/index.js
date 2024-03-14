import express from 'express';
import {dirname} from "path";
import {fileURLToPath} from"url";
import bodyparser from "body-parser";

const app=express();

app.use(bodyparser.urlencoded({extended:true}))

const __dirname=dirname(fileURLToPath(import.meta.url));


const port=5000;
var fullname="";

function nameGenerator(req,res,next){
  fullname=req.body["street"]+req.body["pet"];
    next();
}
app.use(nameGenerator);


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")});


app.post("/submit",(req,res)=>{
    res.send(`<h1>${fullname}</h1>`);
})    

app.listen(port,()=>{
    console.log("Server started");
});