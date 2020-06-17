exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("products")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("products").insert([
        {
          vendor_id: 1,
          name: "bone",
          public_id: "j4jtgeyfuaxvsnm1ejwj",
          description: "dog bone treat",
          product_category: "food",
          diet_category: "carnivore",
          price: 6.3,
        },
        {
          vendor_id: 2,
          name: "catnip",
          public_id: "catnip",
          description: "time to get high kitty",
          product_category: "pets",
          diet_category: "treat",
          price: 3.5,
        },
        {
          vendor_id: 3,
          name: "mouse",
          public_id: "mouse",
          description: "dinner",
          product_category: "pets",
          diet_category: "food",
          price: 2.2,
        },
        {
          vendor_id: 1,
          name: "test",
          public_id: "Homemade-Dog-Treats-IG_zrl8pl",
          description: "test please",
          product_category: "pets",
          diet_category: "food",
          price: 2.5,
        },
      ]);
    });
};
