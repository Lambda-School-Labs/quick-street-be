const db = require("../data/db-config");

module.exports = {
  findBy,
  add,
  find,
};

function findBy(filter) {
  return db("customers").where(filter);
}

function add(customer) {
  return db("customers").insert(customer);
}

function find() {
  return db("customers").select("*");
}
