const cat=require("../models/Category")

const getAllCategories=async()=>{
     return await cat.find();
}

const getCategoryById=async(idc)=>{
    return await cat.findOne({_id:idc});
    
}

const deleteCategory=async(idc)=>{
    return await cat.deleteOne({_id:idc}); 
}

const createCategory=async(ct)=>{
    return await cat.create(ct);
}
const updateCategory=async(ct)=>{
    return await cat.findByIdAndUpdate(ct._id,ct);
}

module.exports={
    getAllCategories,
    getCategoryById,
    deleteCategory,
    updateCategory,
    createCategory
}