const db = require("../data/db-config");

module.exports = {
  getProductImages,
  getProductImagesById,
  addProductImages
};

function getProductImages(vendor_id) {
  return db("products as p")
  .select("p.public_id")
  .where({"p.vendor_id" : vendor_id});
}

function getProductImagesById(filter) {
  return db("productsImages").where(filter);
}

function addProductImages(newProduct) {
  return db("productsImages".insert(newProduct));
}