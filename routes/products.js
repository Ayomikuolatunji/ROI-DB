const express=require("express");

const router=express.Router();


const {getProducts,getSingleProduct,createProduct,updateProducts,deleteProduct}=require("../controllers/products")


router.get("/",getProducts)
router.post("/",createProduct);
router.get("/:id",getSingleProduct)
router.patch("/:id",updateProducts)
router.delete("/:id",deleteProduct)


module.exports={router}