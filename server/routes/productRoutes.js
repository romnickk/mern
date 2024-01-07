const express = require('express')
const router = express.Router();
const Product = require('../model/product')
const multer = require('multer')
const path = require('path')
const fs = require('fs')


router.get('/product-list', async(req,res) =>{
    try {
        const product = await Product.find();
        const demoImage = product.map((product) => ({
            id: product._id.toString(),
            title: product.title,
            data: product.data.toString('base64'),
            price: product.price
        }));
        res.json(demoImage);
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
})


module.exports = router