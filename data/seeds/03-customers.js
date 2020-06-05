exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("customers")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("customers").insert([
        {
          customer_name: "Gunner",
          email: "gunner@dog.com",
          password: "feedme",
          phone_number: "555-558-1234",
          address: "1234 Stanley Ave, Glendale, CA",
          zip_code: 91208,
        },
        {
          customer_name: "speedy",
          email: "speedy@cat.com",
          password: "run",
          phone_number: "555-559-1234",
          address: "1234 Stanley Ave, Glendale, CA",
          zip_code: 94109,
        },
        {
          customer_name: "slimy",
          email: "slimy@snake.com",
          password: "snake",
          phone_number: "555-552-1234",
          address: "1234 Stanle Ave, Glendale, CA",
          zip_code: 97224,
        },
      ]);
    });
};
