const express=require("express");
const app=express()
const {router}=require("./routes/products");
const {connectFunc}=require("./db/connect");
require('dotenv').config();
const {notFound}=require("./middleware/404")



// middleware functions
app.use(express.json())
app.use("/api/v2/products",router)
app.use(notFound)




const port=process.env.PORT || 5000;

const  Startserver=async(key)=>{
   await connectFunc(key).then(()=>{
    app.listen(port,()=>{
        console.log(`app is running on port ${port}`)
    });
    console.log("database connnected")
    })
    .catch((err)=>{
        console.log("fail to connect to database")
    })
}
Startserver(process.env.DBKEY) 



