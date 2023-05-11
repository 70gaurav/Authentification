import { Schema, model } from "mongoose";

const formSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    createDate:{
        type:Date,
        default:Date.now
    },
    updateDate:{
        type:Date,
        default:Date.now
    }
})

const Form  = model("Form" , formSchema)
export default Form