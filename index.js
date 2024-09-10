const express=require('express');
const app=express();
const user=require('./routes/user')
app.use(user)
app.listen(3000,(err)=>{
    if(err){
        console.log("error")
    }
    else{
        console.log("server is runing on 3000");
    }
})