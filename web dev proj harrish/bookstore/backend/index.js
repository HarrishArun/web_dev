import express, { response } from "express";
import {PORT,mongodburl} from "./config.js";
import mongoose from "mongoose";

import booksRoute from './routes/booksRoute.js'

const app=express();
app.use(express.json())
app.get('/',(request,response)=>{
    console.log(request)
    return response.status(234).send("welcome")
});


app.use('/books',booksRoute);
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
