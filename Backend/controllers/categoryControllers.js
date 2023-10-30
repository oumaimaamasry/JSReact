const catServices=require("../services/categoryServices")


const getAllCategories=async(req,res)=>{
    try{
    const result= await catServices.getAllCategories();
    res.status(200).json(result)
    }
    catch(error){
        console.log('ghjk')
        console.log(catServices.getAllCategories())
        res.status(500).json({err:error})
    }
}
const getCategoryById=async(req,res)=>{
    try{
        const result=await catServices.getCategoryById(req.params.id);
        res.status(200).json(result);
    }catch(error){
        res.status(500).json({err:"category not found"})
    } 
}
const deleteCategory=async(req,res)=>{
    try{
        const result=await catServices.deleteCategory(req.params.id);
        res.status(200).json(result);
    }catch(error){
        res.status(500).json({err:"category not found"})
    }
}
const createCategory=async(req,res)=>{
    try{
        const result=await catServices.createCategory(req.body);
        res.status(200).json(result);
    }catch(error){
        res.status(500).json({err:"category not created"})
    }
}
const updateCategory=async(req,res)=>{
    try{
        const result=await catServices.updateCategory(req.body)
        res.status(201).json(result)
    }catch(error){
        res.status(500).json({err:"category not modified"})
    }
}
module.exports={
   getAllCategories,
   getCategoryById,
   deleteCategory,
   updateCategory,
   createCategory
}