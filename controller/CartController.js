const CartService = require("../Service/CartService");
class CartController{
    static async addProductController(req,res,next){
        try{
            let result = await CartService.addProductService(req);
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
                    message:"added failed"
                },
                data:null
            })
        }
    }
    static async showProductController(req,res,next){
        try{

            let result = await CartService.showProductService(req);
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
                    message:"show product failed"
                },
                data:null
            })
        }
    }
    static async deleteAllProductController(req,res,next){
        try{

            let result = await CartService.deleteProductService(req);
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
                    message:"delete product failed"
                },
                data:null
            })
        }
    }
    static async deleteProductController(req,res,next){
        try{

            let result = await CartService.deleteProductService(req);
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
                    message:"delete product failed"
                },
                data:null
            })
        }
    }
} 
module.exports = CartController;