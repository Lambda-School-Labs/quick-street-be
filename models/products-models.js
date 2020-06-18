const db = require("../data/db-config");

// let productImages = [];

module.exports = {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductImages
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

function deleteProduct(id) {
  return db("products").where({ id }).del().returning("*");
}

function getProductImages(product_id) {
  return db("products as p")
  .select("p.public_id")
  .where({"p.id" : product_id});
}