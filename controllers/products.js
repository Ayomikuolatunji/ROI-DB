const ProductSchema=require("../models/product")
const asyncWrapper=require("../util/asyncWrapper")


const getProducts=async(req,res,next)=>{
    try {
        const products=await ProductSchema.find({});
        res.status(200).json({status:"success", data:{products, nbHits:products.length}})
    } catch (error) {
        res.status(500).json({errMsg:error})
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


const updateProducts=async(req,res,next)=>{
    try {
        const {id:prodId}=req.params;
        const newProd=await ProductSchema.findOneAndUpdate({_id:prodId},req.body,{
            new:true,
            runValidators:true
        })
        if(!newProd){
            return res.status(404).json({errMsg:`No item found with the ${prodId}`})
        }
        res.status(200).json(newProd)
    } catch (error) {
        res.status(500).json({errMsg:error})
    }
    
}


module.exports={getProducts,getSingleProduct,createProduct,updateProducts,deleteProduct}