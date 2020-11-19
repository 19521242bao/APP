'use strict'
const queryBuilder =require('../config/database');
const uuid=require('uuid');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const JWT_SECRET_KEY = 'WEB';
class  UserService{
    static async createUserService(req,res,next){
        try{
            console.log(222);
            let data=req.body; 
            console.log(data)
            let insertData={
                userid: uuid.v4(),
                fullname: data.fullname,
                birth:data.birth,
                email:data.email,
                gender:data.gender,
                Created_at:new Date(),
                password:bcrypt.hashSync(data.password,10),
            }
            await queryBuilder("user").insert(insertData);
            return true
        }catch(e) {
        
            console.log(e);
    }
}
    
    static async loginService (req,res,next){
        try{
            let params = req.body;
            console.log(params);
            let email = params.email;
            let password = params.password;
            let user = await queryBuilder("user").where("email",email).first();
          
            if(!email || !bcrypt.compareSync(password,user.password)){
                return false
            }
            else {
                let token = jwt.sign({id:user.userId,fullname:user.fullname},JWT_SECRET_KEY,{expiresIn:60*60*8});
                return token;
            }
        }catch(e){
            console.log(e);
        }
    }
}
module.exports = UserService;