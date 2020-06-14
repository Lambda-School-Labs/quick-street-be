const db = require("../data/db-config");

module.exports = {
  findBy,
  add,
  find,
  findVendorProducts,
  findVendorPosts,
  updateVendor,
  deleteVendor,
};

function findBy(filter) {
  return db("users as u")
    .join("vendors as v", "u.id", "v.users_id")
    .select("v.*")
    .where({ "u.id": filter });
}

function findVendorPosts(vendors_id) {
  return db("posts").where({ vendors_id });
}

function updateVendor(id, data) {
  return db("vendors").where({ id }).update(data).returning("*");
}

function findVendorProducts(filter) {
  return db("users as u")
    .join("vendors as v", "u.id", "v.users_id")
    .join("products as p", "v.id", "p.vendor_id")
    .select("p.*")
    .where({ "u.id": filter });
  // return db("products").where({ vendor_id });
}

function deleteVendor(id) {
  return db("vendors").where({ id }).del();
}

function add(newVendor) {
  return db("vendors").insert(newVendor);
}

function find() {
  return db("vendors").select("*");
}
