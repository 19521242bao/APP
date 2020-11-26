const querryBuilder = require("../config/databse");
const uuid = require("uuid");
class BillService{
    static async addBillService(req,res,next){
        try{
            let data = req.body;
            let insertData = {
                idBill:uuid.v4(),
                fullname:data.name,
                address:data.address,
                date:new Date(),
                note:data.note,
                total: data.total
            }
            await querryBuilder("Bill").insert(insertData);
            return "Bill added";
        }catch(e){
            console.log(e)
        }
    }
    static async showListBillService(req,res,next){
        try{
            let data = await querryBuilder("Bill").select();
            return data;
        }catch(e){
            console.log(e);

        }
    }
    static async getBillService(req,res,next){
        try{    
            let param = req.params;
            let billinfo = await querryBuilder("bill").select().where("idBill",param.idBill).first();
            return billinfo;
        }catch(e){
            console.log(e);
        }
    }
    static async deleteBillService(req,res,next){
        try{
            let param = req.params
            let data = await querryBuilder("bill").select("idBill").where("idBill",param.idBill).first();
            await querryBuilder("bill").where("idBill",data).delete();
            return "Bill deleted";
        }catch(e){
            console.log(e);
        }
    }
}
module.exports = BillService;