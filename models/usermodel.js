const mongoose=require('mongoose')
const connection=require('../conn')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

const userModel=mongoose.model('UserData',userSchema)
module.exports=userModel



