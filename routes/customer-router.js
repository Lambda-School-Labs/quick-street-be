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


router.get("/me", restrict, (req, res) => {
  const id = req.token.subject;
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

  Customer.addFavorite(user_id, vendor_id.vendor_id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.delete("/favorites/delete/:id", restrict, (req, res) => {
  const { id } = req.params;
  Customer.deleteFavorite(id)
    .then((data) => {
      res
        .status(200)
        .json({ message: "You successfully deleted a favorite vendor.", data });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.post("/profile", restrict, (req, res) => {
  const id = req.token.subject;
  const newUser = req.body;
  newUser.users_id = id;

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


// ADD customer picture
router.put("/:id/profile-picture", restrict, (req, res) => {
  const id = req.token.subject;
  const image_data = req.body;


  Customer.addCustomerPicture(id, image_data.public_id)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
