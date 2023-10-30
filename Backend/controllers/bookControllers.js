const bookServices=require("../services/bookServices")
const getAllBooks=async(req,res)=>{
    try{
    const result= await bookServices.getAllBooks();
    res.status(200).json(result)
    }
    catch(error){
        res.status(500).json({err:error})
    }
}
const searchBook=async(req,res)=>{
    try{
    const result= await bookServices.searchBook(req.body);
    res.status(200).json(result)
    }
    catch(error){
        res.status(500).json({err:error})
    }
}
const getBookById=async(req,res)=>{
    try{
        const result=await bookServices.getBookById(req.params.id);
        res.status(200).json(result);
    }catch(error){
        res.status(500).json({err:"book not found"})
    } 
}
const deleteBook=async(req,res)=>{
    try{
        const result=await bookServices.deleteBook(req.params.id);
        res.status(200).json(result);
    }catch(error){
        res.status(500).json({err:"book not found"})
    }
}
const createBook=async(req,res)=>{
    try{
        const result=await bookServices.createBook(req.body);
        res.status(200).json(result);
    }catch(error){
        res.status(500).json({err:"Book not created"})
    }
}
const updateBook=async(req,res)=>{
    try{
        const result=await bookServices.updateBook(req.body)
        res.status(201).json(result)
    }catch(error){
        res.status(500).json({err:"Book not modified"})
    }
}
module.exports={
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook,
    searchBook
}