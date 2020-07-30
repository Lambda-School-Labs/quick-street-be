const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("../models/users-models.js");
const restrict = require("../middleware/restrict");
const router = express.Router();

// NEEDS RESTRICT
router.get("/", async (req, res) => {
  const users = await Users.find().catch((e) => res.json(e));
  res.status(200).json(users);
});

  router.get("/favorites", restrict, (req, res) => {
    const id = req.token.subject;
    console.log(id);
    Users.findFavorites(id)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  });

// REGISTRATION
router.post("/registration", async (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 8);
  user.password = hash;

  const checkUser = await Users.findBy(user.email);

  if (checkUser) {
    console.log("this user already exists");
    res.status(200).json({ message: "user already exists.", checkUser });
  } else {
    let { isVendor, email, password } = user;
    let registerUser = await Users.addUser({ isVendor, email, password });
    if (registerUser[0].isVendor === true) {
      const token = generateToken(registerUser[0]);
      console.log("this is a token", token);
      res.status(200).json({ message: "Created a new vendor.", user, token });
    } else {
      const token = generateToken(registerUser[0]);
      res.status(200).json({ message: "Created a new customer.", user, token });
    }
  }
});

//LOGIN
router.post("/login", (req, res) => {
  let { email, password } = req.body;
  // console.log("req", req.body);

  Users.findBy(email)
    .then((user) => {
      console.log("user", user);
      if (user && bcrypt.compareSync(password, user.password)) {
        console.log("user", email);
        const token = generateToken(user);
        const id = user.id;
        const isVendor = user.isVendor;
        res.status(200).json({
          message: `Welcome ${user.email}`,
          token,
          id,
          isVendor,
        });
      } else {
        res.status(401).json({ message: "Password fail." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Error finding the user.", err });
    });

  // Users.findBy(user.email)
  //   .then((user) => {
  //     if (user) {
  //       user && bcrypt.compareSync(password, bcrypt.hashSync(user.password, 8));
  //       const token = generateToken(user);
  //       res.status(200).json({
  //         message: `Welcome ${user.email}`,
  //         token,
  //       });
  //     } else {
  //       res.status(401).json({ message: "User wasn't found." });
  //     }
  //   })
  //   .catch((err) => {
  //     res.status(500).json({ message: "error logging in", err });
  //   });
});

//TOKEN

function generateToken(user) {
  const secret = process.env.JWT_secret;
  const payload = {
    subject: user.id,
    email: user.email,
    admin: user.isAdmin,
  };

  const options = {
    expiresIn: "3h",
  };

  return jwt.sign(payload, secret, options);
}

//NEEDS RESTRICT OR DELETE IT
// router.get("/customer", (req, res) => {
//   Customers.find()
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });

module.exports = router;
