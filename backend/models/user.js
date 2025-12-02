import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    user:{type:String, required:true},
    mail:{type:String,required:true, unique:true},
    password:{type:String, required:true, minlength:8},

})

const user = mongoose.model("User",userSchema)
export default user