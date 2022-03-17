const ProductSchema=require("../models/product")

const getProducts=async(req,res,next)=>{
    try {
        const products=await ProductSchema.find({});
        res.status(200).json(products)
    } catch (error) {
        throw new Error("no products found")
    }
}

const getSingleProduct=async(req,res,next)=>{
    try {
        const {id:prodId}=req.params;
        const singleProd=await ProductSchema.findOne({_id:prodId});
        if(!singleProd){
            return res.status(404).json({errMsg:`No item found with the ${prodId}`})
        }
        res.status(200).json(singleProd)
    } catch (error) {
        res.status(500).json({errMsg:error})
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

const updateProducts=async(req,res,next)=>{
    try {
        
    } catch (error) {
        res.status(500).json({errMsg:error})
    }
     res.status(200).send("update a product")
}

const deleteProduct=async(req,res,next)=>{
    try {
        const {id:prodId}=req.params;
        const deleteProd=await ProductSchema.findOneAndDelete({_id:prodId});
        if(!deleteProd){
            return res.status(404).json({errMsg:`No item found with the ${prodId}`})
        }
        res.status(200).json(deleteProd)
    } catch (error) {
        res.status(500).json({errMsg:error})
    }
    res.status(200).send("delete a product")
}
module.exports={getProducts,getSingleProduct,createProduct,updateProducts,deleteProduct}