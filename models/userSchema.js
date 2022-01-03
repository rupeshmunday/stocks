const { ListCollectionsCursor } = require("mongodb");
const mongoose=require("mongoose");
var passportLocalMongoose = require('passport-local-mongoose')

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type : String,
        required : true,
    },
    stocks:{
        type: Array,
        required: false
    }
})
userSchema.plugin(passportLocalMongoose);
const Model=new mongoose.model("User",userSchema);
module.exports=Model;