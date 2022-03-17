const ProductSchema=require("../models/product")

const getProducts=async(req,res,next)=>{
    try {
        const products=await ProductSchema.find({});
        res.status(200).json(products)
    } catch (error) {
        throw new Error("no products found")
    }
}

const getSingleProduct=(req,res,next)=>{
    try {
        
    } catch (error) {
        
    }
}

const createProduct=async(req,res,next)=>{
    try {
        const products= await ProductSchema.create(req.body)
        res.status(201).json(products) 
    } catch (error) {
        res.status(500).json({errMsg:error})
    }
}

const updateProducts=(req,res,next)=>{
     res.status(200).send("update a product")
}

const deleteProduct=()=>{
    res.status(200).send("delete a product")
}
module.exports={getProducts,getSingleProduct,createProduct,updateProducts,deleteProduct}