require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const server = express();
const productRouter = require('./routes/products')
const userRouter = require('./routes/users')

// password: "jz5DZTkn179YLnfs"
// io2QbN99DQJ4LUHN  //db password
//74yTwxyI3Jmh9pdz


//db connection 
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/eccommerce');
   

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}




server.use(express.json());
server.use(morgan('default'))
server.use(express.static('public'))
server.use('/products', productRouter.router);
server.use('/users', userRouter.router);
// server.use(morgan)
// const auth=(req,res,next)=>{

// server.get('/product/:id',auth,(req,res)=>{
//     console.log(req.params);
//     res.json({type:'GET1'})
// })

server.listen(8080, () => {
    console.log('server started');
})



