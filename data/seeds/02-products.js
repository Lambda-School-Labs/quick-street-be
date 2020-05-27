
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {
          id: 1,
          vendor_id: "the dog store",
          name: "bone",
          description: "a store for goodies",
          product_category: "pets",
          diet_cateogry: "food"
          price: "here is the bulleting post"
        },
        {
          id: 2,
          vendor_id: "patch walls",
          name: "bone",
          description: "a store for goodies",
          product_category: "pets",
          diet_cateogry: "food"
          price: "here is the bulleting post"
        },
        {
          id: 3,
          vendor_id: "eat sandwich",
          name: "bone",
          description: "a store for goodies",
          product_category: "pets",
          diet_cateogry: "food"
          price: "here is the bulleting post"
        }
      ]);
    });
};
