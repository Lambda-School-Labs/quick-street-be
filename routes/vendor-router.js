const express = require("express");
const Vendors = require("../models/vendor-models");
const restrict = require("../middleware/restrict");
const router = express.Router();

// NEEDS ADMIN RIGHTS RESTRICITON
//All vendors data
router.get("/", restrict, (req, res) => {
  // const admin = req.token.admin;
  // console.log("admin", req.token);
  // if (admin) {
  Vendors.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(err);
    });
  // } else {
  //   res
  //     .status(401)
  //     .json({ message: "Sorry, you're not allowed to see this info." });
  // }
});

router.get("/all", restrict, (req, res) => {
  Vendors.findAll()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.post("/all/places", restrict, (req, res) => {
  const info = req.body;
  Vendors.findZip(info)
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

//return vendor POSTS based on logged in vendor
router.get("/me/posts", restrict, (req, res) => {
  const user_id = req.token.subject;
  console.log("is this the payload", req.token.subject);
  console.log("is admin", req.token.admin);
  Vendors.findVendorPosts(user_id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.post("/me/posts", restrict, async (req, res) => {
  const id = req.token.subject;
  const data = req.body;
  console.log("data before id", data);
  const checkVendor = await Vendors.findBy(id);
  if (checkVendor) {
    data.vendors_id = checkVendor[0].id;
    Vendors.addVendorPosts(data)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  } else {
    res.status(500).json({ message: "No vendor by that id" });
    console.log("error finding that user");
  }
});

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

router.get("/me/products", restrict, (req, res) => {
  const id = req.token.subject;
  console.log("token id", id);
  Vendors.findVendorProducts(id)
    .then((data) => {
      console.log("me products data", data)
      res.json(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

//don't think we need this
router.get("/:vendorId/products", restrict, (req, res) => {
  const vendor_id = req.params.vendorId;
  console.log("PARAMTS", req.params)
  console.log("ID", vendor_id)
  console.log("SUBJECT", req.token.subject)
  Vendors.findVendorProductsForCustomer(vendor_id)
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

// SAME or SIMILAR TO ABOVE
//Return vendor data by id.
router.get("/:id", restrict, (req, res) => {
  const id = req.params.id;
  Vendors.findByVendorId(id)
    .first()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(err);
    });
});


router.get("/:id/posts", restrict, (req, res) => {
  const { id } = req.params;
  Vendors.findVendorPostsByVendorId(id)
    .first()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// ADD vendor banner
router.put("/:id/vendor-banner", restrict, (req, res) => {
  const vendor_id = req.params.id;
  const image_data = req.body;
  // const vendor_id =
  console.log("banner req body", req.body);
  // console.log("id from image uploader:", product_id);
  console.log("image data", image_data);

  Vendors.addVendorBanner(vendor_id, image_data.public_id)
    .then((response) => {
      console.log("banner response data", response);
      res.json(response);
    })
    .catch((err) => {
      console.log("catch data", err);
      res.json(err);
    });
});


// router.put("/:id/product-images", restrict, (req, res) => {
//   const product_id = req.params.id;
//   const image_data = req.body;
//   // const vendor_id = 
//   console.log("req body", req.body)
//   console.log('id from image uploader:', product_id)
//   console.log("image data", image_data)

//   Products.addProductImage(product_id, image_data.public_id)
//   .then(response => {
//     console.log('response data', response)
//     res.json(response)
//   })
//   .catch(err => {
//     console.log("catch data", err)
//     res.json(err)
//   })
// })
// NEEDS ADMIN RIGHTS or we need two options, one for the admin to delete a vendor account,

module.exports = router;
