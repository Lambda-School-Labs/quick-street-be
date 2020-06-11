const express = require("express");
const Customer = require("../models/Customer");

const restrict = require("../middleware/restrict");
const router = express.Router();

//All customer data
router.get("/", restrict, (req, res) => {
  Customer.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

//find by id
router.get("/:customerId", restrict, (req, res) => {
  const id = req.params.customerId;
  console.log("is this the payload", req.token.subject);
  Customer.findBy({ id })
    .first()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.put("/:customerId", restrict, (req, res) => {
  const id = req.params.customerId;
  const data = req.body;
  Customer.updateCustomer(id, data)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.delete("/:customerId", restrict, (req, res) => {
  const id = req.params.customerId;
  Customer.deleteCustomer(id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
