const uuid = require("uuid");
const bcrypt = require("bcrypt");
const querryBuilder = require("../config/databse");

class ProductService{
    static async createProductService(req,res,next){
        try{
        let data = req.body;
        let insertData = {
            id:uuid.v4(),
            idCategory:data.idCategory,
            name:data.name,
            price:data.price,
            image:data.image
        }
        await querryBuilder("Shoes").insert(insertData);
        return "Add product success";
        }catch(e){
            console.log(e);
        }
    }
    static async showFoodByCateService(req,res,next){
        try{
            let param = req.params.idCate;
            let data = await querryBuilder("Shoes").where("idCategory",param).select();
            return data;
        }catch(e){
            console.log(e);
        }
    }
    static async showFoodService(req,res,next){
        try{
            let data = await querryBuilder("Shoes").select();
            return data;
        }catch(e){
            console.log(e)
        }
    }
    static async searchFoodService(req,res,next){
        try{
            let require = req.querry;
            let data = await querryBuilder("Shoes").where("name",require.namefood).select();
            return data;
        }catch(e){
            console.log(e);
        }
    }

}
module.exports = ProductService;