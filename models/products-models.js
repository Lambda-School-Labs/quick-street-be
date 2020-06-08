const db = require("../data/db-config");

module.exports = {
  getProduts,
  getProductById,
  addProduct,
  editProduct,
  deleteProduct,
  increaseProductCount,
  decreaseProductCount
};

function addProduct(newProduct) {
  return db("products").insert(newProduct);
}

function getProductById(filter) {
  return db("products").where(filter);
}

function getProduts() {
  return db("products").select("*");
}

function editProduct(id, date) {
  return db("products")
    .where({ id })
    .update(data)
    .returning("*");
}

function deleteProduct(id) {
  return db("products")
    .where({ id })
    .del();
}

function increaseProductCount() {}

function decreaseProductCount() {}
