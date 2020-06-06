const db = require("../data/db-config");

module.exports = {
  findBy,
  add,
  find,
  updateCustomer,
  deleteCustomer,
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

function updateCustomer(id, data) {
  return db("customers").where({ id }).update(data).returning("*");
}

function deleteCustomer(id) {
  return db("customers").where({ id }).del();
}
