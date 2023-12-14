const express=require('express')
const productController=require('../controller/product')
const productRouter=express.Router();
//Products
//Read Get Products
const router=express.Router();
router
.get('/', productController.getAllProducts)


.get('/:id',productController.getProducts )

//Create API /products
.post('/',productController.createProducts )

//Update API
.put('/:id',productController.updateProducts)

//Delete API 
.delete('/:id', productController.deleteProducts) 


exports.router=router;  