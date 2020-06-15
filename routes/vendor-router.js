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

//the user signed in gets their data
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

//return vendors posts by vendorid
router.get("/me/posts", restrict, (req, res) => {
  const vendors_id = req.token.subject;
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
  console.log('before fucntion', id, data)
  console.log('toke', req.token)

  Vendors.updateVendor(id, data)
  .then((updated) => {
    console.log('after', id, updated)
    res.json(updated[0]);
  })
  .catch((err) => {
    res.send(err);
  });
});

//adding a vendor product
router.post("/:vendorId/products", restrict, async (req, res) => {
  const id = req.params.vendorId;
  let data = req.body;
  // const checkVendor = await Vendors.findBy(id);
  // if (checkVendor) {
  //   data.vendor_id = checkVendor[0].id;
  //   console.log("check vendor", checkVendor);
  //   console.log("data", data);
  data.vendor_id = id;
  Vendors.addVendorProduct(data)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(err);
    });
  // } else {
  //   res.status(500).json({ message: "No vendor by that id" });
  //   console.log("error finding that user");
  // }
});

module.exports = router;

//   Vendors.findBy(id)
//   .first()
//   .then(vendor => {
//     if(vendor){
//       Vendors.updateVendor(id, data)
//       .then(updated => {
//         res.json(updated)
//       })
//     } else {
//       res.status(404).json({message: 'could not find your vendor data'})
//     }
//   })
//   .catch(err => {
//     res.status(500).json({message: 'failed to update vendor'})
//   })
// })

// router.put('/:id', (req, res) => {
//   const { id } = req.params;
//   const changes = req.body;

//   Projects.findById(id)
//       .then(project => {
//           if (project) {
//               Projects.updateProject(changes, id)
//                   .then(updatedProject => {
//                       res.json(updatedProject);
//                   });
//           } else {
//               res.status(404).json({ message: 'Could not find project with given id' });
//           }
//       })
//       .catch(err => {
//           res.status(500).json({ message: 'Failed to update project' });
//       });
// });