const db = require("../data/db-config");

module.exports = {
  addUser,
  find,
  findBy,
  updateUser,
  deleteUser,
};

function addUser(newUser) {
  return db("users").insert(newUser).returning("*");
}

function find() {
  return db("users").select("*");
}

function findBy(filter) {
  return db("users").where({ email: filter }).first();
}

function updateUser(id, data) {
  return db("users").where({ id }).update(data).returning("*");
}

function deleteUser(id) {
  return db("users").where({ id }).del();
}
