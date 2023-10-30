const express=require("express")
const route=express.Router()
const userControllers=require("../controllers/userControllers")

route.get("/",userControllers.getAllUsers)
route.get("/:id",userControllers.getUserById)
route.delete("/:id",userControllers.deleteUser)
route.post("/",userControllers.createUser)
route.put("/:id",userControllers.updateUser)

module.exports=route