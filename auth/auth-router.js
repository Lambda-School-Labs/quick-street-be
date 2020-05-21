const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Customers = require("../api/customers/customers-model")
const Vendors = require("../api/vendors/vendorss-model")

const router = express.Router()




module.exports = router