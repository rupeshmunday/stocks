const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
})
const Model=new mongoose.model("userlogin",userSchema)
module.exports=Model;