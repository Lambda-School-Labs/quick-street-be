const express = require("express");
const Vendors = require("../models/vendor-models");
const restrict = require("../middleware/restrict");
const router = express.Router();

// NEEDS ADMIN RIGHTS RESTRICITON
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
  Vendors.findVendorProducts(id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

//don't think we need this
router.get("/:vendorId/products", restrict, (req, res) => {
  const vendor_id = req.params.vendorId;
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

  Vendors.addVendorBanner(vendor_id, image_data.public_id)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json(err);
    });
});


module.exports = router;
