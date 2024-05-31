const express=require('express')
const mongoose=require('mongoose')
const connection=require('../conn')
const userModel=require('../models/usermodel')
const router = express.Router();
const bodyParser=require('body-parser')
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken')
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


router.post('/signup', async (req, res) => {
  try {
      const { name, email, password } = req.body;
      const hashedPassword = bcrypt.hashSync(password, 10); // Change the variable name to indicate it's the hashed password
      
      const newUser = new userModel({
          name: name,
          email: email,
          password: hashedPassword // Ensure the field name matches the schema in userModel
      });
      
      await newUser.save();
      console.log(newUser);
      res.send("User is submitted successfully");
  } catch (error) {
      console.log(error);
      res.status(500).send("An error occurred while adding the user");
  }
});

router.get('/find',async(req,res)=>{
  const find= await userModel.find()
  res.json(find)
  // console.log(find)
})

router.put('/:id', async (req, res) => {
  try {
      const { name, email,password } = req.body;
      const updatedUser = await userModel.findByIdAndUpdate(
          req.params.id,
          { $set: { name, email,password } },
          { new: true }
      );
      if (!updatedUser) {
          return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
  }
});


router.get('/delete/:id',async(req,res)=>{
    const deleteuser= await userModel.findByIdAndDelete(req.params.id)
    if (!deleteuser) {
        return res.status(404).send("User not found");
      }
      else{
        
        res.send("successfully deleted");
      }
})

router.post('/login', async (req, res) => {
  try {
      const user = await userModel.findOne({ name: req.body.name }).exec();
      if (!user) {
          return res.status(401).json({ msg: 'User Not Found' });
      }
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
          return res.status(401).json({ msg: 'Password not matching' });
      }
      const token = jwt.sign(
          {
              name: user.name,
              email: user.email
          },
          'hello this is america',
          {
              expiresIn: "24h"
          }
      );
      res.status(200).json({
          name: user.name,
          email: user.email,
          token: token
      });
  } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Internal Server Error" });
  }
});

module.exports=router


/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////

