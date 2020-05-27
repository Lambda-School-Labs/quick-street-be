exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("vendors")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("vendors").insert([
        {
          id: 1,
          business_name: "the dog store",
          email: "fix the shelving on the stoarge shed",
          password: false,
          phone_number: "555-555-1234",
          address: "1234 Stanley Ave, Glendale, CA",
          zip_code: 91206,
          description: "a store for goodies",
          vendor_category: "pets",
          bullbulletin: "here is the bulleting post"
        },
        {
          id: 2,
          business_name: "patch walls",
          email: "",
          password: false,
          phone_number: "555-555-1234",
          address: "1234 Stanley Ave, Glendale, CA",
          zip_code: 91206,
          description: "a store for goodies",
          vendor_category: "pets",
          bullbulletin: "here is the bulleting post"
        },
        {
          id: 3,
          business_name: "eat sandwich",
          email: "nom nom into your tummy",
          password: true,
          phone_number: "555-555-1234",
          address: "1234 Stanley Ave, Glendale, CA",
          zip_code: 91206,
          description: "a store for goodies",
          vendor_category: "pets",
          bullbulletin: "here is the bulleting post"
        }
      ]);
    });
};
