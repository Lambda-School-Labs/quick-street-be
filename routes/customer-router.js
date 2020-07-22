const express = require("express");
const Customer = require("../models/customer-models");

const restrict = require("../middleware/restrict");
const router = express.Router();

//All customer data
router.get("/", restrict, (req, res) => {
  Customer.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

//find by id
// router.get("/:customerId", restrict, (req, res) => {
//   const id = req.params.customerId;
//   console.log("is this the payload", req.token.subject);
//   Customer.findBy({ id })
//     .first()
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });

router.get("/me", restrict, (req, res) => {
  const id = req.token.subject;
  console.log(id);
  Customer.findBy(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.get("/favorites/me", restrict, (req, res) => {
  const id = req.token.subject;
  console.log(id);
  Customer.findFavorites(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.post("/favorites/add", restrict, async (req, res) => {
  const user_id = req.token.subject;
  const vendor_id = req.body;
  // const customer_id = await Customer.findCustomerId(user_id);
  console.log("vendor id", vendor_id.vendor_id);
  // console.log("cust id", customer_id[0].id);
  // Customer.addFavorite({
  //   customer_id: customer_id[0].id,
  //   vendor_id: vendor_id.vendor_id,
  // })
  Customer.addFavorite(user_id, vendor_id.vendor_id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.post("/profile", restrict, (req, res) => {
  const id = req.token.subject;
  const newUser = req.body;
  newUser.users_id = id;
  console.log("user token", req.token.subject);
  Customer.add(newUser)
    .then((data) => {
      res.status(200).json({ message: "Successful customer upload", data });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.put("/profile/update", restrict, (req, res) => {
  const id = req.token.subject;
  const data = req.body;
  Customer.updateCustomer(id, data)
    .then((data) => {
      res
        .status(200)
        .json({ message: "Successfully updated your profile", data });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "There was a problem updating your profile", err });
    });
});

router.delete("/:customerId", restrict, (req, res) => {
  const id = req.params.customerId;
  Customer.deleteCustomer(id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
