const book=require("../models/Book")
const getAllBooks=async()=>{
     return await book.find().populate("category");
}
const getBookById=async(idB)=>{
    return await book.findOne({_id:idB}).populate("category");   
}
const deleteBook=async(idB)=>{
    return await book.deleteOne({_id:idB}); 
}
const searchBook=async(bk)=>{
    return await book.find(bk);
}
const createBook=async(bk)=>{
    return await book.create(bk);
}
const updateBook=async(bk)=>{
    return await book.findByIdAndUpdate(bk._id,bk);
}
module.exports={
    getAllBooks,getBookById,createBook,updateBook,deleteBook,searchBook
}