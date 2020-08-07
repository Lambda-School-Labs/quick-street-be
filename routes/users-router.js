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


module.exports = router;
