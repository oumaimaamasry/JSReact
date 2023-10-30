const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    nom:String,
    prenom:String,
    email:String,
    mot_de_passe:String,
    image:String,
})
const User=mongoose.model("User",userSchema)
module.exports=User