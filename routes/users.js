const express=require('express')
const productController=require('../controller/user')
const userRouter=express.Router();
//Products
//Read Get Products
const router=express.Router();
router
.get('/', productController.getAllUsers)


.get('/:id',productController.getUsers )

//Create API /products
.post('/',productController.createUsers )

//Update API
.put('/:id',productController.updateUsers)

//Delete API 
.delete('/:id', productController.deleteUsers) 


exports.router=router;  