const express = require("express");
const bcrypt = require("bcryptjs");
const Vendors = require("../models/Vendor");

const restrict = require("../middleware/restrict");
const router = express.Router();

//All vendors data
router.get("/", restrict, (req, res) => {
  Vendors.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(err);
    });
});
//the user signed in gets their data
router.get("/me", restrict, (req, res) => {
  const id = req.token.subject;
  console.log("is this the payload", req.token.subject);
  Vendors.findBy({ id })
    .first()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

//Return vendor data by id.
router.get("/:vendorId", restrict, (req, res) => {
  const id = req.params.vendorId;
  console.log("is this the payload", req.token.subject);
  Vendors.findBy({ id })
    .first()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

//return vendors posts by vendorid
router.get("/:vendorId/posts", restrict, (req, res) => {
  const vendors_id = req.params.vendorId;
  console.log("is this the payload", req.token.subject);
  Vendors.findVendorPosts(vendors_id)
    .first()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.delete("/:vendorId", restrict, (req, res) => {
  const id = req.params.vendorId;
  Vendors.deleteVendor(id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

//google maps endpoint
// router.get('/vendors/radius/:zipcode/:distance', restrict, (req,res)=> {

// })

router.get("/:vendorId/products", restrict, (req, res) => {
  const vendor_id = req.params.vendorId;
  console.log("is this the payload", req.token.subject);
  Vendors.findVendorProducts(vendor_id)
    .first()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.put("/:vendorId", restrict, (req, res) => {
  const id = req.params.vendorId;
  const data = req.body;
  Vendors.updateVendor(id, data)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
