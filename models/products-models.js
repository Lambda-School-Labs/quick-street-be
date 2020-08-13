const db = require("../data/db-config");

module.exports = {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductImages,
  addProductImage,
  findProductById
};

function getProducts() {
  return db("products").select("*");
}

function getProductById(filter) {
  return db("products").where(filter);
}

function findProductById(id) {
  return db("products")
  .where({ id })
  .select("name", "description")
  .first();
}

function addProduct(newProduct) {
  return db("products").insert(newProduct);
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

function addProductImage(product_id, image_data) {
  return db("products")
  .where({"id" : product_id})
  .update({"public_id": image_data})
}