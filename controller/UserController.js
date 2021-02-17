const UserService = require("../Service/UserService");
class UserController{
    static async createUserController(req,res,next){
        try{
        let result = await UserService.createUserService(req);
        res.status(200).json({
            status:"SUCCESS",
            error:null,
            data:result
        })
        }catch(e){
            res.status(200).json({
                status:"FAILED",
                error:{
                    code:1000,
                    message:"Sign up failed"
                },
                data:null
            })
        }
    }
    static async loginController(req,res,next){
        try{
            let data= await UserService.loginService(req);
            res.status(200).json({
                status:"SUCCESS",
                error:null,
                data:data
            })
        }catch(e){
            res.status(200).json({
                status:"FAILED",
                error:{
                    code:1000,
                    message:"Login failed"
                },
                data:null
            })
        }
    }
    static async getUserInfoController(req,res,next){
        try{
            let data = await UserService.getUserInfoService(req);
            res.status(200).json({
                status:"SUCCESS",
                error:null,
                data:data
            })
        }catch(e){
            res.status(200).json({
                status:"FAILED",
                error:{
                    code:1000,
                    message:"Get user failed"
                },
                data:null
            });
        }
    }
}
module.exports = UserController;