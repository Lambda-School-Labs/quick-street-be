const express = require("express");
const Products = require("../models/products-models");

const restrict = require("../middleware/restrict");
const router = express.Router();

let productImages = [];

// ALL products

router.get("/", restrict, (req, res) => {
  Products.getProducts()
    .then((orders) => {
      res.json(orders);
    })
    .catch((err) => {
      res.json(err);
    });
});

// get product by ID

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

// ADD product

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


//EDIT a product
router.put("/:id", restrict, (req, res) => {
  let id = req.params.id;
  const updates = req.body;

  Products.updateProduct(id, updates)
    .then((product) => {
      res.status(201).json(product);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// DELETE a product
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

// IMAGE SPECIFIC ROUTES

// GET product image
router.get("/:id/product-images", restrict, (req, res) => {
  const id = req.params.id;
  console.log("router id:", id);
  
  Products.getProductImages(id)
  .then(data => {
    console.log("router data:", data)
    res.json(data)
  })
  .catch(err => {
    res.json(err)
  })
  });

  // ADD product image
  router.put("/:id/product-images", restrict, (req, res) => {
    const product_id = req.params.id;
    const image_data = req.body;
    // const vendor_id = 
    console.log("req body", req.body)
    console.log('id from image uploader:', product_id)
    console.log("image data", image_data)

    Products.addProductImage(product_id, image_data.public_id)
    .then(response => {
      console.log('response data', response)
      res.json(response)
    })
    .catch(err => {
      console.log("catch data", err)
      res.json(err)
    })
  })

module.exports = router;

// OLD
