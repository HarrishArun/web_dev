import express, { response } from "express";
import {PORT,mongodburl} from "./config.js";
import mongoose from "mongoose";

import booksRoute from './routes/booksRoute.js'
import cors from 'cors';

const app=express();
app.use(express.json());
//moddleware to handle cors policy

//option1:applw all orgins with default of cors app.use(cors())

app.use(cors());
//option 2 allow custom orgins

// app.use((
//     cors({
//         origin:'http://localhost:300',
//         methods:['GET','POST','PUT','DELETE'],
//         allowedHeaders:['Content-Type']
//     })
// ))
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
