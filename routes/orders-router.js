const express = require("express");
const bcrypt = require("bcryptjs");
const Orders = require("../models/orders-models");

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

// get order by ID

router.get("/:id", restrict, (req, res) => {
  const id = req.params.id;

  Orders.getOrderById({ id })
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
  Orders.addOrder(order)
    .then(order => {
      res.status(201).json(order);
    })
    .catch(err => {
      res.status().json(err);
    });
});

// router.post("/", restrict, (req, res) => {
//     const post = req.body;
//     Posts.add(post)
//       .then(post => {
//         res.status(201).json(post);
//       })
//       .catch(err => {
//         res.status().json(err);
//       });
//   });

module.exports = router;
