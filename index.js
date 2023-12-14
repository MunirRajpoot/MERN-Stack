const express = require('express');
const morgan = require('morgan')
const server = express();
const productRouter=require('./routes/products')
const userRouter=require('./routes/users')

server.use(express.json());
server.use(morgan('default'))
server.use(express.static('public'))
server.use('/products',productRouter.router);
server.use('/users',userRouter.router);
// server.use(morgan)
// const auth=(req,res,next)=>{

// server.get('/product/:id',auth,(req,res)=>{
//     console.log(req.params);
//     res.json({type:'GET1'})
// })

server.listen(8080, () => {
    console.log('server started');
})



