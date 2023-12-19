const mongoose = require('mongoose');
const {Schema } = mongoose;

const CartSchema = new Schema(
    {
        user:
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        productid:
        {
            type: Schema.Types.ObjectId,
            ref: 'Products',
        },
        timestamp: 
        {
            type: Date,
            default: Date.now,
        },
    }
);
const Cart = mongoose.model('Cart' , CartSchema);
module.exports = Cart;