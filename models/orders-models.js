const db = require("../data/db-config");

module.exports = {
  getOrders,
  getOrderById,
  addOrder
};

function getOrderById(filter) {
  return db("orders").where(filter);
}

function addOrder(newOrder) {
  return db("orders").insert(newOrder);
}

function getOrders() {
  return db("orders").select("*");
}

// function deletePost(id) {
//   return db("orders")
//     .where({ id })
//     .del();
// }
