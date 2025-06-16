const express = require("express");
const productRouter = express.Router();
const Product = require("../models/product");

productRouter.get('/product', async (req, res) => {
    try {
      const data =  await Product.find({});
      res.json(data);
      // console.log("dataProduct"+ "-->" + data)
    } catch (err) {
      res.status(400).send("ERROR : " + err.message);
    }
})

module.exports = productRouter;