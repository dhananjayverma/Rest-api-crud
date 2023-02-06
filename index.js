const express=require("express");
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const User=require("./model/user.js");
const app=express();
app.use(express.json())
const secretkey="secretkey12323444444525689";
mongoose.connect('mongodb+srv://my:jwt123@cluster0.5zb5hem.mongodb.net/?retryWrites=true&w=majority')
app.post('/login',async(req,res)=>{
    const user=await User.findOne({
        email:req.body.email
    })
    if(!user)return{status:"error",error:"error in login"}
    const isPassword=await bcrypt.compare(
        req.body.password,
        user.password
    )
    if(isPassword){
        const token=jwt.sign({email:user.email},secretkey)
    return res.json({
        status:"ok",
        user:token
    })
}else{
    return res.json({status:"error",user:false})
}
})
app.listen(3000,()=>{
    console.log("server listning on port http://localhost:3000")
})
        