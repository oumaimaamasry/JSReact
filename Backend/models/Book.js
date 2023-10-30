const mongoose=require("mongoose")
const Category = require("./Category")
const bookSchema=new mongoose.Schema({
    category:{
        type:mongoose.Types.ObjectId,
        ref:"Category"
    },
    titre:String,
    description:String,
    isbn:String,
    auteur:String,
    editeur:String,
    date_edition:Date,
    image:String,
})

const Book=mongoose.model("Book",bookSchema)
module.exports=Book