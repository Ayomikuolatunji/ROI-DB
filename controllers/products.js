

const getProducts=(req,res,next)=>{
    res.status(200).send("all item")
}

const getSingleProduct=(req,res,next)=>{
    res.status(200).send("good")
}

const postProduct=(req,res,next)=>{
    res.status(201).send("pots a single poroducts")
}

const updateProducts=(req,res,next)=>{
     res.status(200).send("update a product")
}

const deleteProduct=()=>{
    res.status(200).send("delete a product")
}
module.exports={getProducts,getSingleProduct,postProduct,updateProducts,deleteProduct}