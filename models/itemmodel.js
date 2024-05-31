const mongoose=require('mongoose')
const connection=require('../conn')

const itemsSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    mobile:{
        type:Number,
        require:true
    }
})

const itemModel=mongoose.model('item',itemsSchema)
module.exports=itemModel





