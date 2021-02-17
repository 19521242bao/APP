const uuid = require("uuid");
const { queryBuilder } = require("../config/databse");
const querry = require("../config/databse");
class CommentService{
    static async addCommentService(req,res,next){
        try{
            let data = req.body;
            let insertData = {
                idComment:uuid.v4(),
                nameUser=data.name,
                nameComment=data.nameCategory
            }
            await querry("Comment").insert(insertData);
            return "Comment added"
        }catch(e){
            console.log(e);
        }
    }
    static async showCommentService(req,res,next){
        try{
            let data = await queryBuilder("Comment").select();
            return data;
        }catch(e){
            console.log(e);
        }
    }
}
module.exports = CommentService;