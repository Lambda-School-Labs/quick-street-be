exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("vendors")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("vendors").insert([
        {
          users_id: 7,
          business_name: "the dog store",
          phone: "555-555-1234",
          address: "1234 Stanley Ave",
          zipcode: 91206,
          city: "Glendale",
          description: "a store for dog goodies",
          vendor_category: "pets",
          bulletin: "here is dog stuff to know",
          hours: "10am to 11pm",
          email: "dog@123.com",
        },
        {
          users_id: 2,
          business_name: "cat store",
          phone: "555-556-1234",
          address: "1234 Stanley Ave",
          zipcode: 94107,
          city: "Glendale",
          description: "a store for cat stuffs",
          vendor_category: "pets",
          bulletin: "here is the bulletin about cat stuff",
          hours: "10am to 11pm",
          email: "cat@123.com",
        },
        {
          users_id: 3,
          business_name: "snake store",
          phone: "555-557-1234",
          address: "1234 Stanley Ave",
          zipcode: 97225,
          city: "Prescott",
          description: "a store for slimy stuff",
          vendor_category: "pets",
          bulletin: "just snake away",
          hours: "10am to 11pm",
          email: "snake@123.com",
        },
      ]);
    });
};
