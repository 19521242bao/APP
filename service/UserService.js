const uuid = require("uuid");

const querryBuilder = require("../config/databse");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { query } = require("express");

const JWT_SECRET_KEY = "mysecretkey";
class UserService{
    static async createUserService(req,res,next){
        try{
            let data = req.body;
            let insertData = {
                UserId: uuid.v4(),
                Username:data.username,
                Pass:bcrypt.hashSync(data.pass,10),
                Fullname:data.Fullname,
                UserAddress:data.UserAddress,
                Birth:data.Birth,
                Gmail:data.Gmail,
                Created_at: new Date()
            }
            await querryBuilder("Users").insert(insertData);
            return "Sign up success";
        }catch(e){
            console.log(e);
        }
    }
    static async loginService(req,res,next){
        try{
            let data = req.body;
            let user = await querryBuilder("users").select().where("username",data.username).first();
           
        if(!data.username ||!bcrypt.compareSync(data.pass,user.Pass)){
            return "Sai tên đăng nhập hoặc mật khẩu";
        }
        else{
            const token  = jwt.sign({id:user.UserId,fullname:user.Fullname},JWT_SECRET_KEY,{expiresIn:60*60*8});
            return token;
        }
        }catch(e){
            console.log(e);
        }
    }
    static async getUserInfoService(req,res,next){
        try{
            let param = req.params;
            let data = await querryBuilder("users").select().where("UserId",param.idUser).first();
            return data;

        }catch(e){
            console.log(e);
        }
    }
}
module.exports = UserService;