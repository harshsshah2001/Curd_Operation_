const express=require('express')
const app=express()
const mongoose=require('mongoose')
const connection=require('./conn')
const userModel=require('./models/usermodel')
const itemModel=require('./models/itemmodel')
const itemcontroller=require('./controllers/itemcontroller')
const controller=require('./controllers/usercontroller')

app.use('/api',controller)
app.use('/product',itemcontroller)

app.listen(4545,()=>{
    console.log("server is connected")
})



///////////////////
////////////////
///////////////////a
///////////////////////
///////////////////
//////////////////////
////////////////////
/////////////////






