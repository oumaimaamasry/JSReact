const express=require("express")
const route=express.Router()
const bookControllers=require("../controllers/bookControllers")

route.get("/",bookControllers.getAllBooks)
route.get("/:id",bookControllers.getBookById)
route.delete("/:id",bookControllers.deleteBook)
route.post("/",bookControllers.createBook)
route.put("/:id",bookControllers.updateBook)

module.exports=route