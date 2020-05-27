exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("customers")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("customers").insert([
        {
          id: 1,
          customer_name: "the dog store",
          email: "fix the shelving on the stoarge shed",
          password: false,
          phone_number: "555-555-1234",
          address: "1234 Stanley Ave, Glendale, CA",
          zip_code: 91206
        },
        {
          id: 2,
          customer_name: "patch walls",
          email: "",
          password: false,
          phone_number: "555-555-1234",
          address: "1234 Stanley Ave, Glendale, CA",
          zip_code: 91206
        },
        {
          id: 3,
          customer_name: "eat sandwich",
          email: "nom nom into your tummy",
          password: true,
          phone_number: "555-555-1234",
          address: "1234 Stanley Ave, Glendale, CA",
          zip_code: 91206
        }
      ]);
    });
};
