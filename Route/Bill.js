const route = require("express").Router();
const BillController = require("../Controller/BillController");
route.post("/",BillController.addBillController);
route.get("/",BillController.showBillController);
route.get("/:idBill",BillController.getBillController);
route.delete("/:idBill",BillController.deleteBillController);
module.exports = route;