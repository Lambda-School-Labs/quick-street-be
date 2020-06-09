const express = require("express");
const bcrypt = require("bcryptjs");
const Products = require("../models/products-models");

const restrict = require("../middleware/restrict");
const router = express.Router();

// ALL orders

router.get("/", restrict, (req, res) => {
  Products.getProduts()
    .then(orders => {
      res.json(orders);
    })
    .catch(err => {
      res.json(err);
    });
});

// get order by ID

router.get("/:id", restrict, (req, res) => {
  const id = req.params.id;

  Products.getProductById({ id })
    .first()
    .then(order => {
      res.json(order);
    })
    .catch(err => {
      res.send(err);
    });
});

// ADD order

router.post("/", restrict, (req, res) => {
  const order = req.body;
  Products.addProduct(order)
    .then(order => {
      res.status(201).json(order);
    })
    .catch(err => {
      res.status().json(err);
    });
});

module.exports = router;

// OLD
