const fs = require('fs');
const model =require('../model/product')
const Product=model.product
exports.createProducts=(req, res) => {
    
    const product=new Product();
    product.title='PhoneX';
    product.price=9999;
    
    res.json(req.body)
}

exports.getAllProducts=(req, res) => {

    res.json(products);
    // res.json({type:'GET2'})
}

exports.getProducts=(req, res) => {
    const id = +req.params.id;
    const product = products.find(p => p.id === id)
    res.json(product)
}

exports.deleteProducts=(req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id);
    const product=products[productIndex]
    products.splice(productIndex,1)
    res.status(201).json(product);
}

//PUT
exports.updateProducts= (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id)
    products.splice(productIndex,1,{...req.body,id:id})
    res.status(201).json();
}