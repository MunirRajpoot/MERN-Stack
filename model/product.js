const mongoose=require('mongoose')
const {Schema}=mongoose

const productSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,

    brand: String,
    category: String,
   
});
exports.Product = mongoose.model('Product', productSchema);