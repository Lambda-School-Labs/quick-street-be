const db = require("../data/db-config");

module.exports = {
  addUser,
  find,
  findBy,
  updateUser,
  deleteUser,
  findFavorites,
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


function findFavorites(filter) {
  return (
    db("users as u")
      .join("customers as c", "u.id", "c.users_id")
      .join("customer_favorites_map as m", "c.id", "m.customer_id")
      .join("vendors as v", "v.id", "m.vendor_id")
      // .join("vendors as v", "v.users_id", "u.id")
      .select("v.id")
      // .where({ "c.id":1 })
      .where({ "u.id": filter })
  );
}
