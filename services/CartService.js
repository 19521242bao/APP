'use strict'
const queryBuilder = require('../config/database');
const uuid = require("uuid");


class CartService{
    static async AddingCartService(req,res,next){
      try{
        let params = req.body;
        console.log(params);
        let dataInsert = {
            cartId: uuid.v4(),
            productName:params.productName,
            productImage:params.productImage,
            price:params.productPrice
        }
        await queryBuilder("Cart").insert(dataInsert);
        return true;
      }catch(e){
        console.log(e);
      }
       
    }
    static async GetListProductService(req,res,next){
      try{
        let data = await queryBuilder("Cart");
          return data;
      }catch(e){
        console.log(e);
      }
    }
    static async GetPaidService(req,res,next){
        try{
            let data = await queryBuilder("Cart").del;
            console.log(data);
            return data;
        }catch(e){
            console.log(e);
        }
    }
    static async searchProductService(req,res,next){
      try{
      let params = req.params.search;
      console.log(params);
      let data = await queryBuilder('Cart').where("cartId",params).first();
      console.log(data);
      return data;
      }catch(e){
        console.log(e);
        return e;
      }
  }
 
}


    
module.exports = CartService;