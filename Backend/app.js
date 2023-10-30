const express=require("express");
const app=express();
const bookRoutes=require("./routes/bookRoutes")
const categoryRoutes=require("./routes/categoryRoutes")
const userRoutes=require("./routes/userRoutes")
const mongoose=require("mongoose")
const loggingMiddelwares=require("./middelwares/middelWares")
const cors=require("cors")

require("dotenv").config()

mongoose.connect(process.env.MONGO_URI)
.then(result=>console.log("Connexion effectuée"))
.catch((error)=>console.log("connection non établie"))

app.use(cors())
app.use(express.json())

app.use(loggingMiddelwares.loggingParams)
app.use(loggingMiddelwares.loggingUrls)

app.use("/book",bookRoutes)
app.use("/user",userRoutes)
app.use("/category",categoryRoutes)

app.listen(9999,()=>{
    console.log("server is running...");
});
