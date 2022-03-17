const {Schema,model}= require('mongoose');

const ProductSchema = new Schema({
    product_name: String,
    product_type:String,
    desc:String,
    imgUrl:String,

  });

  module.exports=model("store", ProductSchema)