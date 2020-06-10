const db = require("../data/db-config");

module.exports = {
  getProductImages,
  getProductImagesById,
  addProductImages
};

function getProductImages() {
  return db("productsImages").select("*");
}

function getProductImagesById(filter) {
  return db("productsImages").where(filter);
}

function addProductImages(newProduct) {
  return db("productsImages".insert(newProduct));
}