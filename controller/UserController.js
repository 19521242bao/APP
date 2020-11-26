'use strict'
const UserService = require('../service/UserService')
class UserController{
    static async createUserController(req, res, next){
        try{
            let data=await UserService.createUserService(req);
            console.log(1);
            if(data)
                res.render('../views/SignIn',{message:"Dang ki tai khoan thanh cong"});
            else
                res.render('../views/SignUp',{message:"Dang ki chua thanh cong"});
        }catch(e){
            res.status(200).json({
                status: 'Failed',
                error: e,
                message:"create user failed" 
            })
        }
    }
    static async loginController(req,res,next){
        try{
            let result=await UserService.loginService(req);
            if(!result)
                res.render('../views/SignIn',{message:"Mat khau hoac tai khoan khong dung moi nhap lai"});
            else
                {
                    res.cookie("jwt",result,{expires: new Date(Date.now + 24*60*60) , httpOnly:true})
                    res.redirect("/homepage");
                }
        }catch(e){
            res.status(200).json({
                status: 'Failed',
                error: e,
                data:null 
            })
        }
    }
}
module.exports =UserController