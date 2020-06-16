const express = require("express");

const Vendors = require("../models/vendor-models");
const Users = require("../models/users-models");
const restrict = require("../middleware/restrict");
const router = express.Router();

// NEEDS ADMIN RIGHTS RESTRICITON
//All vendors data
router.get("/", restrict, (req, res) => {
  const admin = req.token.admin;
  console.log("admin", req.token);
  if (admin) {
    Vendors.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.send(err);
      });
  } else {
    res
      .status(401)
      .json({ message: "Sorry, you're not allowed to see this info." });
  }
});

router.get("/:vendorId/products", restrict, (req, res) => {
  const vendor_id = req.params.vendorId;
  Vendors.findVendorProducts(vendor_id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

//the vendor signed in gets their data
router.get("/me", restrict, (req, res) => {
  const id = req.token.subject;
  console.log("is this the payload", req.token.subject);
  Vendors.findBy(id)
    .first()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

// SAME or SIMILAR TO ABOVE
//Return vendor data by id.
router.get("/:id", restrict, (req, res) => {
  const id = req.token.subject;
  Vendors.findBy(id)
    .first()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

//return vendor POSTS based on logged in vendor
router.get("/me/posts", restrict, (req, res) => {
  const user_id = req.token.subject;
  console.log("is this the payload", req.token.subject);
  console.log("is admin", req.token.admin);
  Vendors.findVendorPosts(user_id)
    .first()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

// NEEDS ADMIN RIGHTS or we need two options, one for the admin to delete a vendor account,
// another for a vendor to delete themself
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

router.get("/me/products", restrict, (req, res) => {
  const vendor_id = req.token.subject;
  Vendors.findVendorProducts(vendor_id)
    .first()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.post("/add", restrict, (req, res) => {
  const id = req.token.subject;
  const data = req.body;
  data.users_id = id;
  Vendors.add(data)
    .then((v) => res.status(200).json(v))
    .catch((err) => res.status(500).json(err));
});

// UPDATE vendor information (not username or email)
router.put("/me/update", restrict, (req, res) => {
  const id = req.token.subject;
  const data = req.body;

  Vendors.updateVendor(id, data)
    .then((updated) => {
      res.json(updated);
    })
    .catch((err) => {
      res.send(err);
    });
});

//adding a vendor product by logged in user.
router.post("/me/products", restrict, async (req, res) => {
  const id = req.token.subject;
  const data = req.body;
  console.log("data before id", data);
  const checkVendor = await Vendors.findBy(id);
  if (checkVendor) {
    data.vendor_id = checkVendor[0].id;
    Vendors.addVendorProduct(data)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.send(err);
      });
  } else {
    res.status(500).json({ message: "No vendor by that id" });
    console.log("error finding that user");
  }
});

// vendor dashboard
router.post("/:vendorId/products", restrict, async (req, res) => {
  const id = req.params.vendorId;
  let data = req.body;
  data.vendor_id = id;
  Vendors.addVendorProduct(data)
    .then((created) => {
      res.status(200).json(created);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});
module.exports = router;
