'use strict'
const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = "mysecretkey"
module.exports = async (req,res,next) =>{
    let token = req.header("Authorization").replace('Bearer ','');
    let checkToken = jwt.verify(token,JWT_SECRET_KEY);
    console.log(checkToken);
    try{
         if(!checkToken){
           res.status(200).json("You need account to use this function");
        }
        else{
            next();
        }
    }catch(e){
        console.log(e);
        res.status(200).json("You need account to use this function");
    }
}
     
    
       