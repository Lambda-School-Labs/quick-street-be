const express = require("express");
const bcrypt = require("bcryptjs");
const Users = require("../models/users-models");

const restrict = require("../middleware/restrict");
const router = express.Router();

//All users
router.get("/", restrict, (req, res) => {
  Users.find()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.send(err);
    });
});

// DELETE user
router.delete("/:id", restrict, (req, res) => {
  const id = req.params.vendorId;
  Users.deleteUser(id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.send(err);
    });
});

// UPDATE user
router.put("/:id", restrict, (req, res) => {
  const id = req.params.vendorId;
  const data = req.body;
  Users.updateUser(id, data)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.send(err);
    });
});

// //the user signed in gets their data
// router.get("/me", restrict, (req, res) => {
//   const id = req.token.subject;
//   console.log("is this the payload", req.token.subject);
//   Users.findBy({ id })
//     .first()
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });

// //Return user data by id.
// router.get("/:id", restrict, (req, res) => {
//   const id = req.params.vendorId;
//   console.log("is this the payload", req.token.subject);
//   Users.findBy({ id })
//     .first()
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });
module.exports = router;
