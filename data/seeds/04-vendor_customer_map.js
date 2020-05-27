exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("vendor_customer_map")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("vendor_customer_map").insert([
        { vendors_id: 1, customer_id: 1 },
        { vendors_id: 2, customer_id: 2 },
        { vendors_id: 3, customer_id: 3 }
      ]);
    });
};
