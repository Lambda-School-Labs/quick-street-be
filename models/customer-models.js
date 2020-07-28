const db = require("../data/db-config");

module.exports = {
  findBy,
  add,
  find,
  updateCustomer,
  deleteCustomer,
  findCustomerById,
  findCustomerId,
  findFavorites,
  addFavorite,
  deleteFavorite,
};

function findBy(filter) {
  return db("customers").where({ users_id: filter }).select("*").first();
}

function findFavorites(filter) {
  return (
    db("users as u")
      .join("customers as c", "u.id", "c.users_id")
      .join("customer_favorites_map as m", "c.id", "m.customer_id")
      .join("vendors as v", "v.id", "m.vendor_id")
      // .join("vendors as v", "v.users_id", "u.id")
      .select("m.id", "v.business_name", "v.vendor_category")
      // .where({ "c.id":1 })
      .where({ "u.id": filter })
  );
}
function findCustomerId(user_id) {
  return db("users as u")
    .join("customers as c", "u.id", "c.users_id")
    .select("c.id")
    .where({ "u.id": user_id });
}

function deleteFavorite(favId) {
  return db("customer_favorites_map as m").where({ "m.id": favId }).del();
}

// function addFavorite(data) {
//   return db("customer_favorites_map as m").insert(data);
// }

function addFavorite(user_id, vendor_id) {
  let cust = findCustomerId(user_id);
  return db("customer_favorites_map as m")
    .join("customers as c", "m.customer_id", "c.id")
    .join("users as u", "u.id", "c.users_id")
    .where({ "u.id": user_id })
    .insert({ customer_id: cust, vendor_id: vendor_id });
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
