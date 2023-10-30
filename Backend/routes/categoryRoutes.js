const express=require("express")
const route=express.Router()
const catControllers=require("../controllers/categoryControllers")

route.get("/",catControllers.getAllCategories)
route.get("/:id",catControllers.getCategoryById)
route.delete("/:id",catControllers.deleteCategory)
route.post("/",catControllers.createCategory)
route.put("/:id",catControllers.updateCategory)

module.exports=route