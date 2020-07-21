const db = require("../data/db-config");

module.exports = {
  findBy,
  add,
  find,
  updateCustomer,
  deleteCustomer,
  findCustomerById,
};

function findBy(filter) {
  return db("customers").where({ users_id: filter }).select("*").first();
}

function findCustomerById(id) {
  return db("customers")
    .where({ id })
    .select("customer_name", "phone_number", "address", "zip_code")
    .first();
}

function add(customer) {
  return db("customers").insert(customer).returning("*");
}

function find() {
  return db("customers").select("*");
}

function updateCustomer(id, data) {
  return db("customers").where({ users_id: id }).update(data).returning("*");
}

function deleteCustomer(id) {
  return db("customers").where({ id }).del();
}
