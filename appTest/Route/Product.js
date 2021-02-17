const route = require("express").Router();
const ProductController = require("../Controller/ProductController");
route.post("/",ProductController.createProductController);
route.get("/",ProductController.showFoodController);
route.get("/:idCate",ProductController.showFoodByCateController);
route.get("/searchFood",ProductController.searchFoodController);
route.get("/searchAddress",ProductController.searchAddressController);
module.exports = route;