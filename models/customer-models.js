const db = require("../data/db-config");

module.exports = {
  findBy,
  add,
  find,
  updateCustomer,
  deleteCustomer,
  findCustomerById
};

function findBy(filter) {
  return db("customers").where(filter);
}

function findCustomerById(id) {
  return db("customers")
  .where({ id})
  .select("customer_name", "phone_number", "address", "zip_code" )
  .first();
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
