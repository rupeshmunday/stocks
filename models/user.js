const { ListCollectionsCursor } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : {
        type : String
       },
    email: {
        type:String,
        required:true,
        unique:true
    },
    password: {
        type : String,
        required : true,
    }
})
let Model = new mongoose.model("User", userSchema);
module.exports = Model;