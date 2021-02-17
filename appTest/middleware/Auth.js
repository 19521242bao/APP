'use strict'
const jwt=require("jsonwebtoken");
const JWT_SECRET_KEY="mysecretkey"
module.exports=async(req,res,next)=>{
    let token = req.header("Authorization").replace('Bearer ','');
    let checktoken=jwt.verify(token,JWT_SECRET_KEY);
    try{
        if(!checktoken)
            res.status(200).json("you nee account to  use");
        else{
            next();
        }
    }catch(e){
        res.status(200).json("you nee account to  use");
    }
}