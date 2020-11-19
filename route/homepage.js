const express = require('express');
const route = express.Router();
const HomepageController = require("../controller/HomepageController");
route.get("/",HomepageController.GetProductController);
route.get("/search",HomepageController.SearchProductController);
route.post("/",HomepageController.AddProductController);
route.get("/:search",HomepageController.SearchProductController);
module.exports = route;