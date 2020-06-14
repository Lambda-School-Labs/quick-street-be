const express = require("express");
const restrict = require("../middleware/restrict");
const router = express.Router();

let productImages = [];

router.get("/", restrict, (req, res) => {
  res.status(200).json({ router: "product Images router" });
});

router.get("/:id", restrict, (req, res) => {
  res.status(200).json({ data: `product images ID ${req.params.id}` });
});

module.exports = router;
