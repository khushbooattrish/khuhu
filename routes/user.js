const express=require('express');
const router=express.Router();

const userController=require('../controller/userController');
   
 
router.get('/users',(req,res)=>{
        userController.getUser(req,res)
})

//localHost:3000/user/10
router.get('/user/:id',(req,res)=>{
        userController.getParticularUser(req,res)
})
module.exports=router;