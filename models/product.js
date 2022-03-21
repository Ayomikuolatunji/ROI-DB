const {Schema,model}= require('mongoose');

const ProductSchema = new Schema({
    product_name: {
     type:String,
     required:[true, "please provide product name"],
     trim:true,
     maxlength:[20, "name cant be longer than 20"]
    },
    product_type: {
        type:String,
        required:[true, "please provide product type"],
        trim:true,
        maxlength:[10, "name cant be longer than 20"]
       },
    desc: {
        type:String,
        trim:true,
        maxlength:[400, "product description cant be longer than 20"]
       },
    imgUrl: {
        type:String,
        required:[true, "please provide product image"],
        trim:true,
       },
    loaction:{
        type:String,
        trim:true,
        maxlength:[400, "location description should not be more than 100 characters"]
    }

  });

  module.exports=model("store", ProductSchema)