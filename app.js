
const express=require("express");
const app=express()
const port=5000;
const {router}=require("./routes/products");
const {connectFunc}=require("./db/connect")

require('dotenv').config()


app.use(express.json())
app.use("/api/v2/products",router)






const  Startserver=async(key)=>{
   await connectFunc(key).then(()=>{
    app.listen(port,()=>{
        console.log(`app is running on port ${port}`)
    });
    console.log("loaded")
    })
    .catch((err)=>{
        console.log("failed")
    })
}
Startserver(process.env.DBKEY) 



