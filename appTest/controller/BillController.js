const BillService=require("../service/BillService");
class BillController {
    static async addBillController(req,res,next){
        try{
            let result=await addBillService.Service(req);
            res.status(200).json({
                status:"SUCCESS",
                data:result,
                error:null
            })
        }catch(e){
            res.status(200).json({
                status:"FAILED",
                data:null,
                error:{
                    code:1000,
                    message:"add bill failed"
                }
        })
    }
}
static async showBillController(req,res,next){
    try{
        let result=await showBillService.Service(req);
        res.status(200).json({
            status:"SUCCESS",
            data:result,
            error:null
        })
    }catch(e){
        res.status(200).json({
            status:"FAILED",
            data:null,
            error:{
                code:1000,
                message:"show bill failed"
            }
    })
}
}
static async deleteBillController(req,res,next){
    try{
        let result = await BillService.deleteBillService(req);
        res.status(200).json({
            status:"SUCCESS",
            data:result,
            error:null
        })
    }catch(e){
        res.status(200).json({
            status:"FAILED",
            data:null,
            error:{
                code:1000,
                message:"delete bill failed"
            }
        })
    }
}
}