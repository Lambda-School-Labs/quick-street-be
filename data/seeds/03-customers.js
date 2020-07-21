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
          zip_code: 91208,
          public_id: "j4jtgeyfuaxvsnm1ejwj"
        },
        {
          users_id: 5,
          customer_name: "speedy",
          phone_number: "555-559-1234",
          address: "1234 Stanley Ave, Glendale, CA",
          zip_code: 94109,
          public_id: "catnip"
        },
        {
          users_id: 6,
          customer_name: "slimy",
          phone_number: "555-552-1234",
          address: "1234 Stanle Ave, Glendale, CA",
          zip_code: 97224,
          public_id: "mouse"
        },
        {
          users_id: 8,
          customer_name: "customer",
          phone_number: "555-552-9876",
          address: "1234 Stanle Ave, Glendale, CA",
          zip_code: 97211,
          public_id: "mouse"
        }
      ]);
    });
};
