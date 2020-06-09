const db = require("../data/db-config");

module.exports = {
  getProducts,
  getProductById,
  addProduct
};

function getProducts() {
  return db("products").select("*");
}

function getProductById(filter) {
  return db("products").where(filter);
}

function addProduct(newProduct) {
  return db("products".insert(newProduct));
}