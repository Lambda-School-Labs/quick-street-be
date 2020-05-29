const db = require("../data/db-config");

module.exports = {
  findBy,
  add,
  find,
};

function findBy(filter) {
  return db("vendors").where(filter);
}

function add(newVendor) {
  return db("vendors").insert(newVendor);
}

function find() {
  return db("vendors").select("*");
}
