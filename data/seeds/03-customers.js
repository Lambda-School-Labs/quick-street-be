exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("customers")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("customers").insert([
        {
          users_id: 4,
          customer_name: "Gunner",
          phone_number: "555-558-1234",
          address: "1234 Stanley Ave, Glendale, CA",
          zip_code: 91208
        },
        {
          users_id: 5,
          customer_name: "speedy",
          phone_number: "555-559-1234",
          address: "1234 Stanley Ave, Glendale, CA",
          zip_code: 94109
        },
        {
          users_id: 6,
          customer_name: "slimy",
          phone_number: "555-552-1234",
          address: "1234 Stanle Ave, Glendale, CA",
          zip_code: 97224
        }
      ]);
    });
};
