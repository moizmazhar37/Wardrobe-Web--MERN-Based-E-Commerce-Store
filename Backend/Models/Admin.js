const mongoose = require('mongoose');
const {Schema } = mongoose;

const AdminSchema = new Schema(
    {
        name: 
        {
            type: String,
            required: true,
        },
        email:
        {
            type: String,
            unique: true,
            required: true,
        },
        password: 
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
const Admin = mongoose.model('Admin' , AdminSchema);
module.exports = Admin;