const ProductService = require("../Service/ProductService");
class ProductController{
    static async createProductController(req,res,next){
        try{
            let result = await ProductService.createProductService(req);
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
                    message:"Add product failed",
                    detail:e
                },
                data:null
            })
        }
    }
    static async showFoodByCateController(req,res,next){
        try{
            let data= await ProductService.showFoodByCateService(req);
            res.status(200).json({
                status:"SUCCESS",
                error:null,
                data:data
            });
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
    static async showFoodController(req,res,next){
        try{
            let data = await ProductService.showFoodService(req);
            res.status(200).json({
                status:"SUCCESS",
                error:null,
                data:data
            });
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
    static async searchFoodController(req,res,next){
        try{
            let data = await ProductService.searchFoodService(req);
            res.status(200).json({
                status:"SUCCESS",
                error:null,
                data:data
            });
        }catch(e){
            res.status(200).json({
                status:"FAILED",
                error:{
                    code:1000,
                    message:"search product failed"
                },
                data:null
            })
        }
    }
    static async searchAddressController(req,res,next){
        try{
            let data = await ProductService.searchAddressService(req);
            res.status(200).json({
                status:"SUCCESS",
                error:null,
                data:data
            });
        }catch(e){
            res.status(200).json({
                status:"FAILED",
                error:{
                    code:1000,
                    message:"search address failed"
                },
                data:null
            })
        }
    }
}
module.exports = ProductController;