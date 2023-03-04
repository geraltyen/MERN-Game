const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    fname:{type:String, required:true, trim:true},
    lname:{type:String, required:true, trim:true},
    email:{type:String, required:true, trim:true},
    password:{type:String, required:true, trim:true},
    score:{type:Number, required:true}
})

const UserModel = mongoose.model("user", userSchema);

module.exports = {UserModel};