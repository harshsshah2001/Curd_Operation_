const mongoose=require('mongoose');
const connection=mongoose.connect("mongodb://127.0.0.1:27017/mani").then(()=>{
    console.log("Connection created Successfull")
}).catch((error)=>{
    console.log("Connection Created Not Successfull")
})
module.exports=connection