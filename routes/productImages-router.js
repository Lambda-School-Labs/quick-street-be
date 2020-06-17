const express = require("express");
const restrict = require("../middleware/restrict");
const router = express.Router();

const Images = require("../models/productImages-models");

let productImages = [];

router.get("/", restrict, (req, res) => {
  res.status(200).json({ router: "product Images router" });
});

router.get("/:id/product-images", restrict, (req, res) => {
const id = req.params.id;
console.log('router id', id)

Images.getProductImages(id)
.then(data => {
  res.json(data)
})
.catch(err => {
  res.json(err)
})
});


// router.get("/:vendorId/products", restrict, (req, res) => {
//   const vendor_id = req.params.vendorId;
//   Vendors.findVendorProducts(vendor_id)
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });
module.exports = router;

