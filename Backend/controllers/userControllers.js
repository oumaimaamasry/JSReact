const userServices=require("../services/userServices")
const getAllUsers=async(req,res)=>{
    try{
    const result= await userServices.getAllUsers();
    res.status(200).json(result)
    }
    catch(error){
        console.log(error)
        res.status(500).json({err:error})
    }
}
const getUserById=async(req,res)=>{
    try{
        const result=await userServices.getUserById(req.params.id);
        res.status(200).json(result);
    }catch(error){
        res.status(500).json({err:"user not found"})
    } 
}
const deleteUser=async(req,res)=>{
    try{
        const result=await userServices.deleteUser(req.params.id);
        res.status(200).json(result);
    }catch(error){
        res.status(500).json({err:"user not found"})
    }
}
const createUser=async(req,res)=>{
    try{
        const result=await userServices.createUser(req.body);
        res.status(200).json(result);
    }catch(error){
        res.status(500).json({err:"user not created"})
    }
}
const updateUser=async(req,res)=>{
    try{
        const result=await userServices.updateUser(req.body)
        res.status(201).json(result)
    }catch(error){
        res.status(500).json({err:"user not modified"})
    }
}
module.exports={
    getAllUsers,
    getUserById,
    deleteUser,
    updateUser,
    createUser
}