const express = require('express');
const Router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
const FetchUser = require('./../Middleware')
const SECRET_KEY = "secretkeyresumes";
const Cart = require('../Models/Cart');
const Products = require('../Models/Products');

Router.post('/AddToCart', FetchUser, async (Req, Res) => {
    try {
        const { productid } = Req.body;
        const SaveCart = await Cart.create({
            user: Req.user.id,
            productid,
        });
        Res.status(200).send({ Success: true, SaveCart });
    } catch (error) {
        Res.status(404).json({ Error: error });
    }
});

Router.get('/GetCart', FetchUser, async (Req, Res) => {
    try {
        const CartItems = await Cart.find({ user: Req.user.id });
        let CartItemsWithProduct = [];
        for (let i = 0; i < CartItems.length; i++) {
            const Product = await Products.findOne({ _id: CartItems[i].productid });
            CartItemsWithProduct.push(Product);
        }
        Res.status(200).send({ Success: true, CartItemsWithProduct });
    } catch (error) {
        Res.status(404).json({ Error: error });
    }
});

Router.delete('/DeleteCart', FetchUser, async (Req, Res) => {
    try {
        const CartItem = await Cart.findOne({ productid: Req.body.productid });
        if (!CartItem) {
            return Res.status(400).json({ Success: false, Error: "Item Not Found" });
        }
        const DeletedCartItem = await Cart.findOneAndDelete({ productid: Req.body.productid });
        Res.status(200).send({ Success: true, DeletedCartItem });
    } catch (error) {
        Res.status(404).json({ Error: error });
    }
});

Router.get('/GetCartCount', FetchUser, async (Req, Res) => {
    try {
        const CartItems = await Cart.find({ user: Req.user.id });
        const CartCount = CartItems.length;
        Res.status(200).send({ Success: true, CartCount });
    } catch (error) {
        Res.status(404).json({ Error: error });
    }
});


module.exports = Router;
