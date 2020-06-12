const db = require("../data/db-config");
const { where } = require("../data/db-config");

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
  return db("posts as p")
  .join('vendors as v', 'v.id', 'p.vendors_id')
  .join("users as u", 'u.id', 'v.users_id')
  .select("p.*")
  .where({"u.id": vendors_id });
}

// select * from posts as p
// join vendors as v 
// on p.vendors_id=v.id 
// join users as u
// on v.users_id=u.id

function updateVendor(id, data) {
  return db("vendors").where({ id }).update(data).returning("*");
}

function findVendorProducts(vendors_id) {
  return db("products as p")
  .join('vendors as v', 'v.id', 'p.vendor_id')
  .join("users as u", 'u.id', 'v.users_id')
  .select("p.*")
  .where({"u.id": vendors_id });
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
