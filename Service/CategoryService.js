const uuid = require("uuid");
const { queryBuilder } = require("../config/databse");
const querry = require("../config/databse");
class CategoryService{
    static async addCategoryService(req,res,next){
        try{
            let data = req.body;
            let insertData = {
                idCategory:uuid.v4(),
                nameCategory:data.nameCategory
            }
            await querry("Category").insert(insertData);
            return "Category added"
        }catch(e){
            console.log(e);
        }
    }
    static async showCategoryService(req,res,next){
        try{
            let data = await queryBuilder("Category").select();
            return data;
        }catch(e){
            console.log(e);
        }
    }
}

module.exports = CategoryService;