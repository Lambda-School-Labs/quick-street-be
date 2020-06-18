const express = require("express");
const Products = require("../models/products-models");

const restrict = require("../middleware/restrict");
const router = express.Router();

let productImages = [];

// ALL orders

router.get("/", restrict, (req, res) => {
  Products.getProducts()
    .then((orders) => {
      res.json(orders);
    })
    .catch((err) => {
      res.json(err);
    });
});

// get order by ID

router.get("/:id", restrict, (req, res) => {
  const id = req.params.id;

  Products.getProductById({ id })
    .first()
    .then((order) => {
      res.json(order);
    })
    .catch((err) => {
      res.send(err);
    });
});

// ADD order

router.post("/", restrict, (req, res) => {
  const order = req.body;
  Products.addProduct(order)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status().json(err);
    });
});

//Edit a post
router.put("/:id", restrict, (req, res) => {
  let id = req.params.id;
  const updates = req.body;
  Products.updateProduct(id, updates)
    .then((order) => {
      res.status(201).json(order);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete("/:id", restrict, (req, res) => {
  let { id } = req.params;

  Products.deleteProduct(id)
    .then((data) => {
      res.status(200).json({ message: "successful deletion", data });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});


router.get("/:id/product-images", restrict, (req, res) => {
  const id = req.params.id;
  console.log('router id:', id)
  
  Products.getProductImages(id)
  .then(data => {
    console.log('router data:', data)
    res.json(data)
  })
  .catch(err => {
    res.json(err)
  })
  });

module.exports = router;

// OLD
