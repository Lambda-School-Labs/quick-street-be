const db = require("../data/db-config");

module.exports = {
  getOrders,
  getOrderById,
  addOrder,
  findBy
};


function findBy(filter) {
  return db("users as u")
    .join("customers as c", "u.id", "c.users_id")
    .join("orders as o", "o.customer_id", "c.id")
    .join("products as p", "p.id", "o.product_id")
    .join("vendors as v", "v.id", "p.vendor_id")
    .select("o.*", "p.*", "v.*")
    .where({ "u.id": filter });
}

function getOrderById(filter) {
  return db("orders").where(filter);
}

function addOrder(newOrder) {
  return db("orders").insert(newOrder);
}

function getOrders() {
  return db("orders").select("*");
}

