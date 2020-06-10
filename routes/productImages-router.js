const express = require("express");
const bcrypt = require("bcryptjs");
const restrict = require("../middleware/restrict");
const router = express.Router();

let productImages = [];

router.get("/", (req,res) => {
    res.status(200).json({ router: "product Images router" });
  });

router.get("/:id", (req,res) => {
    res.status(200).json( { data:`product images ID ${req.params.id}` } )
});

module.exports = router;

