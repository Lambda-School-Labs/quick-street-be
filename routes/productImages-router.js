const express = require("express");
const restrict = require("../middleware/restrict");
const router = express.Router();

const Images = require("../models/productImages-models");
const Products = require("../models/products-models")

let productImages = [];

router.get("/", restrict, (req, res) => {
  res.status(200).json({ router: "product Images router" });
});

router.get("/:id/product-images", restrict, (req, res) => {
const id = req.params.id;

Products.getProductImages(id)
.then(data => {
  res.json(data)
})
.catch(err => {
  res.json(err)
})
});


module.exports = router;

