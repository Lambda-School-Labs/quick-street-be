const db = require("../data/db-config");

module.exports = {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
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

function updateProduct(id, data) {
  return db("products").where({ id }).update(data).returning("*");
}
