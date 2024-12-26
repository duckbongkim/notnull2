const express = require('express')
const router = express.Router();
const Products = require('../models/products')


router.route('/products/list/:products_num')
.get(async(req,res,next)=>{
    try{
       const {products_num} = req.params;
       const {text} = req.body
       await Products.()
       
    }catch(err){
        console.error(err)
        next(err)
    }
})

.post(async(req,res,next)=>{
    try{

    }catch(err){
        console.error(err)
        next(err)
    }
})

module.exports = router;