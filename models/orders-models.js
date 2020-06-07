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
  return db("orders").insert(newPost);
}

function getOrders() {
  return db("orders").select("*");
}

// function updatePost(id, data) {
//   return db("orders")
//     .where({ id })
//     .update(data)
//     .returning("*");
// }

// function deletePost(id) {
//   return db("orders")
//     .where({ id })
//     .del();
// }
