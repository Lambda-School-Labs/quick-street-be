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
          description: "dog bone treat",
          product_category: "food",
          diet_cateogry: "carnivore",
          price: 6.3,
        },
        {
          vendor_id: 2,
          name: "canip",
          description: "time to get high kitty",
          product_category: "pets",
          diet_cateogry: "treat",
          price: 3.5,
        },
        {
          vendor_id: 3,
          name: "mouse",
          description: "dinner",
          product_category: "pets",
          diet_cateogry: "food",
          price: 2.2,
        },
      ]);
    });
};
