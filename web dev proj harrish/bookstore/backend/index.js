import express, { response } from "express";
import {PORT,mongodburl} from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookMoedl.js";

const app=express();
app.use(express.json())
app.get('/',(request,response)=>{
    console.log(request)
    return response.status(234).send("welcome")
});

app.post('/books',async(request,response)=>{
    try{
        if(!request.body.title||!request.body.author||!request.body.publishYear){
            return response.status(400).send({message:'send all req fields title,author,publishyear'});
        }
        const newbook={
            title:request.body.title,
            author:request.body.author,
            publishYear:request.body.publishYear
        };
        const book =await Book.create(newbook);
        return response.status(201).send(book);
    }
    catch(error){
        console.log(error.message);
        response.status(500)


    }
});
app.get('/books',async(request,response)=>{


    try{
        const book=await Book.find({});
        return response.status(200).json(books);
    }
    catch(error){
        console.log(error.message);
        response.status(500)


    }
});


mongoose.connect(mongodburl)
.then(()=>{
    console.log("App connected to db")
    app.listen(PORT,()=>{
        console.log("listening")
    });
})
.catch((error)=>{
    console.log(error)
})