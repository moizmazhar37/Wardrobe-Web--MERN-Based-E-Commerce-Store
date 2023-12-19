const mongoose = require('mongoose');
const {Schema } = mongoose;

const ProductSchema = new Schema(
    {
        productName:
        {
            type: String,
            required: true,
        },
        productPrice:
        {
            type: String,
            required: true,
        },
        productDescription:
        {
            type: String,
            required: true,
        },
        img:
        {
            data: Buffer,
            contentType: String
        },
        productQuantity:
        {
            type: Number,
            required: true,
        },
        sizes:
        {
            type: String,
            required: true,
        },
        category:
        {
            type: String,
            required: true,
        },
        subCategory:
        {
            type: String,
            required: true,
        },
        color1:
        {
            type: String,
            required: true,
        },
        color2:
        {
            type: String,
        },
        color3:
        {
            type: String,
        },
        timestamp: 
        {
            type: Date,
            default: Date.now,
        },
    }
);
const Product = mongoose.model('Products' , ProductSchema);
module.exports = Product;