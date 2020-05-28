const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Customers = require("../api/customers/customers-model")
const Vendors = require("../api/vendors/vendorss-model")
const router = express.Router()

//Customers
router.post('/register', (req, res) => {
  // implement registration
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 8);
  user.password = hash;

  Customers.add(user)
    .then(saved => {
      res.status(201).json(saved)
    })
    .catch(err => {
      res.status(500).json({message: 'error adding user', err})
    })
});

router.post('/login', (req, res) => {
  // implement login
  let { username, password } = req.body;

  Customers.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);

        res.status(200).json({
          message: `Welcome ${user.username}`,
          token
        })
      } else {
        res.status(401).json({message: 'bad credentials'})
      }
    })
    .catch(err => {
      res.status(500).json({message: 'error logging in',err})
    })
});

//Vendors
router.post('/vendorregister', (req, res) => {
    // implement registration
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;

    Vendors.add(user)
      .then(saved => {
        res.status(201).json(saved)
      })
      .catch(err => {
        res.status(500).json({message: 'error adding user', err})
      })
  });

  router.post('/vendorlogin', (req, res) => {
    // implement login
    let { username, password } = req.body;
    Vendors.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user);
          res.status(200).json({
            message: `Welcome ${user.username}`,
            token
          })
        } else {
          res.status(401).json({message: 'bad credentials'})
        }
      })
      .catch(err => {
        res.status(500).json({message: 'error logging in',err})
      })
  });
/// END Vendor

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };
  const secret = 'mysecret';
  const options = {
    expiresIn: '1h'
  };

  return jwt.sign(payload, secret, options)
}




module.exports = router