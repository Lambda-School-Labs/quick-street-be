const express = require("express");
const bcrypt = require("bcryptjs");
const Orders = require("../models/orders-models");
const Customers = require("../models/customer-models");

const restrict = require("../middleware/restrict");
const router = express.Router();

// ALL orders

router.get("/", restrict, (req, res) => {
  Orders.getOrders()
    .then(orders => {
      res.json(orders);
    })
    .catch(err => {
      res.json(err);
    });
});

// Orders for person logged in 

router.get("/me", restrict, (req, res) => {
  const id = req.token.subject;
  console.log("the id", id)
  console.log("is this the orders payload", req.token.subject);
  Orders.findBy(id)
    // .first()
    .then((data) => {
      console.log("orders data returned", data)
      res.json(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

// ADD order

router.post("/submit", restrict, (req, res) => {
  
  // Customers.findCustomerId(req.body.user_id)
  // .then(customer => {
    
  // })
  const order = req.body;
  console.log(order)
  Orders.addOrder(order)
    .then(order => {
      res.status(201).json(order);
    })
    .catch(err => {
      res.status().json(err);
    });
});

module.exports = router;
