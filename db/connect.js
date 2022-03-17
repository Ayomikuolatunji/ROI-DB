
const {connect}= require('mongoose');


const connectFunc=(KEY)=>{
    return connect(KEY,{
        useNewUrlParser:true
    })
}

module.exports={connectFunc}