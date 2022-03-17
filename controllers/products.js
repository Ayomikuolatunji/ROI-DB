const ProductSchema=require("../models/product")

const getProducts=(req,res,next)=>{
    res.status(200).json(req.body)
}

const getSingleProduct=(req,res,next)=>{
    res.status(200).json(req.body)
}

const createProduct=async(req,res,next)=>{
    const products= await ProductSchema.create(req.body)
    res.status(201).json(products)
}

const updateProducts=(req,res,next)=>{
     res.status(200).send("update a product")
}

const deleteProduct=()=>{
    res.status(200).send("delete a product")
}
module.exports={getProducts,getSingleProduct,createProduct,updateProducts,deleteProduct}