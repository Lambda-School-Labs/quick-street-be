exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("customer_favorites_map")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("customer_favorites_map").insert([
        { customer_id: 1, vendor_id: 1},
        { customer_id: 1, vendor_id: 2},
        { customer_id: 1, vendor_id: 3},
        { customer_id: 2, vendor_id: 1},
        { customer_id: 2, vendor_id: 2},
        { customer_id: 2, vendor_id: 3},
        { customer_id: 4, vendor_id: 1},
        { customer_id: 4, vendor_id: 2},
        { customer_id: 4, vendor_id: 3},
      ]);
    });
};
