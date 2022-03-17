

const getProducts=(req,res,next)=>{
    res.status(200).json(req.body)
}

const getSingleProduct=(req,res,next)=>{
    res.status(200).json(req.body)
}

const postProduct=(req,res,next)=>{
    res.status(201).json(req.body)
}

const updateProducts=(req,res,next)=>{
     res.status(200).send("update a product")
}

const deleteProduct=()=>{
    res.status(200).send("delete a product")
}
module.exports={getProducts,getSingleProduct,postProduct,updateProducts,deleteProduct}