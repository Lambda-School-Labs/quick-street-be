exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("orders")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("orders").insert([
        { id: 1, customer_id: 1, product_id: 1, count: 90, total_price: 7658 },
        { id: 2, customer_id: 2, product_id: 2, count: 13, total_price: 235 },
        { id: 3, customer_id: 3, product_id: 3, count: 324, total_price: 18 }
      ]);
    });
};
