import express from "express";
import { Book } from "../models/bookMoedl.js";
const router=express.Router();

router.post('/',async(request,response)=>{
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
router.get('/',async(request,response)=>{
    try{
        const books=await Book.find({});
        return response.status(200).json(books);
    }
    catch(error){
        console.log(error.message);
        response.status(500)
    }
});//for getting all books


//:id is for getting books by id
router.get('/:id', async (request, response) => {
    try {
      const { id } = request.params;
      const book = await Book.findById(id);
  
      if (!book) {
        return response.status(404).json({ message: 'Book not found' });
      }
  
      return response.status(200).json(book);
    } catch (error) {
      console.error(error.message);
      return response.status(500).json({ message: 'Internal server error' });
    }
  });
  
//route for updating a book

router.put('/:id', async (request, response) => {
    try {
      const { title, author, publishYear } = request.body;
      
      if (!title || !author || !publishYear) {
        return response.status(400).json({ message: 'Send all required fields: title, author, publishYear' });
      }
  
      const { id } = request.params;
      const result = await Book.findByIdAndUpdate(id, request.body, { new: true });
  
      if (!result) {
        return response.status(404).json({ message: 'Book not found' });
      }
  
      return response.status(200).json({ message: 'Book updated successfully'});
    } catch (error) {
      console.error(error.message);
      return response.status(500).json({ message: 'Internal server error' });
    }
  });
  
//delete a book

router.delete('/:id',async(request,response)=>{


    try{
       const{id}=request.params;
       const result=await Book.findByIdAndDelete(id);
       if(!result){
        return response.status(404).json({message:'book not found'});
       }
       return response.status(200).send({message:'book deleted successfully'});
    }
    catch(error){
        console.log(error.message);
        response.status(500)


    }
});
export default router;