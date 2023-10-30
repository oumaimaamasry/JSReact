const user=require("../models/User")
const bcrypt=require("bcrypt")

const getAllUsers=async()=>{
     return await user.find()
}

const getUserById=async(idu)=>{
    return await user.findOne({_id:idu});
    
}

const deleteUser=async(idu)=>{
    return await user.deleteOne({_id:idu}); 
}

const createUser=async(us)=>{
    const salt=await bcrypt.genSalt()
    us.mot_de_passe=await bcrypt.hash(us.mot_de_passe,salt)
    return await user.create(us);
}
const updateUser=async(us)=>{
    return await user.findByIdAndUpdate(us._id,us);
}

module.exports={
    getAllUsers,
    getUserById,
    deleteUser,
    createUser,
    updateUser
}