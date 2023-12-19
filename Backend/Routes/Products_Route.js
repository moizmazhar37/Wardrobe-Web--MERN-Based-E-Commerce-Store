const express = require('express');
const Router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
const GetUser = require('./../Middleware')
const SECRET_KEY = "secretkeyresumes";
const Products = require('../Models/Products');

Router.get('/men', async (req, res) => {
    try {
      const products = await Products.find({ category: 'men' });
      res.status(200).json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

Router.get('/men/tshirts', async (req, res) => {
    try {
        const products = await Products.find( {category: 'men' , subCategory: 'T-Shirts' });
        res.status(200).json(products);
    }
    catch (error) 
    {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

Router.get('/men/shirts', async (req, res) => {
    try {
        const products = await Products.find( {category: 'men' , subCategory: 'Shirts' });
        res.status(200).json(products);
    }
    catch (error)
    {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

Router.get('/men/polos', async (req, res) => {
    try {
        const products = await Products.find( {category: 'men' , subCategory: 'Polos' });
        res.status(200).json(products);
    }
    catch (error)
    {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

Router.get('/men/trousers', async (req, res) => {
    try {
        const products = await Products.find({ category: 'men' , subCategory: 'Trousers' });
        res.status(200).json(products);
    }
    catch (error)
    {
        res.status(500).json({ message: 'Internal server error' })
    }
});

Router.get('/women' , async (req, res) => {
    try {
        const products = await Products.find({ category: 'women' });
        res.status(200).json(products);
    }
    catch (error)
    {
        res.status(500).json({ message: 'Internal server error' })
    }
});

Router.get('/women/tshirts', async (req, res) => {
    try {
        const products = await Products.find( {category: 'women' , subCategory: 'T-Shirts' });
        res.status(200).json(products);
    }
    catch (error) 
    {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

Router.get('/women/polos', async (req, res) => {
    try {
        const products = await Products.find( {category: 'women' , subCategory: 'Polos' });
        res.status(200).json(products);
    }
    catch (error)
    {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
Router.get('/women/shirts', async (req, res) => {
    try {
        const products = await Products.find( {category: 'women' , subCategory: 'Shirts' });
        res.status(200).json(products);
    }
    catch (error)
    {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = Router;
