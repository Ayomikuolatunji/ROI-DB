const express=require("express");
const app=express()
const port=5000;
const {router}=require("./routes/products")


app.use(express.json())
app.use("/api/v2/products",router)







app.listen(port,()=>{
    console.log(`app is running on port ${port}`)
});

