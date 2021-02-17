const uuid = require("uuid");
const bcrypt = require("bcrypt");
const querryBuilder = require("../config/databse");

class ProductService{
    static async createProductService(req,res,next){
        try{
        let data = req.body;
        let insertData = {
            idFood:uuid.v4(),
            idCategory:data.idCate,
            nameFood:data.nameFood,
            price:data.price,
            foodAdress:data.address,
            image:data.image
        }
        await querryBuilder("Food").insert(insertData);
        return "Add product success";
        }catch(e){
            console.log(e);
        }
    }
    static async showFoodByCateService(req,res,next){
        try{
            let param = req.params.idCate;
            let data = await querryBuilder("Food").where("idCategory",param).select();
            return data;
        }catch(e){
            console.log(e);
        }
    }
    static async showFoodService(req,res,next){
        try{
            let data = await querryBuilder("Food").select();
            return data;
        }catch(e){
            console.log(e)
        }
    }
    static async searchFoodService(req,res,next){
        try{
            let require = req.querry;
            let data = await querryBuilder("Food").where("nameFood",require.namefood).select();
            return data;
        }catch(e){
            console.log(e);
        }
    }
    static async searchAddressService(req,res,next){
        try{
            let require = req.querry;
            let data = await querryBuilder("Food").where("foodAddress",require.address).select();
            return data;
        }catch(e){
            console.log(e);
        }
    }
}
module.exports = ProductService;