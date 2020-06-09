exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("vendors")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("vendors").insert([
        {
          users_id: 1,
          business_name: "the dog store",
          phone_number: "555-555-1234",
          address: "1234 Stanley Ave, Glendale, CA",
          zip_code: 91206,
          description: "a store for dog goodies",
          vendor_category: "pets",
          bulletin: "here is dog stuff to know"
        },
        {
          users_id: 2,
          business_name: "cat store",
          phone_number: "555-556-1234",
          address: "1234 Stanley Ave, Glendale, CA",
          zip_code: 94107,
          description: "a store for cat stuffs",
          vendor_category: "pets",
          bulletin: "here is the bulletin about cat stuff"
        },
        {
          users_id: 3,
          business_name: "snake store",
          phone_number: "555-557-1234",
          address: "1234 Stanley Ave, Glendale, CA",
          zip_code: 97225,
          description: "a store for slimy stuff",
          vendor_category: "pets",
          bulletin: "just snake away"
        }
      ]);
    });
};
